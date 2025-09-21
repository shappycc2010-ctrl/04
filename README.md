# Halobot

Halobot is an AI-powered chatbot with a Flask backend and static frontend.

## 🚀 Deployment

### Backend (Flask API)
1. Upload `backend/` to Render as a **Web Service**
2. Build Command:
   ```bash
   pip install -r requirements.txt
   ```
3. Start Command:
   ```bash
   gunicorn app:app
   ```

### Frontend (Static Site)
1. Upload `frontend/` to Render as a **Static Site**
2. Publish Directory: `frontend`
3. Leave Build Command empty.

---
