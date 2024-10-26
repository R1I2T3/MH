# Setup Guide

## Prerequisites
- Node.js 16+
- Python 3.8+
- PostgreSQL

## Installation

1. Clone the repository:
bash
git clone [repository-url]
cd stock-insights-platform


2. Install dependencies:
bash
# Frontend/Backend
npm install

# NLP Service
cd nlp_service
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt


3. Set up environment variables:
Create a .env file in the root directory and add:

DATABASE_URL="postgresql://user:password@localhost:5432/stockinsights"
NEWS_API_KEY="your_news_api_key"
YAHOO_FINANCE_API_KEY="your_yahoo_finance_api_key"


4. Initialize the database:
bash
npx prisma migrate dev


5. Start the services:
bash
# Start the Next.js app
npm run dev

# Start the NLP service
npm run nlp
