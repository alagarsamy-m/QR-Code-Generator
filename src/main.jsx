import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './QrCodeGenerator.css'
import { QrCodeGenerator } from './QrCodeGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCodeGenerator />
  </StrictMode>,
)
