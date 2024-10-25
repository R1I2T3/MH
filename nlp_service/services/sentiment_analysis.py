from typing import Dict, Any
import requests
import os
from dotenv import load_dotenv

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

def analyze_sentiment(query: str, intent: Dict[str, Any]) -> Dict[str, Any]:
    if "company" not in intent or intent["type"] != "sentiment":
        return {}
        
    company = intent["company"]
    
    # Fetch recent news about the company
    endpoint = "https://newsapi.org/v2/everything"
    params = {
        "q": company,
        "apiKey": NEWS_API_KEY,
        "sortBy": "publishedAt",
        "language": "en",
        "pageSize": 10
    }
    
    response = requests.get(endpoint, params=params)
    news_data = response.json()
    
    # Simple sentiment analysis based on keywords
    positive_words = set(["growth", "profit", "success", "increase", "positive"])
    negative_words = set(["loss", "decline", "fail", "decrease", "negative"])
    
    sentiment_score = 0
    article_count = 0
    
    for article in news_data.get("articles", []):
        text = (article.get("title", "") + " " + article.get("description", "")).lower()
        pos_count = sum(1 for word in positive_words if word in text)
        neg_count = sum(1 for word in negative_words if word in text)
        sentiment_score += pos_count - neg_count
        article_count += 1
    
    if article_count == 0:
        return {"sentiment": "neutral", "confidence": 0.5}
    
    avg_sentiment = sentiment_score / article_count
    
    if avg_sentiment > 0.5:
        sentiment = "positive"
    elif avg_sentiment < -0.5:
        sentiment = "negative"
    else:
        sentiment = "neutral"
    
    return {
        "sentiment": sentiment,
        "confidence": min(abs(avg_sentiment), 1.0),
        "article_count": article_count
    }
