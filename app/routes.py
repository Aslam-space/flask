from flask import Blueprint, render_template, Response
from prometheus_client import Counter, generate_latest
import logging

main = Blueprint('main', __name__)

REQUEST_COUNT = Counter('app_requests_total', 'Total Requests')

@main.before_app_request
def before_request():
    REQUEST_COUNT.inc()

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/health')
def health():
    return {'status': 'healthy'}, 200

@main.route('/metrics')
def metrics():
    return Response(generate_latest(), mimetype='text/plain')
