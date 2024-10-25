export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { query } = req.body;
    const userId = req.headers['user-id'];

    // Verify that userId is provided
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Check query limit
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { queryLimit: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.queryLimit <= 0) {
      return res.status(429).json({ error: 'Daily query limit exceeded' });
    }

    // Process query through NLP service
    const nlpResponse = await fetch(`${process.env.NLP_SERVICE_URL}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const nlpData = await nlpResponse.json();

    // Save query to database
    await prisma.query.create({
      data: { queryText: query, responseData: nlpData, userId: userId },
    });

    // Update user's query limit
    await prisma.user.update({
      where: { id: userId },
      data: { queryLimit: { decrement: 1 } },
    });

    // Format response
    const insights = formatInsights(nlpData);
    return res.status(200).json(insights);

  } catch (error) {
    console.error('Query processing error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
