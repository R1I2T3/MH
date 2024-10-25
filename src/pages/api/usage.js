import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const userId = req.headers['user-id']; // In production, use proper auth

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        queryLimit: true,
        queries: {
          select: {
            createdAt: true
          },
          orderBy: {
            createdAt: 'desc'
          },
          take: 5
        }
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      remainingQueries: user.queryLimit,
      recentQueries: user.queries
    });

  } catch (error) {
    console.error('Usage fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}