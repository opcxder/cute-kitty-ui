import { useEffect, useState } from 'react';

/**
 * Hook to check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return prefersReducedMotion;
}

/**
 * Hook to handle hover state
 */
export function useHoverState(enabled: boolean = true): [boolean, {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}] {
  const [isHovered, setIsHovered] = useState(false);
  
  const hoverHandlers = {
    onMouseEnter: () => {
      if (enabled) {
        setIsHovered(true);
      }
    },
    onMouseLeave: () => {
      if (enabled) {
        setIsHovered(false);
      }
    },
  };
  
  return [isHovered, hoverHandlers];
}