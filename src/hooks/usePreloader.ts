import { useEffect } from 'react';

// Preload critical images for better performance
export function useImagePreloader(imageUrls: string[]) {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.loading = 'eager';
        img.decoding = 'async';
      });
    };

    // Small delay to not block initial render
    const timer = setTimeout(preloadImages, 100);

    return () => clearTimeout(timer);
  }, [imageUrls]);
}

// Preload fonts for better text rendering
export function useFontPreloader() {
  useEffect(() => {
    // Preload critical font weights
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap';
    fontLink.as = 'style';
    fontLink.onload = () => {
      fontLink.onload = null;
      fontLink.rel = 'stylesheet';
    };

    document.head.appendChild(fontLink);

    return () => {
      // Cleanup if needed
    };
  }, []);
}

// Utility for critical resource preloading
export function preloadCriticalResources() {
  // Preload hero images if any
  const heroImages: string[] = [
    // Add hero background images or critical images here
  ];

  heroImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
}