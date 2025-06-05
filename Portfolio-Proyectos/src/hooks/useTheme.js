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
      // Agregar clases adicionales para estilos personalizados
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('theme-light');
    }
  }, []);

  // Función para cambiar tema con estilos adicionales
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