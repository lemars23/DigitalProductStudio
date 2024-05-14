import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './index.scss';

import HomePage from './pages/home-page/home-page';
import ServicesPage from './pages/services-page/services-page';
import WorksPage from './pages/works-page/works-page';
import ProcessPage from './pages/process-page/process-page';
import AboutPage from './pages/about-page/about-page';
import CareersPage from './pages/careers-page/careers-page';
import ContactPage from './pages/contact-page/contact-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/work" element={<WorksPage/>} />
            <Route path="/process" element={<ProcessPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/careers" element={<CareersPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  </React.StrictMode>
);

