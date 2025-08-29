import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/quote')
def get_quote():
    response = requests.get('https://zenquotes.io/api/random')
    return jsonify(response.json())