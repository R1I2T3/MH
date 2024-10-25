import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/query';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client');

describe('Query API', () => {
  let req, res;

  beforeEach(() => {
    const { req: request, res: response } = createMocks({
      method: 'POST',
      body: {
        query: "What's the sentiment for AAPL?"
      },
      headers: {
        'user-id': 'test-user-id'
      }
    });
    req = request;
    res = response;
  });

  it('returns 405 for non-POST requests', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Method not allowed'
    });
  });

  it('processes valid queries successfully', async () => {
    // Mock Prisma responses
    PrismaClient.mockImplementation(() => ({
      user: {
        findUnique: jest.fn().mockResolvedValue({ queryLimit: 10 }),
        update: jest.fn().mockResolvedValue({})
      },
      query: {
        create: jest.fn().mockResolvedValue({})
      }
    }));

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          content: expect.any(String),
          type: expect.any(String)
        })
      ])
    );
  });
});