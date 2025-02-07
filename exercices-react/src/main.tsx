import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accueil from './pages/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Accueil />
  </StrictMode>,
)
