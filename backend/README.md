# Vayuseva Backend API

Backend server for Vayuseva website using Node.js, Express, and MongoDB.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Set Up MongoDB

**Option A: Local MongoDB**
- Install MongoDB on your computer
- Start MongoDB service
- Use connection string: `mongodb://localhost:27017/vayuseva`

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update `.env` file with your connection string

### 3. Configure Environment Variables

Create a `.env` file in the `backend` folder with the following content:

```env
# MongoDB Connection String
# Replace <db_password> with your actual MongoDB Atlas password
MONGODB_URI=mongodb+srv://bharath7:<db_password>@cluster0.c9ta6qd.mongodb.net/vayuseva?retryWrites=true&w=majority

# Server Port
PORT=5000
```

**Important:** 
- Replace `<db_password>` with your actual MongoDB Atlas database password
- **If your password contains special characters** (like `@`, `#`, `%`, etc.), you must URL-encode them:
  - `@` becomes `%40`
  - `#` becomes `%23`
  - `%` becomes `%25`
  - Example: If password is `Bharathdoli7@13`, use `Bharathdoli7%4013`

### 4. Run the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## API Endpoints

- `POST /api/donations` - Submit a donation
- `GET /api/donations` - Get all donations
- `POST /api/contacts` - Submit a contact message
- `GET /api/contacts` - Get all contacts
- `DELETE /api/clear` - Clear all data
- `GET /api/health` - Health check

## Deployment

For deployment on Render, Heroku, or similar:
1. Set environment variables in your hosting platform
2. Make sure MongoDB Atlas connection string is set
3. Deploy the backend
4. Update frontend API URL to point to your backend

