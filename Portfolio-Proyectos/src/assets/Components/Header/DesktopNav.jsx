import React from 'react';
import { navItems, darkModeTexts } from './headerData';
import ButtonToggle from '../Toggle-Light/ButtonToggle';

const DesktopNav = ({ isDarkMode, styles, smoothScrollTo }) => {
  return (
    <>
      {/* Desktop Navigation - Hidden on mobile/tablet */}
      <div className="hidden lg:flex items-center space-x-2 xl:space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => smoothScrollTo(item.href, e)}
            className={styles.navLink}
          >
            {isDarkMode ? darkModeTexts[item.name] : item.name}
          </a>
        ))}
      </div>

      {/* Desktop Controls */}
      <div className="hidden lg:flex items-center space-x-2 sm:space-x-4">            
        {/* Theme Toggle */}
        <div className={isDarkMode ? 'shadow-lg shadow-emerald-500/40' : ''}>
          <ButtonToggle />
        </div>
      </div>
    </>
  );
};

export default DesktopNav;