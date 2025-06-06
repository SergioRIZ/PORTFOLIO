import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import Dark from './Dark';
import Light from './Light';

const ButtonToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  // Estilos dinámicos que coinciden con el header
  const getButtonStyles = () => {
    if (isDarkMode) {
      return `
        relative p-2 cursor-pointer
        bg-transparent border-2 border-emerald-500 rounded-none
        text-emerald-500 hover:text-emerald-400
        hover:bg-emerald-500/20 hover:scale-105
        shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
      `;
    } else {
      return `
        relative p-2.5 cursor-pointer
        bg-white/90 backdrop-blur-sm rounded-xl
        text-slate-600 hover:text-slate-800
        border border-slate-200/60 hover:border-slate-300/80
        shadow-sm hover:shadow-lg hover:shadow-slate-200/50
        hover:bg-white/95 hover:scale-[1.02]
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:ring-offset-2
      `;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${getButtonStyles()} ${className}`}
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