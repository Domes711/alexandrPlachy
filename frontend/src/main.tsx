import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Dotaznik from './pages/Dotaznik.tsx'
import Poptavka from './pages/Poptavka.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dotaznik" element={<Dotaznik />} />
        <Route path="/poptavka" element={<Poptavka />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
