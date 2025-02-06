import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './User-02.tsx'
import App from './App.tsx';
import './User-01.tsx';
import './Utils.tsx';
import './Pluck.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
