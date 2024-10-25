import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_analyze_query():
    response = client.post(
        "/analyze",
        json={"query": "What's the sentiment for AAPL?"}
    )
    
    assert response.status_code == 200
    data = response.json()
    assert "intent" in data
    assert "financial_data" in data
    assert "sentiment" in data

def test_invalid_query():
    response = client.post(
        "/analyze",
        json={"query": ""}
    )
    
    assert response.status_code == 422

def test_intent_detection():
    response = client.post(
        "/analyze",
        json={"query": "Show me MSFT balance sheet"}
    )
    
    data = response.json()
    assert data["intent"]["type"] == "balance_sheet"
    assert "MSFT" in data["intent"]["company"]