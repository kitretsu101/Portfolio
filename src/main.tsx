import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  // Log when React starts rendering
  console.log('🚀 App starting...');

  // Monitor basic performance metrics
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (performance.timing) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`📊 Page load time: ${loadTime}ms`);
      }
    }, 0);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
