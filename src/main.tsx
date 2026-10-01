import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Preview from './Preview.tsx'

// Buka http://localhost:5173/#preview buat lihat 3 varian scene berdampingan
const showPreview = window.location.hash === '#preview'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {showPreview ? <Preview /> : <App />}
  </StrictMode>,
)
