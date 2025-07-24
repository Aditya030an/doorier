import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/navbar';
import Home from './Component/Home';
import Company from './Component/Company';
import Footer from './Component/Footer';
import Service from './Component/Service';
import ContactForm from './Component/Contactform';
import Contact from './Component/Contact';
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;