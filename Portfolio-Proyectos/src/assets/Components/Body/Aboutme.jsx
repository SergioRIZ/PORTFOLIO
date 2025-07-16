import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

const Aboutme = () => {
  const { isDarkMode } = useTheme();

  // Estilos dinámicos mejorados para responsive
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO - Responsive optimizado
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        container: 'max-w-7xl mx-auto w-full',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] leading-tight',
        gridContainer: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 items-center',
        textContainer: 'order-2 lg:order-1 space-y-4 sm:space-y-6',
        description: 'text-base sm:text-lg lg:text-xl text-emerald-400 font-mono tracking-wide leading-relaxed',
        description2: 'text-base sm:text-lg lg:text-xl text-emerald-400 font-mono tracking-wide leading-relaxed',
        infoCard: 'order-1 lg:order-2 bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 p-4 sm:p-6 lg:p-8 rounded-none transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-105',
        infoTitle: 'text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-emerald-500 font-mono tracking-wider uppercase',
        infoList: 'space-y-3 sm:space-y-4 text-emerald-400 font-mono',
        infoItem: 'text-sm sm:text-base lg:text-lg text-emerald-400 font-mono leading-relaxed',
        infoLabel: 'text-emerald-500 font-mono tracking-wider uppercase font-bold'
      };
    } else {
      return {
        // MODO CLARO - Responsive optimizado
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        container: 'max-w-7xl mx-auto w-full',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-slate-800 font-light tracking-wide bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight',
        gridContainer: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 items-center',
        textContainer: 'order-2 lg:order-1 space-y-4 sm:space-y-6',
        description: 'text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed',
        description2: 'text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed',
        infoCard: 'order-1 lg:order-2 bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 p-4 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-slate-200/50',
        infoTitle: 'text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-slate-800',
        infoList: 'space-y-3 sm:space-y-4 text-slate-600',
        infoItem: 'text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed',
        infoLabel: 'text-slate-800 font-semibold'
      };
    }
  };

  const styles = getStyles();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {isDarkMode ? (
            <>
              <span className="hidden sm:inline">&gt; ABOUT_ME.EXE</span>
              <span className="sm:hidden">&gt; ABOUT.EXE</span>
            </>
          ) : (
            'Sobre mi'
          )}
        </h2>
        
        <div className={styles.gridContainer}>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              {isDarkMode 
                ? '// I´am a passionate developer focused on creating intuitive user interfaces and web experiences.'
                : 'Soy un desarrollador apasionado por crear interfaces de usuario intuitivas y experiencias web.'
              }
            </p>
            <p className={styles.description2}>
              {isDarkMode
                ? (
                  <>
                    <span className="hidden sm:inline">
                      // I focus on technologies such as React/Vite, JavaScript, CSS/TailwindCSS, Java and Unity.
                    </span>
                  </>
                )
                : (
                  <>
                    <span className="hidden sm:inline">
                      Me especializo en tecnologías como React/Vite, JavaScript, CSS/TailwindCSS, JAVA y Unity.
                    </span>
                  </>
                )
              }
            </p>
          </div>
          
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              {isDarkMode ? (
                <>
                  <span className="hidden sm:inline">&gt; PERSONAL_INFO()</span>
                  <span className="sm:hidden">&gt; INFO()</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Información Personal</span>
                  <span className="sm:hidden">Info Personal</span>
                </>
              )}
            </h3>
            
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'NAME:' : 'Nombre:'} 
                </span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">
                  {isDarkMode ? (
                    <>
                      <span className="hidden sm:inline">SERGIO_RIZ</span>
                      <span className="sm:hidden">S. ROLDAN</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Sergio Roldan Ibañez</span>
                      <span className="sm:hidden">S. Roldan Ibañez</span>
                    </>
                  )}
                </span>
              </li>
              
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'LOCATION:' : 'Ubicación:'} 
                </span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">
                  {isDarkMode ? (
                    <>
                      <span className="hidden sm:inline">Castellon de la Plana, España</span>
                      <span className="sm:hidden">Castellón, España</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Castellon de la Plana, España</span>
                      <span className="sm:hidden">Castellón, España</span>
                    </>
                  )}
                </span>
              </li>
              
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'EMAIL:' : 'Email:'} 
                </span>
                <br className="sm:hidden" />
                <span className="sm:ml-2 break-all">
                  {isDarkMode ? 'sroldan.dev@gmail.com' : 'sroldan.dev@gmail.com'}
                </span>
              </li>
              
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  {isDarkMode ? 'EXPERIENCE:' : 'Experiencia:'} 
                </span>
                <br className="sm:hidden" />
                <span className="sm:ml-2">
                  {isDarkMode ? '1_YEARS++' : '1+ años'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;