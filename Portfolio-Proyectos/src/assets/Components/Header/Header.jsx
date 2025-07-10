import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ButtonToggle from '../Toggle-Light/ButtonToggle';
import { useTheme } from '../../../hooks/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  // Estilos dinámicos basados en el tema (aplicando los estilos del HTML)
  const getHeaderStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO - Basado en el CSS del HTML
        base: isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b-2 border-t-2 border-emerald-500 shadow-2xl shadow-emerald-500/40' 
          : 'bg-black/90 backdrop-blur-xl border-b-2 border-t-2 border-emerald-500 shadow-lg shadow-emerald-500/30',
        transition: 'transition-all duration-300 ease-in-out',
        logo: 'text-2xl font-bold text-emerald-500 font-mono tracking-wider drop-shadow-lg hover:scale-105 transition-transform duration-200',
        logoGlow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        navLink: 'text-emerald-500 font-mono text-sm tracking-wider uppercase border-l-2 border-transparent hover:border-l-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 px-4 py-1.5 transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(16,185,129,0.2)]',
        socialLink: '',
        mobileButton: 'p-2 bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-200 hover:scale-105',
        mobileMenu: 'bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-emerald-500/30 rounded-none mt-2 shadow-2xl shadow-emerald-500/20',
        mobileLinkHover: 'hover:bg-emerald-500/10 hover:border-l-emerald-500',
        borderColor: 'border-emerald-500/30'
      };
    } else {
      return {
        // MODO CLARO - Basado en el CSS del HTML
        base: isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-lg shadow-slate-200/30' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-md shadow-slate-200/20',
        transition: 'transition-all duration-300 ease-out',
        logo: 'text-2xl font-light text-slate-800 tracking-wide hover:scale-105 hover:text-slate-900 transition-all duration-200',
        logoGlow: '',
        navLink: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/60 px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02]',
        socialLink: '',
        mobileButton: 'p-2.5 bg-white/90 backdrop-blur-sm border border-slate-200/60 text-slate-600 hover:text-slate-800 hover:bg-white/95 hover:border-slate-300/80 rounded-xl shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 ease-out',
        mobileMenu: 'bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-xl mt-2 shadow-xl shadow-slate-200/30',
        mobileLinkHover: 'hover:bg-slate-100/60',
        borderColor: 'border-slate-200/60'
      };
    }
  };

  const styles = getHeaderStyles();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 ${styles.transition} ${styles.base}`}
      style={{ position: 'fixed' }} // Forzar position fixed por si acaso
    >
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-[70px]">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={`${styles.logo} ${styles.logoGlow}`}
            >
              {isDarkMode ? '> SERGIORIZ.EXE' : 'Portfolio'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
          <div className="hidden lg:flex items-center space-x-4">            
            {/* Theme Toggle */}
            <div className={isDarkMode ? 'shadow-lg shadow-emerald-500/40' : ''}>
              <ButtonToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className={isDarkMode ? 'shadow-lg shadow-emerald-500/40' : ''}>
              <ButtonToggle />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.mobileButton}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className={`px-2 pt-2 pb-6 space-y-1 ${styles.mobileMenu}`}>
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
                  className={`block px-4 py-3 ${styles.navLink} ${styles.mobileLinkHover} font-medium ${isDarkMode ? 'border-l-2 border-transparent' : 'rounded-lg'}`}
                >
                  {isDarkMode ? darkText[item.name] : item.name}
                </a>
              );
            })}
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;