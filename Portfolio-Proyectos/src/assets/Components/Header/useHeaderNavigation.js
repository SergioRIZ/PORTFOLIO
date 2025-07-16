import { useState, useEffect } from 'react';

export const useHeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú móvil cuando se redimensiona la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para navegación suave
  const smoothScrollTo = (targetId, e) => {
    e.preventDefault();
    
    // Cerrar menú móvil si está abierto
    setIsMenuOpen(false);
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Calcular offset para compensar el header fijo
    const headerHeight = 70; // Altura aproximada del header
    const targetPosition = targetElement.offsetTop - headerHeight;

    // Scroll suave
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  // Función para toggle del menú
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Función para cerrar menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    smoothScrollTo,
    toggleMenu,
    closeMenu
  };
};