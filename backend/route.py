from flask import Blueprint, jsonify, request
import requests
from datetime import datetime

main_bp = Blueprint('main', __name__) # This is the blue print object.

@main_bp.route('/api/quote')
def get_quote():
    response = requests.get('https://zenquotes.io/api/random')
    return jsonify(response.json())

@main_bp.route('/api/record', methods=['POST'])
def create_record():
    try:
        data = request.get_json()
        purchase_items = data.get('purchaseItems', [])

        return jsonify({
            'success': True,
            'record_id': 1,
            'message': 'Record created successfully.'
        }), 201

    except Exception as e:
        print(f"Error creating record: {str(e)}")
        return jsonify({'error': 'Failed to create record.'}), 500