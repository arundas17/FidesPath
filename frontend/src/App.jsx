// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components

import PageLayout from './PageLayout/PageLayout'; // Your new layout component

// Import your page components
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Industry from './Pages/Indusrtry/Industry'; // Check for typo: Indusrtry -> Industry
import ContactUs from './Pages/ContactUs/ContactUs';

import './App.css'; 

import CloudServices from './Services/CloudServices';
import ManagedService from './Services/ManagedService';
import AdditionalService from './Services/AdditionalService';

function App() {
  return (
    <BrowserRouter>
      <div className='fidespath'> 
        <Routes>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/about" element={<PageLayout><AboutUs /></PageLayout>} />
          
          <Route path="/services/cloudservices" element={<PageLayout><CloudServices /></PageLayout>} />
          <Route path="/services/managedservices" element={<PageLayout><ManagedService /></PageLayout>} />
          <Route path="/services/additionalservices" element={<PageLayout><AdditionalService /></PageLayout>} />
          <Route path="/industries" element={<PageLayout><Industry /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><ContactUs /></PageLayout>} />
          <Route path="*" element={<PageLayout><div><h1>404 - Page Not Found</h1><p>Sorry, the page you are looking for does not exist.</p></div></PageLayout>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;