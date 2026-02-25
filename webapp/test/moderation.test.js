import { describe, it, expect } from '@jest/globals';
import { checkContentSafety, PROFANITY_PATTERNS, HARMFUL_TOPICS, VIOLENT_KEYWORDS, SAFETY_MESSAGES } from '../server.js';

describe('Content Moderation', () => {
  describe('Profanity Filter', () => {
    it('should allow clean language', () => {
      const result = checkContentSafety('This is a great app!');
      expect(result.safe).toBe(true);
    });

    it('should block profanity', () => {
      const result = checkContentSafety('This is fucking great');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('profanity');
    });

    it('should block mild profanity', () => {
      const result = checkContentSafety('What the hell is this?');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('profanity');
    });

    it('should allow normal questions', () => {
      const result = checkContentSafety('How can I help my child?');
      expect(result.safe).toBe(true);
    });

    it('should block additional profanity', () => {
      const result = checkContentSafety("This shit doesn't work");
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('profanity');
    });
  });

  describe('Self-Harm Detection', () => {
    it('should allow normal sadness', () => {
      const result = checkContentSafety("I'm feeling sad today");
      expect(result.safe).toBe(true);
    });

    it('should block suicide ideation', () => {
      const result = checkContentSafety('I want to kill myself');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('harmful');
    });

    it('should block self-harm mention', () => {
      const result = checkContentSafety('Thinking about self-harm');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('harmful');
    });

    it('should block end my life', () => {
      const result = checkContentSafety('I want to end my life');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('harmful');
    });

    it('should allow depression mention', () => {
      const result = checkContentSafety('Feeling depressed');
      expect(result.safe).toBe(true);
    });

    it('should block cutting myself', () => {
      const result = checkContentSafety("I'm cutting myself");
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('harmful');
    });
  });

  describe('Violence Detection', () => {
    it('should allow health questions', () => {
      const result = checkContentSafety('What causes obesity?');
      expect(result.safe).toBe(true);
    });

    it('should block violent intent', () => {
      const result = checkContentSafety('I want to attack someone');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('violent');
    });

    it('should block weapon creation', () => {
      const result = checkContentSafety('Build a bomb');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('violent');
    });

    it('should allow prevention topics', () => {
      const result = checkContentSafety('How to prevent childhood obesity');
      expect(result.safe).toBe(true);
    });
  });

  describe('Empty Input Handling', () => {
    it('should block empty string', () => {
      const result = checkContentSafety('');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('default');
    });

    it('should block whitespace-only', () => {
      const result = checkContentSafety('   ');
      expect(result.safe).toBe(false);
      expect(result.reason).toBe('default');
    });
  });

  describe('Safety Messages', () => {
    const reasons = ['profanity', 'harmful', 'violent', 'default'];

    reasons.forEach((reason) => {
      it(`should have a message for "${reason}"`, () => {
        expect(SAFETY_MESSAGES[reason]).toBeDefined();
        expect(SAFETY_MESSAGES[reason].length).toBeGreaterThan(0);
      });
    });
  });

  describe('Constants Integrity', () => {
    it('should have profanity patterns', () => {
      expect(PROFANITY_PATTERNS.length).toBeGreaterThan(0);
    });

    it('should have harmful topics', () => {
      expect(HARMFUL_TOPICS.length).toBeGreaterThan(0);
      expect(HARMFUL_TOPICS).toContain('suicide');
      expect(HARMFUL_TOPICS).toContain('self-harm');
    });

    it('should have violent keywords', () => {
      expect(VIOLENT_KEYWORDS.length).toBeGreaterThan(0);
      expect(VIOLENT_KEYWORDS).toContain('build a bomb');
    });
  });
});
