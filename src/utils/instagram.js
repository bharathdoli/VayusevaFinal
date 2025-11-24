// Donations Data Utility
// This file handles fetching donation data
// No Instagram API token required - uses manual data entry

import { donationsData } from '../data/donations';

/**
 * Fetch donations from manual data file
 * No API token required - just update src/data/donations.js
 * @returns {Promise<Array>} Array of donations
 */
export const fetchInstagramPosts = async () => {
  try {
    // Return donations from manual data file
    // Users can easily update src/data/donations.js with their Instagram posts
    return donationsData.map((donation) => ({
      id: donation.id,
      image: donation.image,
      caption: donation.caption,
      date: donation.date,
      type: donation.type,
      instagramUrl: donation.instagramUrl,
    }));
  } catch (error) {
    console.error('Error loading donations:', error);
    return getSampleDonations();
  }
};

/**
 * Sample donations data (fallback when Instagram API is not configured)
 * @returns {Array} Sample donations
 */
export const getSampleDonations = () => {
  return [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Food distribution drive helping 200+ families in need',
      date: '2024-01-15',
      type: 'Food Donation'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Medical aid camp providing free health checkups to 150+ people',
      date: '2024-01-20',
      type: 'Medical Aid'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Clothing drive distributing warm clothes to 150+ people during winter',
      date: '2024-02-05',
      type: 'Clothing Support'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Emergency relief for flood-affected families providing essential supplies',
      date: '2024-02-12',
      type: 'Emergency Support'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/400x400',
      caption: 'School supplies distribution to underprivileged children',
      date: '2024-02-20',
      type: 'Education Support'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Community kitchen serving meals to 300+ people daily',
      date: '2024-03-01',
      type: 'Food Donation'
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Hygiene kit distribution to families in need',
      date: '2024-03-10',
      type: 'Essential Resources'
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/400x400',
      caption: 'Blanket distribution drive for homeless individuals',
      date: '2024-03-15',
      type: 'Clothing Support'
    }
  ];
};

