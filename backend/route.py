from flask import Blueprint, jsonify
import requests

main_bp = Blueprint('main', __name__) # This is the blue print object.

@main_bp.route('/api/quote')
def get_quote():
    response = requests.get('https://zenquotes.io/api/random')
    return jsonify(response.json())