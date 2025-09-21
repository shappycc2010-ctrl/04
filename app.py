from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    # Dummy AI response (replace with OpenAI integration)
    return jsonify({"reply": f"HALOBOT: You said '{user_message}'"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
