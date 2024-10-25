from typing import Dict, Any

def format_financial_data(data: Dict[str, Any]) -> Dict[str, Any]:
    """Format financial data for consistent response structure"""
    if not data:
        return {}
        
    formatted_data = {
        "metrics": {},
        "timestamp": None
    }
    
    if "Global Quote" in data:
        quote = data["Global Quote"]
        formatted_data["metrics"] = {
            "price": quote.get("05. price"),
            "change": quote.get("09. change"),
            "change_percent": quote.get("10. change percent")
        }
        formatted_data["timestamp"] = quote.get("07. latest trading day")
    
    return formatted_data