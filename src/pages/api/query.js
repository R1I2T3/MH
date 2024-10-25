import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { query } = req.body;

    // Mock data for demonstration
    const insights = [
      { title: `Insight for ${query}`, content: "This is a sample stock insight." },
      { title: `Market Trend on ${query}`, content: "Sample content about market trends." }
    ];

    res.status(200).json({ insights });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
