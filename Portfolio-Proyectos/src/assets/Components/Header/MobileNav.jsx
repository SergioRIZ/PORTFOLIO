import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, darkModeTexts } from './headerData';
import ButtonToggle from '../Toggle-Light/ButtonToggle';

const MobileNav = ({ 
  isDarkMode, 
  styles, 
  isMenuOpen, 
  isVisible, 
  toggleMenu, 
  closeMenu, 
  smoothScrollTo 
}) => {
  return (
    <>
      {/* Mobile/Tablet controls */}
      <div className="lg:hidden flex items-center space-x-2">
        <div className={isDarkMode ? 'shadow-lg shadow-emerald-500/40' : ''}>
          <ButtonToggle />
        </div>
        
        <button
          onClick={toggleMenu}
          className={styles.mobileButton}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile/Tablet Navigation Menu - Only show if header is visible */}
      {isMenuOpen && isVisible && (
        <div className="lg:hidden fixed top-16 sm:top-[70px] left-0 right-0 z-40">
          <div className={`${styles.mobileMenu} mx-4 my-2`}>
            <div className="p-4 sm:p-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScrollTo(item.href, e)}
                  className={`block px-4 py-3 text-base ${styles.navLink} ${styles.mobileLinkHover} font-medium ${isDarkMode ? 'border-l-2 border-transparent rounded-none' : 'rounded-lg'} transition-all duration-200`}
                >
                  {isDarkMode ? darkModeTexts[item.name] : item.name}
                </a>
              ))}
              
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
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default MobileNav;