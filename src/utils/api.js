// API utility for backend communication
import axios from 'axios';

// Use environment variable or default to localhost for development
// For production, set REACT_APP_API_URL in your .env file
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Donation API
export const saveDonation = async (donationData) => {
  try {
    const response = await api.post('/api/donations', donationData);
    return { success: true, data: response.data.data || response.data };
  } catch (error) {
    console.error('Error saving donation:', error);
    const errorMessage = error.response?.data?.error || error.message || 'Failed to save donation';
    return { success: false, error: errorMessage };
  }
};

export const getDonations = async () => {
  try {
    const response = await api.get('/api/donations');
    return { success: true, data: response.data.data || response.data || [] };
  } catch (error) {
    console.error('Error getting donations:', error);
    const errorMessage = error.response?.data?.error || error.message || 'Failed to fetch donations';
    return { success: false, data: [], error: errorMessage };
  }
};

// Contact API
export const saveContact = async (contactData) => {
  try {
    const response = await api.post('/api/contacts', contactData);
    return { success: true, data: response.data.data || response.data };
  } catch (error) {
    console.error('Error saving contact:', error);
    const errorMessage = error.response?.data?.error || error.message || 'Failed to save contact';
    return { success: false, error: errorMessage };
  }
};

export const getContacts = async () => {
  try {
    const response = await api.get('/api/contacts');
    return { success: true, data: response.data.data || response.data || [] };
  } catch (error) {
    console.error('Error getting contacts:', error);
    const errorMessage = error.response?.data?.error || error.message || 'Failed to fetch contacts';
    return { success: false, data: [], error: errorMessage };
  }
};

// Clear all data
export const clearAllData = async () => {
  try {
    const response = await api.delete('/api/clear');
    return { success: true, message: response.data.message };
  } catch (error) {
    console.error('Error clearing data:', error);
    return { success: false, error: error.message };
  }
};

