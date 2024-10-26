# Jaagrit - Investment Insights Platform

Jaagrit simplifies access to financial data by delivering intuitive, real-time insights and in-depth company analysis, empowering users to make informed investment decisions. With its innovative approach, Jaagrit democratizes financial knowledge for both novice and experienced investors.

Imagine a robust, intelligent chatbot interface that transforms how users engage with stock market insights. This comprehensive solution empowers users to seamlessly search for and access company stock performance, providing a powerful yet user-friendly experience. Beyond simple queries, Jaagrit offers in-depth analytical capabilities that transform complex market data into actionable insights. This project bridges the gap between raw data and insightful analysis, making financial expertise accessible to all.

---

## Key Features

- **Natural Language Querying**: Search for stock and company insights using natural language, allowing a seamless, user-friendly experience.
- **Real-time Data Analysis**: Get up-to-date financial data, market sentiments, and personalized analysis displayed in an accessible format.
- **Intelligent Recommendations**: Receive data-driven stock suggestions to make confident, informed investment decisions.
- **Usage Monitoring**: Track daily query usage to stay within set limits, ensuring platform consistency.

---

## API Documentation

### Endpoints

#### `POST /api/query`
Processes a natural language query about stocks and companies.

- **Request Body**:
    ```json
    {
      "query": "string",
      "userId": "string"
    }
    ```

- **Response**:
    ```json
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
    ```

#### `GET /api/usage`
Retrieves the current usage statistics for a user.

- **Query Parameters**:
  - `userId`: `string`

- **Response**:
    ```json
    {
      "queriesUsed": "number",
      "queriesRemaining": "number"
    }
    ```

### Rate Limiting
- **Limit**: 20 queries per user per day.
- **Headers**: Rate limit headers are included in responses.

### Error Responses
All error responses follow the format:
```json
{
  "message": "string"
}
