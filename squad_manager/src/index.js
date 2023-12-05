import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import './index.css';

import Navigation  from "./Controlere/Navigation";
import Home from "./Controlere/Home";
import Auth from './Auth';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    
    <Navigation />

    <Routes>

      {/* Ruta pentru pagina de Home */}
      <Route path="/" element={<Home />} />

      {/* Ruta pentru pagina de Autentificare */}
      <Route path="/toauth" element={<Auth />} />

      {/* Ruta default */}
      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>

  </Router>
);
