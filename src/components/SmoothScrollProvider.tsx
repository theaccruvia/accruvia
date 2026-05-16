import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const initLenis = () => {
      try {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
          if (lenisRef.current) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
          }
        }

        requestAnimationFrame(raf);

        // Handle resize events
        const handleResize = () => {
          if (lenisRef.current) {
            lenisRef.current.resize();
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (lenisRef.current) {
            lenisRef.current.destroy();
            lenisRef.current = null;
          }
        };
      } catch (error) {
        console.warn('Lenis initialization failed:', error);
      }
    };

    // Initialize after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLenis);
    } else {
      initLenis();
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // Scroll to top on route change using Lenis
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScrollProvider;

