import React, { useState, useEffect } from 'react';

const Aboutme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar cambios de tema observando las clases del document (IGUAL QUE EN HEADER)
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

  // Estilos dinámicos usando el mismo patrón que el Header
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        description: 'text-lg text-emerald-400 font-mono tracking-wide mb-6',
        description2: 'text-lg text-emerald-400 font-mono tracking-wide',
        infoCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 p-6 rounded-none',
        infoTitle: 'text-xl font-semibold mb-4 text-emerald-500 font-mono tracking-wider uppercase',
        infoList: 'space-y-2 text-emerald-400 font-mono',
        infoItem: 'text-emerald-400 font-mono',
        infoLabel: 'text-emerald-500 font-mono tracking-wider uppercase'
      };
    } else {
      return {
        // MODO CLARO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 font-light tracking-wide',
        description: 'text-lg text-slate-600 font-medium mb-6',
        description2: 'text-lg text-slate-600 font-medium',
        infoCard: 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 p-6 rounded-xl',
        infoTitle: 'text-xl font-semibold mb-4 text-slate-800',
        infoList: 'space-y-2 text-slate-600',
        infoItem: 'text-slate-600',
        infoLabel: 'text-slate-800 font-medium'
      };
    }
  };

  const styles = getStyles();

  return (
    <section id="about" className={styles.section}>
      <div className="max-w-4xl mx-auto">
        <h2 className={styles.title}>
          {isDarkMode ? '> ABOUT_ME.EXE' : 'Sobre mí'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className={styles.description}>
              {isDarkMode 
                ? '// Soy un desarrollador apasionado por crear interfaces de usuario intuitivas y experiencias web excepcionales.'
                : 'Soy un desarrollador apasionado por crear interfaces de usuario intuitivas y experiencias web excepcionales.'
              }
            </p>
            <p className={styles.description2}>
              {isDarkMode
                ? '// Me especializo en tecnologías modernas como React/Vite, JavaScript/TypeScript y CSS/TailwindCSS.'
                : 'Me especializo en tecnologías modernas como React/Vite, JavaScript/TypeScript y CSS/TailwindCSS.'
              }
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              {isDarkMode ? '> PERSONAL_INFO()' : 'Información Personal'}
            </h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'NOMBRE:' : 'Nombre:'} 
                </span> {isDarkMode ? 'SERGIO_RIZ' : 'Sergio Roldan Ibañez'}
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'UBICACION:' : 'Ubicación:'} 
                </span> {isDarkMode ? 'Castellon de la Plana, España' : 'Castellon de la Plana, España'}
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'EMAIL:' : 'Email:'} 
                </span> {isDarkMode ? 'sroldan.dev@gmail.com' : 'sroldan.dev@gmail.com'}
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'EXPERIENCIA:' : 'Experiencia:'} 
                </span> {isDarkMode ? '1_YEARS++' : '1+ años'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;