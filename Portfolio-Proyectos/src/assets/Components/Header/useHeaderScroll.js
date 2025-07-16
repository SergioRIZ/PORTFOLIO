import { useState, useEffect } from 'react';

export const useHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detectar scroll para cambiar el estilo del header Y controlar visibilidad
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Cambiar estilo basado en scroll
      setIsScrolled(currentScrollY > 20);
      
      // Controlar visibilidad basada en dirección del scroll
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up o cerca del top → mostrar header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down y no cerca del top → ocultar header
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return {
    isScrolled,
    isVisible,
    lastScrollY
  };
};