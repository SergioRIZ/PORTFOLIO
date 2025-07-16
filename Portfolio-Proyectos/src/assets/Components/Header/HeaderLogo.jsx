import React from 'react';
import { getLogoText, getLogoTitle } from './headerData';

const HeaderLogo = ({ isDarkMode, styles, smoothScrollTo }) => {
  const logoText = getLogoText(isDarkMode);
  const logoTitle = getLogoTitle(isDarkMode);

  return (
    <div className="flex-shrink-0 min-w-0">
      <a 
        href="#home"
        onClick={(e) => smoothScrollTo('#home', e)}
        className={`${styles.logo} ${styles.logoGlow} truncate cursor-pointer`}
        title={logoTitle}
      >
        <span className="hidden sm:inline">
          {logoText.desktop}
        </span>
        <span className="sm:hidden">
          {logoText.mobile}
        </span>
      </a>
    </div>
  );
};

export default HeaderLogo;