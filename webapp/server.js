import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();
app.use(express.json());

// ======================== CONFIG ========================

const MODEL = 'gpt-4-turbo-preview';
const MAX_TOKENS = 500;
const TEMPERATURE = 0.7;

const SYSTEM_PROMPT = `You are a compassionate, evidence-based health educator specializing in
childhood obesity prevention and cancer risk reduction.

GUIDELINES:
- Provide accurate, science-backed information
- Use accessible, supportive language (8th-grade reading level)
- Focus on prevention, healthy habits, and empowering families
- Keep responses concise (2-3 paragraphs) unless detail requested
- Always emphasize hope and actionable steps
- If asked about medical concerns, recommend consulting healthcare provider
- Never provide medical diagnoses

TONE: Warm, encouraging, educational, non-judgmental`;

// ======================== MODERATION ========================

const PROFANITY_PATTERNS = [
  /\b(fuck|fucking|shit|damn|bitch|ass|asshole|hell|crap)\b/i,
  /\b(bastard|piss|cock|dick)\b/i,
];

const HARMFUL_TOPICS = [
  'suicide', 'self-harm', 'self harm', 'kill myself', 'end my life',
  'want to die', 'cutting myself', 'overdose',
];

const VIOLENT_KEYWORDS = [
  'want to attack', 'how to attack', 'build a bomb',
  'terrorist', 'want to hurt', 'planning to assault',
];

const SAFETY_MESSAGES = {
  profanity: 'Please use family-friendly language.',
  harmful:
    "If you're experiencing thoughts of self-harm, please contact:\n\n" +
    '- National Suicide Prevention Lifeline: 988\n' +
    '- Crisis Text Line: Text HOME to 741741',
  violent: 'This platform is for health education only. Violent content is not permitted.',
  default: "Your message contains content that doesn't align with our community guidelines.",
};

export function checkContentSafety(text, openaiClient) {
  if (!text || !text.trim()) {
    return { safe: false, reason: 'default' };
  }
  const lower = text.toLowerCase();

  for (const pattern of PROFANITY_PATTERNS) {
    if (pattern.test(lower)) {
      return { safe: false, reason: 'profanity' };
    }
  }

  for (const topic of HARMFUL_TOPICS) {
    if (lower.includes(topic)) {
      return { safe: false, reason: 'harmful' };
    }
  }

  for (const keyword of VIOLENT_KEYWORDS) {
    if (lower.includes(keyword)) {
      return { safe: false, reason: 'violent' };
    }
  }

  return { safe: true, reason: null };
}

async function checkContentSafetyAsync(text, openaiClient) {
  const localCheck = checkContentSafety(text, openaiClient);
  if (!localCheck.safe) return localCheck;

  if (openaiClient) {
    try {
      const resp = await openaiClient.moderations.create({ input: text });
      if (resp.results[0].flagged) {
        return { safe: false, reason: 'default' };
      }
    } catch {
      // If moderation API fails, allow through (local checks already passed)
    }
  }

  return { safe: true, reason: null };
}

// ======================== OPENAI CLIENT ========================

let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// ======================== API ROUTES ========================

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required', type: 'validation' });
  }

  // Content moderation
  const safety = await checkContentSafetyAsync(message, openai);
  if (!safety.safe) {
    return res.json({
      error: SAFETY_MESSAGES[safety.reason] || SAFETY_MESSAGES.default,
      type: 'moderation',
    });
  }

  if (!openai) {
    return res.json({
      reply:
        "I'm currently unable to connect to the AI service. Please ensure the API key is configured. " +
        'In the meantime, explore our Learn and Resources pages for helpful information about childhood obesity prevention!',
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      temperature: TEMPERATURE,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    return res.json({ reply });
  } catch (err) {
    console.error('OpenAI API error:', err.message);
    return res.status(500).json({ error: 'Failed to get AI response. Please try again.', type: 'api_error' });
  }
});

// ======================== STATIC FILES ========================

app.use(express.static(join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// ======================== START ========================

const PORT = process.env.PORT || 3000;

// Only start the server when run directly (not when imported for tests)
const isMainModule = process.argv[1] && (
  process.argv[1].endsWith('/server.js') || process.argv[1].endsWith('\\server.js')
);

if (isMainModule) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`OpenAI API key: ${openai ? 'configured' : 'NOT SET'}`);
  });
}

export { app, PROFANITY_PATTERNS, HARMFUL_TOPICS, VIOLENT_KEYWORDS, SAFETY_MESSAGES };
