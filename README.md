# 🌐 Preventable Pathways

**Enterprise-Grade Health Education Web Application**

A professionally architected webapp focused on childhood obesity prevention and pancreatic cancer risk education, featuring AI-powered guidance with comprehensive content moderation.

## 🏗️ Architecture

### SOLID Principles ✅

- **Single Responsibility:** Each class has one clear purpose
- **Open/Closed:** Extensible without modification
- **Liskov Substitution:** Consistent service interfaces
- **Interface Segregation:** Focused, minimal interfaces
- **Dependency Inversion:** Dependencies injected, not hardcoded

### Design System 🎨

- **Google Material Design 3** specifications
- **Roboto** typography system
- **Material color palette** (Primary: Blue #1976D2, Secondary: Green #4CAF50)
- **Elevation** shadows and depth
- **Responsive** breakpoints (mobile/tablet/desktop)

### Content Safety 🛡️

**Multi-Layer Content Moderation:**

1. **Profanity Filter** - Regex-based inappropriate language detection
2. **Self-Harm Prevention** - Crisis resource intervention
3. **Violence Detection** - Harmful content blocking
4. **OpenAI Moderation API** - Real-time content screening
5. **Vulgar Content Filter** - Age-appropriate enforcement

**Protected Categories:**
- ❌ Profanity & vulgar language
- ❌ Self-harm & suicide content
- ❌ Violence & weapons
- ❌ Harassment & hate speech
- ❌ Sexual content
- ❌ Inappropriate requests

**Crisis Resources Provided:**
- 📞 National Suicide Prevention Lifeline: **988**
- 💬 Crisis Text Line: **Text HOME to 741741**

## ✨ Features

- 🏠 **Interactive Homepage** - Material Design cards, stats, infographics
- 📚 **Educational Content** - Obesity-cancer connection with interactive quizzes
- 💬 **AI Chatbot** - GPT-4 powered Q&A with content moderation
- 🍎 **Meal Planning** - Age-specific plans, AI suggestions, grocery lists
- 📖 **Resources** - Articles, videos, downloadable guides
- 🛡️ **Enterprise Security** - Multi-layer content filtering

## 🚀 Quick Start

### Prerequisites

- Python 3.9+
- OpenAI API key
- Railway account (for production)

### Local Development

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Set environment variable
export OPENAI_API_KEY=sk-proj-your-key-here

# 3. Run application
streamlit run app.py

# 4. Open browser
# http://localhost:8501
```

## 🚂 Railway Deployment

### Method 1: GitHub Integration (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "feat: Production-ready webapp"
git push origin main

# 2. Deploy on Railway
# - Go to railway.app
# - New Project → Deploy from GitHub
# - Select repository
# - Add environment variable: OPENAI_API_KEY
# - Deploy automatically
```

### Method 2: Railway CLI

```bash
# Install CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway variables set OPENAI_API_KEY=sk-proj-your-key
railway up

# Get URL
railway domain
```

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete instructions.

## 🛡️ Security & Guardrails

### Content Moderation Flow

```
User Input
    ↓
[Profanity Filter]
    ↓
[Self-Harm Detection] → Crisis Resources
    ↓
[Violence Filter]
    ↓
[OpenAI Moderation API]
    ↓
[Safe] → AI Response
[Unsafe] → Blocked + Message
```

### API Key Protection

```python
# ✅ CORRECT: Environment variables
api_key = os.getenv("OPENAI_API_KEY")

# ❌ WRONG: Hardcoded
api_key = "sk-proj-..."  # NEVER!
```

### Content Moderation Examples

```python
# ❌ BLOCKED - Profanity
"This is fucking great"
→ "⚠️ Please use family-friendly language."

# ❌ BLOCKED - Self-harm
"I want to harm myself"
→ Crisis resources provided (988, Crisis Text Line)

# ❌ BLOCKED - Violence
"How to build a weapon"
→ "⚠️ Violent content not permitted."

# ✅ ALLOWED - Appropriate
"How can I help my child eat healthier?"
→ AI provides helpful response
```

## 📁 Project Structure

```
preventablepathways/
├── app.py                    # Main application (SOLID architecture)
├── requirements.txt          # Python dependencies
├── railway.toml             # Railway deployment config
├── nixpacks.toml            # Nixpacks build config
├── .env.example             # Environment template
├── .gitignore               # Git ignore rules
├── README.md                # This file
├── DEPLOYMENT_GUIDE.md      # Detailed deployment guide
└── Requirements.md          # Original feature requirements
```

## 🎨 Code Architecture

### Services (Dependency Injection)

```python
# Content Moderation Service
class ContentModerationService:
    - is_safe(text) → (bool, reason)
    - _contains_profanity()
    - _contains_harmful_content()
    - _contains_violence()
    - _openai_moderation()

# AI Service
class AIService:
    - get_response(messages) → str
    - get_meal_suggestions(age, prefs) → str

# Material UI Components
class MaterialUI:
    - inject_material_css()
    - display_stat_card()
    - display_action_card()
    - display_alert()

# Application Controller
class PreventablePathwaysApp:
    - run()
    - _render_sidebar()
    - _render_home_page()
    - _render_chat_page()
    - _render_meal_plans_page()
```

### Configuration

```python
@dataclass
class AppConfig:
    PAGE_TITLE = "Preventable Pathways"
    PRIMARY_COLOR = "#1976D2"     # Material Blue
    SECONDARY_COLOR = "#4CAF50"   # Material Green
    OPENAI_MODEL = "gpt-4-turbo-preview"
    MAX_TOKENS = 500
    AI_TEMPERATURE = 0.7
```

## 🧪 Testing

### Manual Test Checklist

- [ ] Homepage Material Design loads correctly
- [ ] Navigation works across all pages
- [ ] AI chat responds to appropriate questions
- [ ] Profanity filter blocks inappropriate language
- [ ] Self-harm detection shows crisis resources
- [ ] Violence filter blocks harmful content
- [ ] OpenAI Moderation API active
- [ ] Meal plans display for all age groups
- [ ] AI meal suggestions generate
- [ ] Quiz validation works
- [ ] Mobile responsive
- [ ] No browser console errors

### Test Content Moderation

```bash
# Run app
streamlit run app.py

# Test in AI Chat:
1. "How does obesity affect health?" → ✅ Should work
2. "This is fucking great" → ❌ Should block (profanity)
3. "I'm thinking about suicide" → ❌ Should show crisis resources
4. "How to build a weapon" → ❌ Should block (violence)
```

## 📊 Performance

### Current Configuration

- **Model:** GPT-4 Turbo Preview
- **Max Tokens:** 500 per response
- **Temperature:** 0.7 (balanced creativity)
- **Cost:** ~$0.01 per 1K input tokens

### Optimization Options

```python
# For lower cost/faster responses
config.OPENAI_MODEL = "gpt-3.5-turbo"  # 10x cheaper
config.MAX_TOKENS = 300                 # Faster responses

# For more detailed responses
config.MAX_TOKENS = 800
config.TEMPERATURE = 0.5                # More focused
```

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | ✅ Yes | Your OpenAI API key |
| `PORT` | ⚠️ Auto | Railway sets automatically |

## 📱 Responsive Design

Material Design breakpoints:
- **Mobile:** < 600px
- **Tablet:** 600-960px
- **Desktop:** > 960px

All UI components automatically adapt.

## 🐛 Troubleshooting

### "OpenAI API key not found"

```bash
# Railway
railway variables set OPENAI_API_KEY=sk-proj-your-key

# Local
export OPENAI_API_KEY=sk-proj-your-key
```

### Slow AI Responses

```python
# Switch to GPT-3.5
config.OPENAI_MODEL = "gpt-3.5-turbo"

# Reduce tokens
config.MAX_TOKENS = 300
```

### Deployment Fails

```bash
# Check logs
railway logs

# Verify requirements
cat requirements.txt

# Check Python version
python --version  # Should be 3.9+
```

## 📚 Documentation

- **Deployment:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Requirements:** [Requirements.md](Requirements.md)
- **Streamlit Docs:** [docs.streamlit.io](https://docs.streamlit.io)
- **OpenAI API:** [platform.openai.com/docs](https://platform.openai.com/docs)
- **Material Design:** [material.io](https://material.io)

## 🎯 Tech Stack

- **Framework:** Streamlit 1.32.0
- **AI:** OpenAI GPT-4 Turbo
- **Design:** Google Material Design 3
- **Language:** Python 3.9+
- **Deployment:** Railway
- **Architecture:** SOLID Principles
- **Security:** Multi-layer content moderation

## 📞 Support

- **Email:** info@preventablepathways.org
- **Issues:** GitHub Issues
- **Documentation:** See `/docs` folder

## 📄 License

Educational purposes only. Consult healthcare professionals for medical advice.

## 🙏 Acknowledgments

- **OpenAI** - GPT-4 API & Moderation API
- **Streamlit** - Incredible Python framework
- **Railway** - Seamless deployment platform
- **Google** - Material Design system
- **CDC, NCI, ACS** - Health data and research

---

## 🚀 Quick Commands

```bash
# Local development
streamlit run app.py

# Railway deployment
railway up

# Check logs
railway logs

# Set API key
railway variables set OPENAI_API_KEY=your-key

# Monitor OpenAI usage
# Visit: https://platform.openai.com/usage
```

---

**Built with ❤️ following enterprise best practices**

**Architecture:** SOLID Principles ✅
**Design:** Material Design 3 ✅
**Security:** Multi-Layer Moderation ✅
**Production:** Railway-Ready ✅
