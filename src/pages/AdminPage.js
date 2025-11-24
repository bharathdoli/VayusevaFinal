import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDonations, getContacts, clearAllData } from '../utils/storage';

const AdminPage = () => {
  const [donations, setDonations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('donations'); // 'donations' or 'contacts'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const donationsData = await getDonations();
      const contactsData = await getContacts();
      setDonations(donationsData || []);
      setContacts(contactsData || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to delete all submissions? This action cannot be undone.')) {
      const cleared = await clearAllData();
      if (cleared) {
        await loadData();
        alert('All data has been cleared.');
      } else {
        alert('Error clearing data. Please try again.');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Admin <span className="text-orange-500">Dashboard</span>
            </h1>
            <p className="text-lg text-gray-400">
              View and manage all form submissions
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-8 border-b border-orange-500/20">
            <button
              onClick={() => setActiveTab('donations')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'donations'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              Item Donations ({donations.length})
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'contacts'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              Contact Messages ({contacts.length})
            </button>
          </div>

          {/* Clear All Button */}
          <div className="mb-6">
            <button
              onClick={handleClearAll}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear All Data
            </button>
          </div>

          {/* Donations Tab */}
          {activeTab === 'donations' && (
            <div>
              {loading ? (
                <div className="text-center py-12 border border-orange-500/20 rounded-lg">
                  <p className="text-gray-400">Loading donations...</p>
                </div>
              ) : donations.length === 0 ? (
                <div className="text-center py-12 border border-orange-500/20 rounded-lg">
                  <p className="text-gray-400">No donation submissions yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {donations.map((donation) => (
                    <div
                      key={donation._id || donation.id}
                      className="bg-black border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Category</p>
                          <p className="text-white font-semibold">{donation.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Submitted</p>
                          <p className="text-gray-400 text-sm">{formatDate(donation.submittedAt)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <p className="text-white">{donation.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Phone</p>
                          <p className="text-white">{donation.phone}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500 mb-1">Description</p>
                          <p className="text-gray-400">{donation.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              {loading ? (
                <div className="text-center py-12 border border-orange-500/20 rounded-lg">
                  <p className="text-gray-400">Loading contacts...</p>
                </div>
              ) : contacts.length === 0 ? (
                <div className="text-center py-12 border border-orange-500/20 rounded-lg">
                  <p className="text-gray-400">No contact messages yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact._id || contact.id}
                      className="bg-black border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Name</p>
                          <p className="text-white font-semibold">{contact.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Submitted</p>
                          <p className="text-gray-400 text-sm">{formatDate(contact.submittedAt)}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <p className="text-white">{contact.email}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500 mb-1">Message</p>
                          <p className="text-gray-400">{contact.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;

