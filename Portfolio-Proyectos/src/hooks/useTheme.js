import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inicializar tema al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('theme-light');
    }
  }, []);

  // AÑADIR: Escuchar cambios en las clases del document
  useEffect(() => {
    const checkTheme = () => {
      const newIsDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(newIsDark);
    };

    // Observar cambios en las clases del document
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Función para cambiar tema con corrección mínima
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark', 'theme-dark');
      document.documentElement.classList.remove('theme-light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark', 'theme-dark');
      document.documentElement.classList.add('theme-light');
      localStorage.setItem('theme', 'light');
    }

    // CORRECCIÓN AGRESIVA: Múltiples técnicas para forzar repaint
    requestAnimationFrame(() => {
      // Trigger repaint global
      document.body.offsetHeight;
      
      // Forzar re-render más agresivo para componentes problemáticos
      const problematicSections = ['#contact', '#projects', '#about'];
      problematicSections.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
          // Técnica 1: Transform trick
          element.style.transform = 'translateZ(0)';
          element.offsetHeight;
          element.style.transform = '';
          
          // Técnica 2: Display trick
          element.style.display = 'none';
          element.offsetHeight;
          element.style.display = '';
          
          // Técnica 3: Opacity trick
          element.style.opacity = '0.99';
          element.offsetHeight;
          element.style.opacity = '';
        }
      });
      
      // Forzar repaint específico de las CARDS problemáticas
      const cardSelectors = [
        '.bg-black\\/95', // Dark mode cards
        '.bg-white\\/98', // Light mode cards  
        '[class*="bg-black"]', // Any dark background
        '[class*="bg-white"]', // Any light background
        '[class*="backdrop-blur"]' // Backdrop blur elements
      ];
      
      setTimeout(() => {
        cardSelectors.forEach(cardSelector => {
          const cards = document.querySelectorAll(cardSelector);
          cards.forEach(card => {
            card.style.transform = 'translateZ(0)';
            card.offsetHeight;
            card.style.transform = '';
          });
        });
        
        // También forzar repaint de todos los elementos hijos
        problematicSections.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            const allChildren = element.querySelectorAll('*');
            allChildren.forEach(child => {
              child.style.transform = 'translateZ(0)';
              child.offsetHeight;
              child.style.transform = '';
            });
          }
        });
      }, 10);
    });
  };

  // Función para obtener estilos dinámicos basados en el tema
  const getThemeStyles = (lightStyles, darkStyles) => {
    return isDarkMode ? darkStyles : lightStyles;
  };

  // Función para obtener clases dinámicas
  const getThemeClasses = (baseClasses, lightClasses, darkClasses) => {
    return `${baseClasses} ${isDarkMode ? darkClasses : lightClasses}`;
  };

  return {
    isDarkMode,
    toggleTheme,
    getThemeStyles,
    getThemeClasses
  };
};