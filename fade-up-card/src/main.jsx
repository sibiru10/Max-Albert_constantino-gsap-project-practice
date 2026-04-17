import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimatedCard from './AnimatedCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedCard />
  </StrictMode>,
)
