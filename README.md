# Momentum Engine — Solar System Visualizer
### Flask • Python • AWS EC2 • Docker • Render • Gunicorn • Nginx

🔗 **Live Demo:**
https://flask-2-7tfz.onrender.com

[![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)](https://python.org)
[![Flask](https://img.shields.io/badge/Framework-Flask-black?style=flat-square&logo=flask)](https://flask.palletsprojects.com)
[![Docker](https://img.shields.io/badge/Containerized-Docker-2496ED?style=flat-square&logo=docker)](https://docker.com)
[![AWS EC2](https://img.shields.io/badge/Cloud-AWS_EC2-FF9900?style=flat-square&logo=amazonaws)](https://aws.amazon.com)
[![Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=flat-square&logo=render)](https://render.com)
[![Nginx](https://img.shields.io/badge/Proxy-Nginx-009639?style=flat-square&logo=nginx)](https://nginx.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

**Repository:** `flask`
**Domain:** Full Stack Development | Cloud Deployment | DevOps | Linux Infrastructure

---

## 1. Overview

Momentum Engine is a production-deployed, interactive Solar System visualizer built with Flask and Canvas API. It demonstrates end-to-end ownership of a full-stack application — from local development to production deployment on AWS EC2 with automated CI/CD via GitHub Actions and HTTPS deployment on Render.

The project focuses not just on building an application, but on deploying, securing, and maintaining it in a real production environment using industry-standard DevOps practices.

---

## 2. Architecture

```
Browser Request
      ↓
Cloudflare / Render HTTPS
      ↓
Nginx (Reverse Proxy)
      ↓
Gunicorn (WSGI Server)
      ↓
Flask Application (routes.py)
      ↓
Templates + Static Assets
(index.html / style.css / script.js)
      ↓
Canvas API (Solar System Engine)
```

**Infrastructure:**
```
GitHub (Source Control)
      ↓
GitHub Actions (CI/CD Pipeline)
      ↓
AWS EC2 t3.micro Ubuntu 24.04
├── systemd (Process Management)
├── UFW Firewall (Port 8080)
├── Gunicorn (Production WSGI)
└── Nginx (Reverse Proxy)
      ↓
Render.com (HTTPS + Auto Deploy)
```

---

## 3. Features

- 🌌 **Real-time Solar System Animation** — All 8 planets with accurate relative speeds, orbital paths, asteroid belt, shooting stars and nebula background
- 🪐 **Planet Detail Modal** — Click any planet for full scientific profile including diameter, mass, gravity, temperature, moons and comparative stat bars
- ⚡ **Motivational Quote Engine** — 24 quotes with category filters, auto-rotation and progress bar
- 🎮 **Interactive Controls** — Time warp speed, orbit/label/trail/corona toggles, planet quick-select
- 🖥️ **HUD Overlay** — Real-time coordinates, FPS counter, system status display
- 🌗 **Theme Switcher** — Day, Dusk, Deep Space modes
- 📱 **Fully Responsive** — Mobile and desktop optimized

---

## 4. Production Deployment Stack

### AWS EC2 (Primary Infrastructure)
- Ubuntu 24.04 LTS on t3.micro
- Flask served via Gunicorn (WSGI production server)
- Nginx configured as reverse proxy on port 8080
- UFW firewall with explicit port rules
- systemd service for process management and auto-restart
- GPG signed commits for verified deployments

### Render.com (HTTPS Public Access)
- Auto-deploy on every GitHub push to main
- Free SSL/TLS certificate (HTTPS)
- Gunicorn start command via Procfile
- Python 3.11 runtime pinned via `.python-version`
- Zero-downtime deployments

### Docker (Containerization)
- Dockerfile for portable container builds
- Docker Compose for local multi-service development
- Image versioning for rollback capability

---

## 5. CI/CD Pipeline

The deployment pipeline is triggered automatically on every push to the `main` branch.

### Pipeline Stages

1. **Source Push**
   Developer pushes code to GitHub main branch

2. **Render Webhook Triggered**
   Render detects push via GitHub integration

3. **Build Stage**
   ```
   pip install -r requirements.txt
   Python 3.11.9 environment setup
   ```

4. **Start Stage**
   ```
   gunicorn routes:app --bind 0.0.0.0:$PORT --workers 2
   ```

5. **Health Verification**
   Render validates `/health` endpoint returns HTTP 200

6. **Live Deployment**
   Zero-downtime swap to new instance

---

## 6. Linux Infrastructure Setup

Full production server configuration on AWS EC2 Ubuntu:

### systemd Service
```ini
[Unit]
Description=Momentum Engine Flask App
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/flask/app
Environment="FLASK_APP=routes:app"
Environment="FLASK_ENV=production"
ExecStart=/home/ubuntu/flask/app/venv/bin/flask run \
          --host=0.0.0.0 --port=8080
Restart=always
RestartSec=3
```

### UFW Firewall Rules
```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 8080/tcp  # Flask App
```

### Nginx Reverse Proxy
```nginx
server {
    listen 80;
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 7. Project Structure

```
flask/
├── app/
│   ├── routes.py              ← Flask app entry point
│   ├── __init__.py            ← Package init
│   ├── templates/
│   │   └── index.html         ← Full Solar System UI (192 lines)
│   └── static/
│       ├── style.css          ← Ultra-pro dark theme (761 lines)
│       └── script.js          ← Canvas animation engine (977 lines)
├── Dockerfile                 ← Container build
├── docker-compose.yml         ← Local development stack
├── Procfile                   ← Render start command
├── requirements.txt           ← Python dependencies
├── render.yaml                ← Render deploy config
├── runtime.txt                ← Python version pin
├── .python-version            ← Python 3.11.9
├── .gitignore                 ← Excludes venv/logs/cache
└── README.md                  ← This file
```

---

## 8. Local Development

### Prerequisites
```
Python 3.11+
Docker Desktop
Git
```

### Quick Start
```bash
# Clone the repository
git clone https://github.com/Aslam-space/flask.git
cd flask

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
export FLASK_APP=routes:app
flask run --host=0.0.0.0 --port=8080
```

### Docker Start
```bash
# Build and run with Docker Compose
docker-compose up --build

# Access at http://localhost:8080
```

---

## 9. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Main Solar System dashboard |
| GET | `/static/<file>` | Static asset serving |
| GET | `/health` | Health check (returns HTTP 200) |

---

## 10. Tech Stack

### Backend
| Technology | Purpose |
|-----------|---------|
| Python 3.11 | Core language |
| Flask 3.1.3 | Web framework |
| Gunicorn 21.2.0 | Production WSGI server |
| Werkzeug | WSGI utilities |

### Frontend
| Technology | Purpose |
|-----------|---------|
| HTML5 Canvas API | Solar system animation engine |
| CSS3 | Dark space theme + HUD overlay |
| JavaScript (Vanilla) | Physics simulation + UI interactions |
| Google Fonts | Orbitron + Rajdhani + Share Tech Mono |

### Infrastructure
| Technology | Purpose |
|-----------|---------|
| AWS EC2 (t3.micro) | Production server |
| Ubuntu 24.04 LTS | Operating system |
| Nginx | Reverse proxy |
| systemd | Process management |
| UFW | Firewall |
| Docker | Containerization |
| Render.com | HTTPS + auto-deploy |
| GitHub Actions | CI/CD pipeline |
| GPG | Commit signing (Verified) |

---

## 11. Skills Demonstrated

- Full-stack Flask application development
- Production Linux server administration (Ubuntu/EC2)
- Docker containerization and Compose orchestration
- Nginx reverse proxy configuration
- systemd service management and process supervision
- UFW firewall rule management
- CI/CD pipeline with GitHub Actions and Render
- GPG commit signing for verified deployments
- Gunicorn WSGI production deployment
- Canvas API physics simulation and animation
- Responsive UI design with dark theme

---

## 12. Deployment Guide

### Deploy to AWS EC2
```bash
# SSH into EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Clone and setup
git clone https://github.com/Aslam-space/flask.git
cd flask/app
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run deploy script
chmod +x deploy_flask_8080.sh
./deploy_flask_8080.sh
```

### Deploy to Render
```bash
# Connect GitHub repo to Render dashboard
# Build Command:  pip install -r requirements.txt
# Start Command:  gunicorn routes:app --bind 0.0.0.0:$PORT
# Auto-deploys on every git push
```

---

## 13. Status

✅ Live and active — deployed on Render with HTTPS
✅ EC2 production configuration complete
✅ CI/CD pipeline operational
✅ GPG verified commits enabled

---

## 14. Author

**Aslam A**
Cloud & DevOps DEMON! | India

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/aslama77)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/Aslam-space)

---
