import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration to prevent unwanted scrolling
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Custom smooth scroll to top with optimized timing
    const scrollToTop = () => {
      const scrollOptions: ScrollToOptions = {
        top: 0,
        left: 0,
        behavior: 'smooth'
      };

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        window.scrollTo(scrollOptions);
      });
    };

    // Small delay to ensure page has rendered completely
    const timer = setTimeout(scrollToTop, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}