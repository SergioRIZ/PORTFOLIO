import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import Dark from './Dark';
import Light from './Light';

const ButtonToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-lg 
        bg-gray-100 dark:bg-gray-800 
        text-gray-600 dark:text-gray-400 
        hover:text-blue-600 dark:hover:text-blue-400 
        transition-all duration-200 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
      aria-label={`Cambiar a modo ${isDarkMode ? 'claro' : 'oscuro'}`}
      title={`Modo ${isDarkMode ? 'claro' : 'oscuro'}`}
    >
      <div className="relative w-5 h-5">
        {/* Transición suave entre iconos */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <Light />
        </div>
        
        <div className={`absolute inset-0 transition-all duration-300 ${
          !isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <Dark />
        </div>
      </div>
    </button>
  );
};

export default ButtonToggle;