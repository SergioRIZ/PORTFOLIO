import React from 'react';

const HeroSubtitle = ({ isDarkMode, styles }) => {
  return (
    <p className={styles.subtitle}>
      {isDarkMode 
        ? " " // Espacio vacío en modo oscuro (se muestra el terminal)
        : 'Aquí encontrarás mis proyectos, habilidades y formas de contactarme.'
      }
    </p>
  );
};

export default HeroSubtitle;