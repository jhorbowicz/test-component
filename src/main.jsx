import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const renderTestComponent = (rootElement) => createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default renderTestComponent