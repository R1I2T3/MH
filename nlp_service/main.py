from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.intent_detection import detect_intent
from services.financial_data import get_financial_data
from services.sentiment_analysis import analyze_sentiment
from models.request import QueryRequest
from models.response import QueryResponse
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze", response_model=QueryResponse)
async def analyze_query(request: QueryRequest):
    try:
        # Detect intent of the query
        intent = detect_intent(request.query)
        
        # Get financial data if needed
        financial_data = get_financial_data(request.query, intent)
        
        # Analyze sentiment if needed
        sentiment = analyze_sentiment(request.query, intent)
        
        return QueryResponse(
            intent=intent,
            financial_data=financial_data,
            sentiment=sentiment
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5001)