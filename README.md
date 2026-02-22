# Flask Monitoring Stack

[![GitHub Repo Size](https://img.shields.io/github/repo-size/Aslam-space/flask?color=blue)](https://github.com/Aslam-space/flask)
[![Docker Pulls](https://img.shields.io/docker/pulls/aslam-space/flask-app?color=green)](https://hub.docker.com/r/aslam-space/flask-app)
[![License](https://img.shields.io/github/license/Aslam-space/flask?color=yellow)](https://github.com/Aslam-space/flask/blob/main/LICENSE)

**Live Demo:** [Flask Monitoring Web App](https://flask-2-7tfz.onrender.com)

---

## **Project Overview**

This repository contains a **production-ready monitoring stack** using Flask, Nginx, Prometheus, and Grafana. The goal is to **track application metrics, visualize performance, and simulate real-world load** while following professional development workflows.  

The stack is containerized using **Docker & Docker Compose**, ensuring **easy deployment, reproducibility, and scalability**.

---

## **Professional Branch & Workflow**

The project follows a **6-branch production-style workflow**:

| Branch         | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| `main`         | Stable production-ready code                                           |
| `dev`          | Active development & features                                           |
| `feature/*`    | Individual features or experiments                                     |
| `hotfix/*`     | Critical fixes directly applied to `main`                               |
| `staging`      | Pre-production testing of `dev` branch                                  |
| `docs`         | Documentation, diagrams, and README enhancements                        |

> This structure ensures **clean version control, CI/CD readiness, and maintainable development practices**.

---

## **Tools & Stack**

| Layer                 | Tool / Service                          | Purpose                                               |
|-----------------------|----------------------------------------|-------------------------------------------------------|
| Web Application       | Flask                                  | Python web framework, main application logic         |
| Reverse Proxy         | Nginx                                  | Handles routing, security, and load balancing       |
| Containerization      | Docker & Docker Compose                 | Isolation, reproducibility, and deployment          |
| Monitoring            | Prometheus                             | Collects metrics from Flask & Nginx                 |
| Visualization         | Grafana                                | Dashboards and performance visualization             |
| Python Dependencies   | Gunicorn, prometheus-client, werkzeug   | Production server and metrics integration           |

---

## **Architecture Diagram**

```mermaid
flowchart LR
    User -->|HTTP| Nginx[Nginx Proxy]
    Nginx -->|Forward| Flask[Flask App]
    Flask -->|Expose Metrics| Prometheus[Prometheus]
    Prometheus -->|Visualize| Grafana[Grafana Dashboard]

