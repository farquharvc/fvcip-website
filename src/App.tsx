/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans selection:bg-gold selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContacts />
        </div>
      </Router>
    </LanguageProvider>
  );
}
