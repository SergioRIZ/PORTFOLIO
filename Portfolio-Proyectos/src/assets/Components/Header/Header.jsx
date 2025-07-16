import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { useHeaderScroll } from './useHeaderScroll';
import { useHeaderNavigation } from './useHeaderNavigation';
import { getHeaderStyles } from './headerStyles';
import HeaderLogo from './HeaderLogo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const { isDarkMode } = useTheme();
  const { isScrolled, isVisible } = useHeaderScroll();
  const { isMenuOpen, smoothScrollTo, toggleMenu, closeMenu } = useHeaderNavigation();
  
  const styles = getHeaderStyles(isDarkMode, isScrolled);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 ${styles.transition} ${styles.base} transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ position: 'fixed' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          
          <HeaderLogo 
            isDarkMode={isDarkMode}
            styles={styles}
            smoothScrollTo={smoothScrollTo}
          />

          <DesktopNav 
            isDarkMode={isDarkMode}
            styles={styles}
            smoothScrollTo={smoothScrollTo}
          />

          <MobileNav 
            isDarkMode={isDarkMode}
            styles={styles}
            isMenuOpen={isMenuOpen}
            isVisible={isVisible}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            smoothScrollTo={smoothScrollTo}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;