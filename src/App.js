import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DonationsPage from './pages/DonationsPage';
import DonatePage from './pages/DonatePage';
import AdminPage from './pages/AdminPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

