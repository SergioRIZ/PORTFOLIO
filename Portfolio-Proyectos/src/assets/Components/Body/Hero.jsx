import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

const Hero = () => {
  const { isDarkMode } = useTheme();

  // Estilos dinámicos mejorados para responsive
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO - Responsive optimizado
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        container: 'max-w-6xl mx-auto text-center w-full',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse leading-tight',
        subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-400 font-mono tracking-wide mb-6 sm:mb-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] leading-relaxed',
        terminalPrompt: 'text-emerald-500 font-mono text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 tracking-wider',
        commandLine: 'bg-black/90 border-2 border-emerald-500 rounded-none p-3 sm:p-4 lg:p-6 font-mono text-emerald-400 shadow-2xl shadow-emerald-500/40 backdrop-blur-xl mx-auto max-w-4xl',
        buttonContainer: 'mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center',
        primaryButton: 'w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-black px-6 sm:px-8 py-3 rounded-none font-mono tracking-wider uppercase border-2 border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base',
        secondaryButton: 'w-full sm:w-auto bg-transparent border-2 border-emerald-500 text-emerald-500 px-6 sm:px-8 py-3 rounded-none font-mono tracking-wider uppercase hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base'
      };
    } else {
      return {
        // MODO CLARO - Responsive optimizado
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        container: 'max-w-6xl mx-auto text-center w-full',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light tracking-wide leading-tight',
        subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-medium mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto',
        terminalPrompt: '',
        commandLine: '',
        buttonContainer: '',
        primaryButton: '',
        secondaryButton: ''
      };
    }
  };

  const styles = getStyles();

  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        {isDarkMode && (
          <div className={styles.terminalPrompt}>
            INITIALIZING PORTFOLIO...
          </div>
        )}
        
        <h1 className={styles.title}>
          {isDarkMode 
            ? (
              <>
                <span className="hidden sm:inline">&gt; SERGIO_RIZ.DEV</span>
                <span className="sm:hidden">&gt; SR.DEV</span>
              </>
            )
            : 'Bienvenido a mi Portfolio'
          }
        </h1>
        
        <p className={styles.subtitle}>
          {isDarkMode 
            ? '// Frontend Developer' 
            : 'Aquí encontrarás mis proyectos, habilidades y formas de contactarme.'
          }
        </p>

        {isDarkMode && (
          <div className={styles.commandLine}>
            <div className="text-left space-y-2 text-xs sm:text-sm lg:text-base">
              <div className="flex flex-wrap items-center">
                <span className="text-emerald-500">sergio@portfolio:~$</span> 
                <span className="text-emerald-400 ml-1"> ls -la skills/</span>
              </div>
              
              <div className="text-emerald-300 text-xs sm:text-sm leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                  drwxr-xr-x React.js<br />
                  drwxr-xr-x Vite<br />
                  drwxr-xr-x JavaScript<br />
                  drwxr-xr-x JAVA<br />
                  drwxr-xr-x CSS3 & Tailwind<br />
                  drwxr-xr-x Unity<br />
                  drwxr-xr-x C#<br />
                </div>
              </div>
              
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center">
                <span className="text-emerald-500">sergio@portfolio:~$</span> 
                <span className="text-emerald-400 ml-1"> cat welcome.txt</span>
              </div>
              
              <div className="text-emerald-300 text-xs sm:text-sm leading-relaxed italic">
                "Bienvenido a mi espacio digital. Aquí encontrarás mis proyectos, habilidades y formas de contactarme."
              </div>
              
              <div className="mt-2 flex flex-wrap items-center">
                <span className="text-emerald-500">sergio@portfolio:~$</span> 
                <span className="text-emerald-400 animate-pulse ml-1">_</span>
              </div>
            </div>
          </div>
        )}

        {isDarkMode && (
          <div className={styles.buttonContainer}>
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className={styles.primaryButton}
            >
              <span className="hidden sm:inline">VIEW_PROJECTS()</span>
              <span className="sm:hidden">PROJECTS()</span>
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className={styles.secondaryButton}
            >
              <span className="hidden sm:inline">EXECUTE_CONTACT()</span>
              <span className="sm:hidden">CONTACT()</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;