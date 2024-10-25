from pydantic import BaseModel
from typing import Optional, Dict, Any

class QueryResponse(BaseModel):
    intent: str
    financial_data: Optional[Dict[str, Any]] = None
    sentiment: Optional[Dict[str, Any]] = None