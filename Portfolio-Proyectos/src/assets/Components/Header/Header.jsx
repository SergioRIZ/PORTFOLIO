import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';
import ButtonToggle from '../Toggle-Light/ButtonToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar cambios de tema observando las clases del document
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Verificar tema inicial
    checkTheme();

    // Observar cambios en las clases del document
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: ExternalLink, 
      href: 'https://github.com/tuusuario', 
      label: 'GitHub',
      text: 'GitHub'
    },
    { 
      icon: ExternalLink, 
      href: 'https://linkedin.com/in/tuusuario', 
      label: 'LinkedIn',
      text: 'LinkedIn'
    },
    { 
      icon: Mail, 
      href: 'mailto:sergio_1999_cs@hotmail.com', 
      label: 'Email',
      text: 'Email'
    }
  ];

  // Estilos dinámicos basados en el tema
  const getHeaderStyles = () => {
    if (isDarkMode) {
      return {
        base: isScrolled 
          ? 'bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20' 
          : 'bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-md',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        logo: 'text-2xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 hover:rotate-3 transition-all duration-300',
        navLink: 'text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group hover:scale-105',
        navUnderline: 'absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-500',
        socialLink: 'text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-125 hover:rotate-12 transform',
        mobileButton: 'p-2 rounded-xl bg-gradient-to-r from-gray-800 to-purple-800 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg',
        mobileMenu: 'bg-gradient-to-br from-gray-900/98 via-purple-900/98 to-gray-900/98 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-purple-500/30',
        mobileLinkHover: 'hover:bg-gradient-to-r hover:from-purple-800/50 hover:to-pink-800/50',
        borderColor: 'border-purple-500/30'
      };
    } else {
      return {
        base: isScrolled 
          ? 'bg-gradient-to-r from-white/90 via-blue-50/90 to-purple-50/90 backdrop-blur-md shadow-lg border-b border-blue-200/50' 
          : 'bg-transparent',
        transition: 'all 0.3s ease-in-out',
        logo: 'text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200',
        navLink: 'text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group',
        navUnderline: 'absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300',
        socialLink: 'text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform',
        mobileButton: 'p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-200',
        mobileMenu: 'bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg',
        mobileLinkHover: 'hover:bg-gray-50',
        borderColor: 'border-gray-200'
      };
    }
  };

  const styles = getHeaderStyles();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 ${styles.transition} ${styles.base}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={styles.logo}
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.navLink}
              >
                {item.name}
                <span className={styles.navUnderline}></span>
              </a>
            ))}
          </div>

          {/* Desktop Social Links & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 ${styles.socialLink}`}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                  <span className="text-xs hidden xl:inline">{social.text}</span>
                </a>
              );
            })}
            
            {/* Theme Toggle */}
            <ButtonToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ButtonToggle />
            
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 ${styles.navLink} ${styles.mobileLinkHover} rounded-lg font-medium`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className={`flex items-center justify-center space-x-6 pt-4 border-t ${styles.borderColor}`}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${styles.socialLink}`}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                    <span className="text-sm">{social.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;