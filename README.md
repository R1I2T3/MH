# Project Structure

## 📁 Root Directory
```
stock-insights-platform/
├── .env                        # Environment variables
├── .gitignore                 
├── package.json               # Project dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project documentation
```

## 📁 Source Directory
```
src/
├── app/                       # Next.js frontend and API routes
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
```

## 📁 Components
```
components/
├── ui/                       # Reusable UI components
│   ├── button.tsx
│   ├── card.tsx
│   └── input.tsx
├── StockInsights.tsx        # Main component
├── InsightCard.tsx          # Results display component
└── SearchBar.tsx            # Search component
```

## 📁 Library
```
lib/
├── types.ts                 # TypeScript interfaces
├── constants.ts             # Constants and config
└── utils.ts                 # Utility functions
```

## 📁 API Routes
```
pages/api/
├── query.ts                # Query processing endpoint
├── usage.ts                # Usage tracking endpoint
└── prompts.ts             # Example prompts endpoint
```

## 📁 Styles
```
styles/
└── tailwind.css          # Tailwind CSS config
```

## 📁 Database
```
prisma/
├── schema.prisma         # Database schema
└── migrations/          # Database migrations
```

## 📁 NLP Service
```
nlp_service/
├── requirements.txt     # Python dependencies
├── main.py             # FastAPI application
├── services/
│   ├── intent_detection.py
│   ├── financial_data.py
│   └── sentiment_analysis.py
├── models/
│   ├── request.py
│   └── response.py
└── utils/
    ├── constants.py
    └── helpers.py
```

## 📁 Tests
```
tests/
├── frontend/
│   └── components/
│       ├── StockInsights.test.tsx
│       └── InsightCard.test.tsx
├── api/
│   └── query.test.ts
└── nlp_service/
    └── test_main.py
```

## 📁 Documentation
```
docs/
├── API.md
├── SETUP.md
└── ARCHITECTURE.md
```

# Installation Guide

## Prerequisites
- Node.js 16+
- Python 3.8+
- PostgreSQL

## Setup Steps

1. **Clone Repository**
```bash
git clone [repository-url]
cd stock-insights-platform
```

2. **Install Dependencies**
```bash
# Frontend/Backend
npm install

# NLP Service
cd nlp_service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. **Environment Setup**
Create `.env` file:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/stockinsights"
NEWS_API_KEY="your_news_api_key"
YAHOO_FINANCE_API_KEY="your_yahoo_finance_api_key"
```

4. **Database Initialization**
```bash
npx prisma migrate dev
```

5. **Start Services**
```bash
# Start Next.js app
npm run dev

# Start NLP service
npm run nlp
```

# API Documentation

## Endpoints

### Query Processing
`POST /api/query`

**Request Body:**
```json
{
  "query": "string",
  "userId": "string"
}
```

**Response:**
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

### Usage Statistics
`GET /api/usage`

**Query Parameters:**
- `userId`: string

**Response:**
```json
{
  "queriesUsed": "number",
  "queriesRemaining": "number"
}
```

## Rate Limiting
- 20 queries per user per day
- Rate limit headers included in responses

## Error Handling
```json
{
  "message": "string"
}
```

# Security Guidelines

## Rate Limiting
- Implement per-user rate limiting
- Track daily query usage
- Set appropriate limits based on user tier

## Input Validation
- Sanitize all user inputs
- Validate query parameters
- Implement request size limits

## API Security
- Secure API key storage
- Implement authentication
- Monitor API usage

# System Architecture

## Component Overview

### Frontend (Next.js)
- React components
- Real-time updates
- Responsive design
- Client-side caching

### Backend (Next.js API)
- API endpoints
- Query processing
- Rate limiting
- Database interactions

### NLP Service (FastAPI)
- Query analysis
- Intent detection
- Sentiment analysis
- Financial data integration

### Database (PostgreSQL)
- User profiles
- Query history
- Company data
- Caching layer

## Data Flow
1. User submits query
2. Backend processes request
3. NLP service analyzes
4. Data retrieval & analysis
5. Response formatting
6. Client presentation
