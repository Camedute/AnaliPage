import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Login from './Login.js';
import Formulario from './Components/Registro.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Formulario />
    </BrowserRouter>
  </StrictMode>,
)
