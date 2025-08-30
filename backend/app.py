import requests, os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)

    database_uri = os.environ.get('DATABASE_URL')
    if database_uri and database_uri.startswith("postgres://"):
        database_uri = database_uri.replace("postgres://", "postgresql://", 1)
        
    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app) # initialised the database object that can do ORM.
    migrate.init_app(app, db) # Here I initialise the Flask-Migrate
    
    from route import main_bp
    app.register_blueprint(main_bp)

    return app