import React, { useState } from 'react';

const Donate = () => {
  const [donationType, setDonationType] = useState('money');

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your generosity fuels our mission. Every contribution, big or small, helps us bring hope to those in need.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">I want to donate...</h2>

            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setDonationType('money')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${donationType === 'money'
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Money
              </button>
              <button
                onClick={() => setDonationType('items')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${donationType === 'items'
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Items
              </button>
            </div>

            {donationType === 'money' ? (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (INR)</label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['500', '1000', '2000'].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="border border-gray-300 py-2 rounded-md hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Other Amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold text-lg transition-colors shadow-md"
                >
                  Proceed to Pay
                </button>

                {/* QR Code Placeholder */}
                <div className="mt-8 text-center border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-4">Or scan to donate via UPI</p>
                  <div className="w-48 h-48 bg-gray-200 mx-auto flex items-center justify-center rounded-lg">
                    <span className="text-gray-400 font-medium">QR Code Placeholder</span>
                  </div>
                </div>
              </form>
            ) : (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What would you like to donate?</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary">
                    <option>Clothes</option>
                    <option>Food (Non-perishable)</option>
                    <option>Books / Stationery</option>
                    <option>Medicines</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                    placeholder="Briefly describe the items and their condition..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Address</label>
                  <textarea
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-lg transition-colors shadow-md"
                >
                  Schedule Pickup
                </button>
              </form>
            )}
          </div>

          {/* Why Donate Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Why Donate to Vayuseva?</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Transparency</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We believe in complete transparency. Every rupee you donate is accounted for and goes directly towards our initiatives.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Direct Impact</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Your contribution directly impacts the lives of underprivileged families, providing them with food, clothing, and hope.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Community Building</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We don't just give aid; we build communities. Your support helps us organize workshops and support groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
