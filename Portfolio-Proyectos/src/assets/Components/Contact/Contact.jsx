import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ className = "", showLabels = false, size = 18, withBackground = false }) => {
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

  const contactLinks = [
    {
      icon: Github, 
      href: 'https://github.com/SergioRIZ?tab=repositories', 
      label: 'GitHub - Mi código y proyectos',
      text: isDarkMode ? '[GITHUB]' : 'GitHub',
      shortText: isDarkMode ? '[GH]' : 'GitHub'
    },
    {
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/sergiori/',
      label: 'LinkedIn - Conectemos profesionalmente',
      text: isDarkMode ? '[LINKEDIN]' : 'LinkedIn',
      shortText: isDarkMode ? '[LI]' : 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&to=sroldan.dev@gmail.com&su=Hola! Me interesa contactarte&body=Hola, me gustaría hablar contigo sobre...',
      label: 'Email directo - Escríbeme',
      text: isDarkMode ? '[EMAIL]' : 'Email',
      shortText: isDarkMode ? '[EM]' : 'Email'
    },
  ];

  // Estilos dinámicos mejorados para responsive
  const getContactStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO - Responsive optimizado
        background: withBackground 
          ? 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-none p-3 sm:p-4 lg:p-6 transition-all duration-300 ease-in-out'
          : '',
        container: `flex items-center ${showLabels ? 'flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6' : 'gap-3 sm:gap-4 lg:gap-6'} ${className}`,
        link: 'text-emerald-500 font-mono text-xs sm:text-sm lg:text-base tracking-wider uppercase border-l-2 border-transparent hover:border-l-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 px-2 sm:px-3 lg:px-4 py-2 transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(16,185,129,0.2)] rounded-none min-w-0',
        linkNoLabels: 'text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 p-2 sm:p-2.5 lg:p-3 transition-all duration-200 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] rounded-none',
        icon: 'transition-all duration-200 hover:scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] flex-shrink-0',
        label: 'text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase text-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)] truncate'
      };
    } else {
      return {
        // MODO CLARO - Responsive optimizado
        background: withBackground 
          ? 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 rounded-xl p-3 sm:p-4 lg:p-6 transition-all duration-300 ease-out'
          : '',
        container: `flex items-center ${showLabels ? 'flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6' : 'gap-3 sm:gap-4 lg:gap-6'} ${className}`,
        link: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/60 px-2 sm:px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] text-xs sm:text-sm lg:text-base min-w-0',
        linkNoLabels: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/60 p-2 sm:p-2.5 lg:p-3 rounded-xl transition-all duration-200 hover:scale-[1.02]',
        icon: 'transition-all duration-200 hover:scale-105 flex-shrink-0',
        label: 'text-xs sm:text-sm lg:text-base font-medium text-slate-700 tracking-wide truncate'
      };
    }
  };

  const styles = getContactStyles();

  // Responsive icon size calculation
  const getResponsiveIconSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return Math.max(16, size - 2); // Mobile: slightly smaller
      if (window.innerWidth < 1024) return size; // Tablet: normal size
      return Math.min(28, size + 4); // Desktop: slightly larger
    }
    return size;
  };

  const [iconSize, setIconSize] = useState(size);

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(getResponsiveIconSize());
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);
    return () => window.removeEventListener('resize', updateIconSize);
  }, [size]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {contactLinks.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={contact.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className={`flex items-center ${showLabels ? 'gap-2 sm:gap-3' : ''} ${
                showLabels ? styles.link : styles.linkNoLabels
              }`}
              aria-label={contact.label}
              title={contact.label}
            >
              <Icon size={iconSize} className={styles.icon} />
              {showLabels && (
                <span className={styles.label}>
                  {/* Show short text on mobile, full text on larger screens */}
                  <span className="inline sm:hidden">{contact.shortText}</span>
                  <span className="hidden sm:inline">{contact.text}</span>
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;