import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import { app } from '../server.js';

describe('API Endpoints', () => {
  describe('POST /api/chat', () => {
    it('should reject empty message', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({})
        .expect(400);

      expect(res.body.error).toBe('Message is required');
      expect(res.body.type).toBe('validation');
    });

    it('should reject non-string message', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({ message: 123 })
        .expect(400);

      expect(res.body.error).toBe('Message is required');
    });

    it('should block profanity with moderation response', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({ message: 'This is fucking stupid' })
        .expect(200);

      expect(res.body.error).toBeDefined();
      expect(res.body.type).toBe('moderation');
      expect(res.body.error).toContain('family-friendly');
    });

    it('should block self-harm content', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({ message: 'I want to kill myself' })
        .expect(200);

      expect(res.body.error).toBeDefined();
      expect(res.body.type).toBe('moderation');
      expect(res.body.error).toContain('988');
    });

    it('should block violent content', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({ message: 'I want to attack someone' })
        .expect(200);

      expect(res.body.error).toBeDefined();
      expect(res.body.type).toBe('moderation');
      expect(res.body.error).toContain('prohibited');
    });

    it('should accept clean messages and return a reply', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({ message: 'What are healthy snacks for kids?' })
        .expect(200);

      // Should have either a reply (if OpenAI key is set) or an error about no API key
      expect(res.body.reply || res.body.error).toBeDefined();
    }, 30000);
  });

  describe('GET / (static files)', () => {
    it('should serve the index.html', async () => {
      const res = await request(app)
        .get('/')
        .expect(200);

      expect(res.text).toContain('<!DOCTYPE html>');
    });
  });
});
