import React from 'react';

const HeroTitle = ({ isDarkMode, styles }) => {
  return (
    <h1 className={styles.title}>
      {isDarkMode ? (
        <>
          <span className="hidden sm:inline">&gt; SERGIO_RIZ.DEV</span>
          <span className="sm:hidden">&gt; SR.DEV</span>
        </>
      ) : (
        'Bienvenido a mi Portfolio'
      )}
    </h1>
  );
};

export default HeroTitle;