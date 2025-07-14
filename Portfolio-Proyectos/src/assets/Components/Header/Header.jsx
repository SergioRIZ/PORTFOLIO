import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ButtonToggle from '../Toggle-Light/ButtonToggle';
import { useTheme } from '../../../hooks/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDarkMode } = useTheme();

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
        // Cerrar menú móvil si está abierto
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside or on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  // Estilos dinámicos basados en el tema (mejorados para responsive)
  const getHeaderStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO - Responsive optimizado
        base: isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b-2 border-t-2 border-emerald-500 shadow-2xl shadow-emerald-500/40' 
          : 'bg-black/90 backdrop-blur-xl border-b-2 border-t-2 border-emerald-500 shadow-lg shadow-emerald-500/30',
        transition: 'transition-all duration-300 ease-in-out',
        logo: 'text-lg sm:text-xl md:text-2xl font-bold text-emerald-500 font-mono tracking-wider drop-shadow-lg hover:scale-105 transition-transform duration-200',
        logoGlow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        navLink: 'text-emerald-500 font-mono text-xs sm:text-sm tracking-wider uppercase border-l-2 border-transparent hover:border-l-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 px-2 sm:px-4 py-1.5 transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(16,185,129,0.2)]',
        mobileButton: 'p-2 bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-200 hover:scale-105',
        mobileMenu: 'bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-lg overflow-hidden',
        mobileLinkHover: 'hover:bg-emerald-500/10 hover:border-l-emerald-500',
        borderColor: 'border-emerald-500/30'
      };
    } else {
      return {
        // MODO CLARO - Responsive optimizado
        base: isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-lg shadow-slate-200/30' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-md shadow-slate-200/20',
        transition: 'transition-all duration-300 ease-out',
        logo: 'text-lg sm:text-xl md:text-2xl font-light text-slate-800 tracking-wide hover:scale-105 hover:text-slate-900 transition-all duration-200',
        logoGlow: '',
        navLink: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/60 px-2 sm:px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02]',
        mobileButton: 'p-2.5 bg-white/90 backdrop-blur-sm border border-slate-200/60 text-slate-600 hover:text-slate-800 hover:bg-white/95 hover:border-slate-300/80 rounded-xl shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 ease-out',
        mobileMenu: 'bg-white/98 backdrop-blur-xl border-2 border-slate-200 shadow-xl shadow-slate-200/50 rounded-lg overflow-hidden',
        mobileLinkHover: 'hover:bg-slate-100/60',
        borderColor: 'border-slate-200/60'
      };
    }
  };

  const styles = getHeaderStyles();

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 ${styles.transition} ${styles.base} transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ position: 'fixed' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">
            
            {/* Logo - Responsive text sizes */}
            <div className="flex-shrink-0 min-w-0">
              <a 
                href="#home" 
                className={`${styles.logo} ${styles.logoGlow} truncate`}
                title={isDarkMode ? 'SERGIORIZ.EXE' : 'Portfolio'}
              >
                <span className="hidden sm:inline">
                  {isDarkMode ? '> SERGIORIZ.EXE' : 'Portfolio'}
                </span>
                <span className="sm:hidden">
                  {isDarkMode ? '> SR.EXE' : 'Portfolio'}
                </span>
              </a>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-8">
              {navItems.map((item) => {
                const darkText = {
                  'Inicio': '[INICIO]',
                  'Sobre mí': '[ABOUT]',
                  'Proyectos': '[PROJECTS]',
                  'Contacto': '[CONTACT]'
                };
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={styles.navLink}
                  >
                    {isDarkMode ? darkText[item.name] : item.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Social Links & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-2 sm:space-x-4">            
              {/* Theme Toggle */}
              <div className={isDarkMode ? 'shadow-lg shadow-emerald-500/40' : ''}>
                <ButtonToggle />
              </div>
            </div>

            {/* Mobile/Tablet controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className={isDarkMode ? 'shadow-lg shadow-emerald-500/40' : ''}>
                <ButtonToggle />
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.mobileButton}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile/Tablet Navigation Menu - Only show if header is visible */}
      {isMenuOpen && isVisible && (
        <div className="lg:hidden fixed top-16 sm:top-[70px] left-0 right-0 z-40">
          <div className={`${styles.mobileMenu} mx-4 my-2`}>
            <div className="p-4 sm:p-6 space-y-3">
              {navItems.map((item) => {
                const darkText = {
                  'Inicio': '[INICIO]',
                  'Sobre mí': '[ABOUT]',
                  'Proyectos': '[PROJECTS]',
                  'Contacto': '[CONTACT]'
                };
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base ${styles.navLink} ${styles.mobileLinkHover} font-medium ${isDarkMode ? 'border-l-2 border-transparent rounded-none' : 'rounded-lg'} transition-all duration-200`}
                  >
                    {isDarkMode ? darkText[item.name] : item.name}
                  </a>
                );
              })}
              
              {/* Separador visual */}
              <div className={`my-4 h-px ${isDarkMode ? 'bg-emerald-500/30' : 'bg-slate-200'}`} />
              
              {/* Información adicional en mobile */}
              <div className={`px-4 py-2 text-center ${isDarkMode ? 'text-emerald-400/80 font-mono text-sm' : 'text-slate-500 text-sm'}`}>
                {isDarkMode ? '// SERGIO_RIZ PORTFOLIO' : 'Portfolio de Sergio'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close menu when clicking outside - Only show if header and menu are visible */}
      {isMenuOpen && isVisible && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black/20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;