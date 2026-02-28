// Manual Donations Data
// Add your donation entries here with Instagram post URLs or direct image URLs
// You can copy Instagram post URLs from your Instagram page
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';

export const donationsData = [
  {
    id: 1,
    image: img1,
    caption: 'Donated rice bags and essential cooking groceries to an old-age home',
    type: 'Essential Resources',
    instagramUrl: 'https://www.instagram.com/p/DQ822qZjxiL/',
  },
  {
    id: 2,
    image: img2,
    caption: 'Joined the blood donation camp conducted by MKM Foundation',
    date: '2024-01-20',
    type: 'Medical Aid',
    instagramUrl: 'https://www.instagram.com/p/DGDY5MAzZF0/',
  },
  {
    id: 3,
    image: img3,
    caption: 'Supplied essential items to a children’s foundation supporting orphaned children',
    date: '2024-02-05',
    type: 'Essential Resources',
    instagramUrl: 'https://www.instagram.com/p/C7_TXyBRK8K/',
  },
  {
    id: 4,
    image: img4,
    caption: 'We distributed books and stationery to children in need to support their education',
    date: '2024-02-12',
    type: 'Education Support',
    instagramUrl: 'https://www.instagram.com/p/C7q40phxHU3/',
  },
  {
    id: 5,
    image: img5,
    caption: 'We fed street dogs in our community, ensuring they received proper food and care',
    date: '2024-02-20',
    type: 'Animal Care & Support',
    instagramUrl: 'https://www.instagram.com/p/C8joyDQR872/',
  },
  {
    id: 6,
    image: img6,
    caption: 'Provided essential items such as rice bags, oil, and other cooking supplies to Diya Jyoti Foundation.',
    date: '2024-03-01',
    type: 'Food Donation',
    instagramUrl: 'https://www.instagram.com/p/DIWo91MzO0E/',
  },
  {
    id: 7,
    image: img7,
    caption: 'Distributed 500 sanitary pads to government school students to promote menstrual hygiene and awareness.',
    date: '2024-03-10',
    type: 'Girl Child Welfare',
    instagramUrl: 'https://www.instagram.com/p/C8R3bdkSZ9Q/',
  },
  {
    id: 8,
    image: img8,
    caption: 'Distributed books to all the children in the Diya Jyoti foundation, supporting their learning and education.',
    date: '2024-03-15',
    type: 'Clothing Support',
    instagramUrl: 'https://www.instagram.com/p/DK9-3jfvVPs/',
  },
  {
    id: 9, // FIXED duplicate ID
    image: img9,
    caption: 'We helped a girl continue her studies by paying her school fees',
    date: '2024-03-15',
    type: 'Education Support',
    instagramUrl: 'https://www.instagram.com/p/DPqu-Z0ExKZ/',
  },
];

/**
 * How to add Instagram images:
 * 
 * Method 1: Get image URL from Instagram post
 * 1. Open your Instagram post in a browser
 * 2. Right-click on the image → "Copy image address"
 * 3. Paste the URL in the 'image' field above
 * 
 * Method 2: Use Instagram post URL
 * 1. Copy the Instagram post URL (e.g., https://www.instagram.com/p/ABC123/)
 * 2. Paste it in the 'instagramUrl' field
 * 3. For the image, you can extract it or use a service like:
 *    - https://www.instadp.com/ (to get profile/post images)
 *    - Or manually download and host the image
 * 
 * Method 3: Download and host images
 * 1. Download images from Instagram
 * 2. Upload to your website's public folder or image hosting service
 * 3. Use the hosted URL in the 'image' field
 */

