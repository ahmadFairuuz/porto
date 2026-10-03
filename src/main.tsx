import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Preview is a dev-only 3D variant viewer (opened via #preview).
// Lazy-loaded so three.js never enters the main bundle.
const Preview = lazy(() => import('./Preview.tsx'))

const showPreview = window.location.hash === '#preview'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      {showPreview ? <Preview /> : <App />}
    </Suspense>
  </StrictMode>,
)
