import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root-test-component')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
