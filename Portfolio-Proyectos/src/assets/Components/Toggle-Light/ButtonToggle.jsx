import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import Dark from './Dark';
import Light from './Light';

const ButtonToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  // Estilos dinámicos mejorados para responsive
  const getButtonStyles = () => {
    if (isDarkMode) {
      return `
        relative p-2 sm:p-2.5 lg:p-3 cursor-pointer
        bg-transparent border-2 border-emerald-500 rounded-none
        text-emerald-500 hover:text-emerald-400
        hover:bg-emerald-500/20 hover:scale-105
        shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
        active:scale-95
        touch-manipulation
        min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] lg:min-w-[48px] lg:min-h-[48px]
        flex items-center justify-center
      `;
    } else {
      return `
        relative p-2 sm:p-2.5 lg:p-3 cursor-pointer
        bg-white/90 backdrop-blur-sm rounded-xl
        text-slate-600 hover:text-slate-800
        border border-slate-200/60 hover:border-slate-300/80
        shadow-sm hover:shadow-lg hover:shadow-slate-200/50
        hover:bg-white/95 hover:scale-[1.02]
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:ring-offset-2
        active:scale-95
        touch-manipulation
        min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] lg:min-w-[48px] lg:min-h-[48px]
        flex items-center justify-center
      `;
    }
  };

  // Responsive icon size calculation
  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 18; // Mobile: smaller icons
      if (window.innerWidth < 1024) return 20; // Tablet: medium icons
      return 22; // Desktop: larger icons
    }
    return 20; // Default fallback
  };

  const [iconSize, setIconSize] = React.useState(20);

  React.useEffect(() => {
    const updateIconSize = () => {
      setIconSize(getIconSize());
    };

    updateIconSize();
    
    const handleResize = () => {
      updateIconSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`${getButtonStyles()} ${className}`}
      aria-label={`Cambiar a modo ${isDarkMode ? 'claro' : 'oscuro'}`}
      title={`Modo ${isDarkMode ? 'claro' : 'oscuro'}`}
      type="button"
    >
      <div className="relative flex items-center justify-center">
        {/* Transición suave entre iconos - Responsive */}
        <div 
          className={`absolute transition-all duration-300 ${
            isDarkMode ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-180'
          }`}
          style={{ 
            width: iconSize, 
            height: iconSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Light size={iconSize} />
        </div>
        
        <div 
          className={`absolute transition-all duration-300 ${
            !isDarkMode ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-180'
          }`}
          style={{ 
            width: iconSize, 
            height: iconSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Dark size={iconSize} />
        </div>
      </div>
    </button>
  );
};

export default ButtonToggle;