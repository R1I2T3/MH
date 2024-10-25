import requests
from typing import Dict, Any
import os
from dotenv import load_dotenv

load_dotenv()

ALPHA_VANTAGE_API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")

def get_financial_data(query: str, intent: Dict[str, Any]) -> Dict[str, Any]:
    if "company" not in intent:
        return {}
        
    company = intent["company"]
    endpoint = "https://www.alphavantage.co/query"
    
    if intent["type"] == "balance_sheet":
        params = {
            "function": "BALANCE_SHEET",
            "symbol": company,
            "apikey": ALPHA_VANTAGE_API_KEY
        }
    elif intent["type"] == "overview":
        params = {
            "function": "OVERVIEW",
            "symbol": company,
            "apikey": ALPHA_VANTAGE_API_KEY
        }
    else:
        params = {
            "function": "GLOBAL_QUOTE",
            "symbol": company,
            "apikey": ALPHA_VANTAGE_API_KEY
        }
    
    response = requests.get(endpoint, params=params)
    return response.json()