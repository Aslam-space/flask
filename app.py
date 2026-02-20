from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

from prometheus_client import Counter, generate_latest
REQUEST_COUNT = Counter('app_requests_total', 'Total App Requests')

@app.before_request
def before_request():
    REQUEST_COUNT.inc()

@app.route('/metrics')
def metrics():
    return generate_latest(), 200, {'Content-Type': 'text/plain'}

@app.route("/health")
def health():
    return {"status": "ok"}
