from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    return jsonify({"intent": "analyzed", "sentiment": "neutral"})

if __name__ == '__main__':
    app.run(debug=True)
