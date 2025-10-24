# 📝 Note Keeper Application (Full Stack: Django REST API + Frontend)

This project is a full-stack application designed to securely manage user notes. The backend provides secure API endpoints for user authentication and note storage, while the frontend handles the user interface and routing.

## 🚀 Live Demo

You can access the live, deployed application here:

**🔗 Application URL:** [https://note-keeper-1-2ifn.onrender.com/login](https://note-keeper-1-2ifn.onrender.com/login)

## ✨ Key Features

* **Secure Authentication:** Uses Django REST Framework Simple JWT for token-based authentication (`/api/token/` and `/api/user/register/`).
* **Scalable Backend:** Built with **Django** and served by **Gunicorn** on **Render**.
* **Persistent Data:** Uses a **PostgreSQL** database for reliable data storage.
* **Frontend Routing (SPA):** The frontend handles client-side routing for pages like `/login`, `/register`, and `/notes`.

## 🛠️ Technology Stack

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Backend Framework** | Django, Django REST Framework | API structure, models, and security. |
| **API Authentication** | djangorestframework-simplejwt | Token generation and verification. |
| **Database** | PostgreSQL | Production data storage. |
| **Deployment** | Render, WhiteNoise | Hosting, scaling, and serving static/frontend assets. |
| **Production Server** | Gunicorn | WSGI HTTP server for production. |

---

## 💻 Local Setup (For Developers)

To run this project locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL]
    cd note-keeper-app
    ```
2.  **Backend Setup (Python):**
    ```bash
    # Create and activate a virtual environment
    python -m venv venv
    source venv/bin/activate
    
    # Install dependencies
    pip install -r requirements.txt
    
    # Run migrations and start the Django server
    python manage.py migrate
    python manage.py runserver 
    ```
3.  **Frontend Setup (Node.js):**
    ```bash
    cd frontend
    npm install
    npm start # Or the relevant command to start the frontend dev server
    ```
*(Note: You will need to set up environment variables for your local PostgreSQL database and Django SECRET_KEY in a `.env` file.)*
