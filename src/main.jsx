import React from 'react'; // Asegúrate de importar React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

// Crea el root y renderiza la aplicación
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter> {/* Envuelve App con BrowserRouter para el enrutamiento */}
      <App />
    </BrowserRouter>
  </StrictMode>
);