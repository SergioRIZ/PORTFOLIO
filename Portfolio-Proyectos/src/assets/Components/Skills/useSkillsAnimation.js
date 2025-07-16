import { useState, useEffect } from 'react';

export const useSkillsAnimation = (skillsData, isDarkMode) => {
  const [animatedBars, setAnimatedBars] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  // Detectar cuando la sección está visible para animar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animar barras con delay escalonado
          Object.keys(skillsData).forEach((category, categoryIndex) => {
            skillsData[category].skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedBars(prev => ({
                  ...prev,
                  [`${category}-${skillIndex}`]: true
                }));
              }, (categoryIndex * 200) + (skillIndex * 80));
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [isVisible, skillsData]);

  // Forzar re-render cuando cambia el tema
  useEffect(() => {
    const forceRepaint = () => {
      requestAnimationFrame(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
          // Técnica 1: Transform trick
          skillsSection.style.transform = 'translateZ(0)';
          skillsSection.offsetHeight;
          skillsSection.style.transform = '';
          
          // Técnica 2: Display trick
          skillsSection.style.display = 'none';
          skillsSection.offsetHeight;
          skillsSection.style.display = '';
          
          // Forzar repaint de las cards específicamente
          const skillCards = skillsSection.querySelectorAll('[class*="bg-black"], [class*="bg-white"], [class*="backdrop-blur"]');
          skillCards.forEach(card => {
            card.style.transform = 'translateZ(0)';
            card.offsetHeight;
            card.style.transform = '';
          });
          
          // Forzar repaint de todos los elementos hijos
          const allChildren = skillsSection.querySelectorAll('*');
          allChildren.forEach(child => {
            child.style.transform = 'translateZ(0)';
            child.offsetHeight;
            child.style.transform = '';
          });
        }
      });
    };

    // Delay pequeño para permitir que el DOM se actualice
    const timer = setTimeout(forceRepaint, 50);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  // Función para resetear animaciones
  const resetAnimations = () => {
    setAnimatedBars({});
    setIsVisible(false);
  };

  return {
    animatedBars,
    isVisible,
    resetAnimations
  };
};