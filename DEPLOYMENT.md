# Deployment Guide for Vayuseva

## Pre-Deployment Checklist

✅ **Backend Setup:**
- [x] MongoDB Atlas connection configured
- [x] Backend server running on port 5000
- [x] All API endpoints working
- [x] Environment variables set up

✅ **Frontend Setup:**
- [x] All forms working (Donate, Contact)
- [x] Admin page accessible
- [x] All routes working
- [x] Images and assets loading correctly

## Deployment Steps

### Step 1: Deploy Backend (Render/Heroku/Vercel)

**Option A: Render.com (Recommended)**
1. Go to [Render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** `vayuseva-backend`
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add Environment Variables:
   - `MONGODB_URI` = `mongodb+srv://bharath7:YOUR_PASSWORD@cluster0.c9ta6qd.mongodb.net/vayuseva?retryWrites=true&w=majority`
   - `PORT` = (Leave empty, Render sets this automatically)
6. Click "Create Web Service"
7. Wait for deployment and copy your backend URL (e.g., `https://vayuseva-backend.onrender.com`)

**Option B: Heroku**
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create vayuseva-backend`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI="mongodb+srv://bharath7:YOUR_PASSWORD@cluster0.c9ta6qd.mongodb.net/vayuseva?retryWrites=true&w=majority"
   ```
5. Deploy: `git push heroku main`

### Step 2: Update Frontend API URL

After deploying backend, you have two options:

**Option A: Use Environment Variable (Recommended)**
1. Create `.env` file in root directory:
   ```env
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
2. The frontend will automatically use this URL in production

**Option B: Update api.js directly**
Update `src/utils/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.onrender.com';
```

### Step 3: Deploy Frontend (Netlify/Vercel)

**Option A: Netlify**
1. Go to [Netlify](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Add Environment Variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`
6. Click "Deploy site"

**Option B: Vercel**
1. Go to [Vercel](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `./`
5. Add Environment Variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`
6. Click "Deploy"

### Step 4: Test After Deployment

1. ✅ Test contact form submission
2. ✅ Test donation form submission
3. ✅ Test admin page access (use credentials: name: `vayuseva`, email: `vayuseva@gmail.com`, message: `open`)
4. ✅ Verify data is being saved to MongoDB
5. ✅ Test all navigation links
6. ✅ Test on mobile devices

## Important Notes

⚠️ **Security:**
- Never commit `.env` files to Git (already in .gitignore)
- Use environment variables for all sensitive data
- MongoDB password should be kept secure

⚠️ **MongoDB Atlas:**
- Make sure your MongoDB Atlas cluster allows connections from your hosting provider's IP
- In MongoDB Atlas → Network Access → Add IP Address: `0.0.0.0/0` (for all IPs) or specific IPs

⚠️ **CORS:**
- Backend CORS is already configured to allow all origins
- For production, you may want to restrict CORS to your frontend domain

## Troubleshooting

**Backend not connecting to MongoDB:**
- Check MongoDB Atlas Network Access settings
- Verify connection string in environment variables
- Check backend logs for connection errors

**Frontend can't reach backend:**
- Verify `REACT_APP_API_URL` is set correctly
- Check backend is running and accessible
- Verify CORS settings in backend

**Forms not submitting:**
- Check browser console for errors
- Verify backend URL is correct
- Check network tab for failed requests

## Post-Deployment

1. Test all functionality thoroughly
2. Monitor backend logs for errors
3. Set up error tracking (optional)
4. Configure custom domain (optional)

