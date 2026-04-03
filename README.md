<div align="center">
  <h1 align="center">Forever With You 💖</h1>
  <p align="center">
    <strong>A highly interactive, beautifully animated web application built with Python & Flask.</strong>
  </p>
</div>

## 📖 Overview

**Forever With You** is a modern, responsive tribute web application designed to deliver an engaging and personalized user experience. It features a custom lightweight **Python (Flask)** backend architecture, paired with a vanilla **HTML5/CSS3/JS** frontend that utilizes state-of-the-art glassmorphism aesthetics, scroll-triggered animations, and direct API integrations.

The primary showcase feature of this application is its **Interactive WhatsApp API Form**, which securely intercepts user inputs, formats the payload, and dynamically forwards the structured data to a predetermined mobile endpoint.

## ✨ Key Features

- **Dynamic Interactive UI:** A custom-built, responsive interface utilizing CSS variables to enforce a consistent, modern design system across all viewports.
- **Micro-interactions & Animations:** Features complex DOM manipulation, such as evasive button algorithms (tracking relative mouse positioning) and custom canvas-based particle (confetti) generation.
- **RESTful API Data Fetching:** Modular frontend components dynamically request and parse JSON payloads from the backend to construct views asynchronously.
- **Instant Communication Gateway:** Implemented a targeted "Cravings & Needs" form that directly triggers structured WhatsApp API deep links.
- **Zero Heavy Configurations:** A completely lightweight architecture (running without heavy frameworks like React, Vue, or Webpack) ensuring rapid execution and minimal load times.

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Backend Framework** | Python 3, Flask |
| **Frontend Architecture** | HTML5, CSS3, DOM API (Vanilla JavaScript) |
| **Design System** | Custom Glassmorphism Styles, CSS Custom Properties |
| **Typography** | Playfair Display, Inter (Google Fonts) |
| **Iconography** | FontAwesome 6 |

## 🏗️ Project Architecture

```text
ForeverWithYou/
├── app.py                     # Main WSGI Application Entry Point
├── requirements.txt           # Python Environment Dependencies
├── static/
│   ├── css/style.css          # Core Design System & Styling
│   ├── js/script.js           # Client-side Interactive Logic
│   └── images/                # Static Visual Assets Directory
└── templates/                 # Jinja2 HTML View Templates
    ├── base.html              # Document Foundation & Navbar
    ├── index.html             # Main View & Cravings Gateway
    ├── gallery.html           # Media Renders
    └── about.html             # Profile Documentation
```

## 🚀 Installation & Deployment

Follow these standard steps to execute the application locally in a development environment.

### 1. Repository Setup
Ensure you have cloned the repository and placed valid images named `1.jpg`, `2.jpg`, and `3.jpg` inside the `static/images/` directory.

### 2. Environment Initialization
Open your terminal inside the project root and execute a local Python virtual environment.

```bash
# Initialize a fresh virtual environment
python3 -m venv venv

# Activate the virtual environment (Linux/macOS)
source venv/bin/activate
# Windows: venv\Scripts\activate

# Install the required server dependencies
pip install -r requirements.txt
```

### 3. Server Execution
Run the Flask server via the standard entry point.

```bash
python3 app.py
```

*The application will now gracefully start resolving traffic at `http://127.0.0.1:5001/`.*

## ✍️ Authorship
Designed and developed by **Saiyam**. This project currently serves as a private, personalized portfolio showcase piece demonstrating backend routing, advanced CSS animations, and direct API integrations.
