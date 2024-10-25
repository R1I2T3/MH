export default function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const samplePrompts = [
      {
        text: "What's the current sentiment for AAPL?",
        description: "Analyze market sentiment"
      },
      {
        text: "Show me MSFT's balance sheet",
        description: "View financial statements"
      },
      {
        text: "Give me an overview of GOOGL",
        description: "Company overview"
      }
    ];
  
    res.status(200).json(samplePrompts);
  }