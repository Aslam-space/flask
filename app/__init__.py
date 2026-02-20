from flask import Flask
from prometheus_flask_exporter import PrometheusMetrics
import logging

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'super-secret-key-change-this'

    metrics = PrometheusMetrics(app)

    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)s] %(message)s'
    )

    from .routes import main
    app.register_blueprint(main)

    return app
