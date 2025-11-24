# Backend Setup Guide

## Quick Start

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Set Up MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended for Deployment)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Create a `.env` file in the `backend` folder:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vayuseva
   PORT=5000
   ```

**Option B: Local MongoDB**
1. Install MongoDB on your computer
2. Start MongoDB service
3. Create a `.env` file in the `backend` folder:
   ```
   MONGODB_URI=mongodb://localhost:27017/vayuseva
   PORT=5000
   ```

### 3. Run Backend Server

**Development:**
```bash
cd backend
npm run dev
```

**Production:**
```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

### 4. Run Frontend

In a separate terminal:
```bash
npm start
```

The frontend will automatically proxy API requests to the backend.

## Deployment

### Deploy Backend to Render/Heroku

1. **Create account** on Render.com or Heroku
2. **Create new Web Service**
3. **Connect your repository**
4. **Set environment variables:**
   - `MONGODB_URI` - Your MongoDB connection string
   - `PORT` - Will be set automatically by Render/Heroku
5. **Build command:** `cd backend && npm install`
6. **Start command:** `cd backend && npm start`

### Update Frontend for Production

After deploying backend, update `src/utils/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.onrender.com';
```

Or set environment variable:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## API Endpoints

- `POST /api/donations` - Submit donation
- `GET /api/donations` - Get all donations
- `POST /api/contacts` - Submit contact message
- `GET /api/contacts` - Get all contacts
- `DELETE /api/clear` - Clear all data
- `GET /api/health` - Health check

## Testing

Test the API:
```bash
# Health check
curl http://localhost:5000/api/health

# Get donations
curl http://localhost:5000/api/donations
```

