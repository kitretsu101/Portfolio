import { useEffect, useRef } from 'react';

export function usePerformanceMonitor(componentName: string) {
  const startTimeRef = useRef<number>(0);
  const renderCountRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = performance.now();
    renderCountRef.current += 1;

    return () => {
      const endTime = performance.now();
      const loadTime = endTime - startTimeRef.current;

      // Log performance in development
      if (process.env.NODE_ENV === 'development' && loadTime > 16) {
        console.log(`${componentName} render time: ${loadTime.toFixed(2)}ms (render #${renderCountRef.current})`);
      }
    };
  });

  // Track when component becomes visible (for lazy loading)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Component is now visible
          if (process.env.NODE_ENV === 'development') {
            console.log(`${componentName} became visible`);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-component="${componentName}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [componentName]);
}

// Hook for measuring page load performance
export function usePageLoadPerformance() {
  useEffect(() => {
    const handleLoad = () => {
      // Measure key performance metrics
      setTimeout(() => {
        if (performance.timing) {
          const timing = performance.timing;
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;

          if (process.env.NODE_ENV === 'development') {
            console.log(`Page load time: ${loadTime}ms`);
            console.log(`DOM ready time: ${domReady}ms`);
          }
        }
      }, 0);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
}