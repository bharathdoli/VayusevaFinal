import React from 'react';

const Request = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request Assistance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are here to help. If you or someone you know is in need of essential items or support, please fill out the form below.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">How it works</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Fill out the form with accurate details.</li>
              <li>Our team will verify your request within 24-48 hours.</li>
              <li>Once verified, we will coordinate the delivery of assistance.</li>
              <li>All information provided will be kept confidential.</li>
            </ul>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type of Assistance Needed</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary">
                <option>Food / Ration</option>
                <option>Clothing</option>
                <option>Medical Aid</option>
                <option>Education Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Address</label>
              <textarea
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description of Situation</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                placeholder="Please describe your situation and specific needs..."
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="focus:ring-secondary h-4 w-4 text-secondary border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="font-medium text-gray-700">
                  I consent to Vayuseva verifying the information provided.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-lg transition-colors shadow-md"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
