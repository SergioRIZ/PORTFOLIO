import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

const Hero = () => {
  const { isDarkMode } = useTheme();

  // Estilos dinámicos usando el mismo patrón que el Header
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-4xl md:text-6xl font-bold mb-6 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse',
        subtitle: 'text-xl md:text-2xl text-emerald-400 font-mono tracking-wide mb-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]',
        terminalPrompt: 'text-emerald-500 font-mono text-lg mb-4 tracking-wider',
        commandLine: 'bg-black/90 border-2 border-emerald-500 rounded-none p-4 font-mono text-emerald-400 shadow-2xl shadow-emerald-500/40 backdrop-blur-xl'
      };
    } else {
      return {
        // MODO CLARO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light tracking-wide',
        subtitle: 'text-xl md:text-2xl text-slate-600 font-medium mb-8 leading-relaxed',
        terminalPrompt: '',
        commandLine: ''
      };
    }
  };

  const styles = getStyles();

  return (
    <section id="home" className={styles.section}>
      <div className="max-w-4xl mx-auto text-center">
        {isDarkMode && (
          <div className={styles.terminalPrompt}>
            INITIALIZING PORTFOLIO...
          </div>
        )}
        
        <h1 className={styles.title}>
          {isDarkMode 
            ? '> SERGIO_RIZ.DEV' 
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
            <div className="text-left space-y-2">
              <div>
                <span className="text-emerald-500">sergio@portfolio:~$</span> 
                <span className="text-emerald-400"> ls -la skills/</span>
              </div>
              <div className="text-emerald-300 text-sm">
                drwxr-xr-x  React.js<br/>
                drwxr-xr-x  Vite<br/>
                drwxr-xr-x  JavaScript<br/>
                drwxr-xr-x  CSS3 & Tailwind<br/>
                drwxr-xr-x  Unity<br/>
                -rw-r--r--  C#
              </div>
              <div className="mt-4">
                <span className="text-emerald-500">sergio@portfolio:~$</span> 
                <span className="text-emerald-400"> cat welcome.txt</span>
              </div>
              <div className="text-emerald-300 text-sm">
                "Bienvenido a mi espacio digital. Aquí encontrarás mis proyectos, habilidades y formas de contactarme."
              </div>
              <div className="mt-2">
                <span className="text-emerald-500">sergio@portfolio:~$</span> 
                <span className="text-emerald-400 animate-pulse">_</span>
              </div>
            </div>
          </div>
        )}

        {isDarkMode && (
          <div className="mt-8 space-x-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-black px-8 py-3 rounded-none font-mono tracking-wider uppercase border-2 border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
              VIEW_PROJECTS()
            </button>
            <button className="bg-transparent border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-none font-mono tracking-wider uppercase hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
              EXECUTE_CONTACT()
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;