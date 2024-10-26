# Stock Insights Platform API Documentation

## Endpoints

### POST /api/query
Process a natural language query about stocks and companies.

*Request Body:*
json
{
  "query": "string",
  "userId": "string"
}


*Response:*
json
{
  "intent": "string",
  "company_name": "string",
  "financial_data": {
    "ticker": "string",
    "price": "number",
    "change": "number",
    "volume": "number",
    "market_cap": "number"
  },
  "news_sentiment": [
    {
      "title": "string",
      "description": "string",
      "sentiment": "number"
    }
  ],
  "analysis": "string"
}


### GET /api/usage
Get the current usage statistics for a user.

*Query Parameters:*
- userId: string

*Response:*
json
{
  "queriesUsed": "number",
  "queriesRemaining": "number"
}


## Rate Limiting
- 20 queries per user per day
- Rate limit headers included in responses

## Error Responses
All error responses follow the format:
json
{
  "message": "string"
}
