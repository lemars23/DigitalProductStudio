import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './index.scss';

import HomePage from './pages/home-page/home-page';
import ServicesPage from './pages/services-page/services-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/services" element={<ServicesPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  </React.StrictMode>
);

