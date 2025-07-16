import React from 'react';

const HeroButtons = ({ isDarkMode, styles }) => {
  // Función para navegación suave
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = 70; // Altura del header
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  // Solo mostrar en modo oscuro
  if (!isDarkMode) return null;

  return (
    <div className={styles.buttonContainer}>
      <button 
        onClick={() => smoothScrollTo('#projects')}
        className={styles.primaryButton}
        aria-label="Ver proyectos"
      >
        <span className="hidden sm:inline">VIEW_PROJECTS()</span>
        <span className="sm:hidden">PROJECTS</span>
      </button>
      
      <button 
        onClick={() => smoothScrollTo('#contact')}
        className={styles.secondaryButton}
        aria-label="Ir a contacto"
      >
        <span className="hidden sm:inline">EXECUTE_CONTACT()</span>
        <span className="sm:hidden">CONTACT</span>
      </button>
    </div>
  );
};

export default HeroButtons;