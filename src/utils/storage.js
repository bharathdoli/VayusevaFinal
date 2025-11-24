// Storage utility - Now uses backend API
// This file maintains backward compatibility while using the API

import * as api from './api';

// Donation Form Submissions
export const saveDonation = async (donationData) => {
  const result = await api.saveDonation(donationData);
  return result; // Return full result object, not just success boolean
};

export const getDonations = async () => {
  const result = await api.getDonations();
  return result.data || [];
};

// Contact Form Submissions
export const saveContact = async (contactData) => {
  const result = await api.saveContact(contactData);
  return result; // Return full result object, not just success boolean
};

export const getContacts = async () => {
  const result = await api.getContacts();
  return result.data || [];
};

// Clear all data (for admin use)
export const clearAllData = async () => {
  const result = await api.clearAllData();
  return result.success;
};

