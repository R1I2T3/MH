from typing import Dict, Any
import re

def detect_intent(query: str) -> Dict[str, Any]:
    query = query.lower()
    
    # Define patterns for different intents
    patterns = {
        "balance_sheet": r"balance\s+sheet|financial\s+position",
        "sentiment": r"sentiment|feeling|outlook|news",
        "overview": r"overview|summary|profile",
        "company": r"([A-Z]{1,5})"  # Assuming company tickers are in caps
    }
    
    intent = {
        "type": "general",
        "confidence": 0.5
    }
    
    # Check for balance sheet intent
    if re.search(patterns["balance_sheet"], query):
        intent["type"] = "balance_sheet"
        intent["confidence"] = 0.8
    
    # Check for sentiment intent
    elif re.search(patterns["sentiment"], query):
        intent["type"] = "sentiment"
        intent["confidence"] = 0.8
    
    # Check for overview intent
    elif re.search(patterns["overview"], query):
        intent["type"] = "overview"
        intent["confidence"] = 0.8
    
    # Extract company ticker if present
    company_match = re.search(patterns["company"], query.upper())
    if company_match:
        intent["company"] = company_match.group(1)
    
    return intent