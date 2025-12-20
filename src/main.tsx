import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import { About } from './pages/About.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { NotFound } from './pages/NotFound.tsx';
import { ServerError } from './pages/ServerError.tsx';
import { Apply } from './pages/Apply.tsx';
import ScrollToTop from './components/utils/ScrollToTop.tsx';
import { Services } from './pages/Services.tsx';
import { ServiceDetail } from './pages/ServiceDetail.tsx';
import { Contact } from './pages/Contact.tsx';
import { Privacy } from './pages/Privacy.tsx';
import { Terms } from './pages/Terms.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<ServerError />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/services" element={<Services />} />
          <Route path="/:slug" element={<ServiceDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)