import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { query } = req.body;
    const nlpResponse = await fetch(`${process.env.NLP_SERVICE_URL}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const nlpData = await nlpResponse.json();
    await prisma.query.create({
      data: { queryText: query, responseData: nlpData },
    });
    return res.status(200).json(nlpData);
  } catch (error) {
    console.error("Query processing error:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}
