const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vayuseva';

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schemas
const donationSchema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const Donation = mongoose.model('Donation', donationSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Routes

// Donations
app.post('/api/donations', async (req, res) => {
  try {
    console.log('Received donation submission:', req.body);
    const donation = new Donation(req.body);
    await donation.save();
    console.log('Donation saved successfully:', donation._id);
    res.status(201).json({ success: true, data: donation });
  } catch (error) {
    console.error('Error saving donation:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ submittedAt: -1 });
    res.json({ success: true, data: donations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Contacts
app.post('/api/contacts', async (req, res) => {
  try {
    console.log('Received contact submission:', req.body);
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Contact saved successfully:', contact._id);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Clear all data
app.delete('/api/clear', async (req, res) => {
  try {
    await Donation.deleteMany({});
    await Contact.deleteMany({});
    res.json({ success: true, message: 'All data cleared' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

