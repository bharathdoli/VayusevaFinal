# Quick Deployment Guide - Vayuseva

## 🚀 Step-by-Step Deployment

### PART 1: Deploy Backend (Render.com - Recommended)

#### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub (recommended) or email

#### Step 2: Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository (or push your code to GitHub first)
3. Select your `vayuseva` repository

#### Step 3: Configure Backend Service
Fill in the following:

- **Name:** `vayuseva-backend` (or any name you like)
- **Region:** Choose closest to you (e.g., Singapore, US East)
- **Branch:** `main` (or your main branch)
- **Root Directory:** `backend`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** Free (or paid if you need more resources)

#### Step 4: Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"** and add:

1. **MONGODB_URI**
   - Key: `MONGODB_URI`
   - Value: `mongodb+srv://bharath7:Bharathdoli7%4013@cluster0.c9ta6qd.mongodb.net/vayuseva?retryWrites=true&w=majority`
   - ⚠️ **Important:** Use `%40` instead of `@` in password

2. **PORT** (Optional - Render sets this automatically)
   - Key: `PORT`
   - Value: (Leave empty or remove - Render handles this)

#### Step 5: Deploy
1. Click **"Create Web Service"**
2. Wait 2-5 minutes for deployment
3. Once deployed, copy your backend URL (e.g., `https://vayuseva-backend.onrender.com`)
4. Test it: Visit `https://your-backend-url.onrender.com/api/health`
   - Should see: `{"success":true,"message":"Server is running"}`

---

### PART 2: Update Frontend for Production

#### Step 1: Create Frontend .env File
In your project root (same level as `package.json`), create a `.env` file:

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

**Replace `your-backend-url.onrender.com` with your actual backend URL from Part 1**

#### Step 2: Test Locally (Optional)
1. Stop your current frontend server (Ctrl+C)
2. Run `npm start` again
3. Test forms - they should connect to your deployed backend

---

### PART 3: Deploy Frontend (Netlify - Recommended)

#### Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Sign up with GitHub (recommended)

#### Step 2: Deploy Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Connect to your GitHub repository
3. Select your `vayuseva` repository

#### Step 3: Configure Build Settings
- **Base directory:** (Leave empty - root directory)
- **Build command:** `npm run build`
- **Publish directory:** `build`

#### Step 4: Add Environment Variable
1. Click **"Show advanced"** → **"New variable"**
2. Add:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://your-backend-url.onrender.com` (your backend URL from Part 1)

#### Step 5: Deploy
1. Click **"Deploy site"**
2. Wait 2-3 minutes for build and deployment
3. Your site will be live at: `https://random-name-123.netlify.app`
4. You can change the site name in **"Site settings"** → **"Change site name"**

---

### PART 4: Configure MongoDB Atlas Network Access

**Important:** Make sure MongoDB allows connections from Render

1. Go to https://cloud.mongodb.com
2. Login to your account
3. Go to **"Network Access"** (left sidebar)
4. Click **"Add IP Address"**
5. Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
   - Or add Render's IP ranges if you want to be more specific
6. Click **"Confirm"**

---

### PART 5: Test Everything

After deployment, test:

1. ✅ **Homepage loads** - Visit your Netlify URL
2. ✅ **Contact form** - Submit a test message
3. ✅ **Donate form** - Submit a test donation
4. ✅ **Admin page** - Use credentials:
   - Name: `vayuseva`
   - Email: `vayuseva@gmail.com`
   - Message: `open`
5. ✅ **Check data** - Verify submissions appear in admin dashboard
6. ✅ **All navigation links work**

---

## 🔧 Troubleshooting

### Backend Issues

**"MongoDB connection error"**
- Check MongoDB Atlas Network Access (Part 4)
- Verify MONGODB_URI in Render environment variables
- Make sure password uses `%40` instead of `@`

**"Backend not responding"**
- Check Render logs: Go to your service → "Logs" tab
- Verify build completed successfully
- Check if service is "Live" (not "Suspended")

### Frontend Issues

**"Forms not submitting"**
- Check browser console (F12) for errors
- Verify `REACT_APP_API_URL` is set correctly in Netlify
- Make sure backend URL is accessible (test in browser)

**"API calls failing"**
- Check CORS settings (backend should allow all origins)
- Verify backend URL in frontend .env matches deployed backend
- Check network tab in browser DevTools

---

## 📝 Quick Checklist

- [ ] Backend deployed on Render
- [ ] Backend URL copied and tested
- [ ] Frontend .env file created with backend URL
- [ ] Frontend deployed on Netlify
- [ ] MongoDB Atlas Network Access configured
- [ ] All forms tested and working
- [ ] Admin page accessible

---

## 🎉 You're Done!

Your website is now live! Share your Netlify URL with the world.

**Pro Tip:** You can add a custom domain later in Netlify settings if you have one.

