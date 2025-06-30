import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

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
      text: isDarkMode ? '[GITHUB]' : 'GitHub'
    },
    {
      icon: Linkedin, 
      href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      label: 'LinkedIn - Conectemos profesionalmente',
      text: isDarkMode ? '[LINKEDIN]' : 'LinkedIn'
    },
    {
      icon: Mail, 
      href: 'mailto:sroldan.dev@gmail.com?subject=Hola! Me interesa contactarte&body=Hola, me gustaría hablar contigo sobre...', 
      label: 'Email directo - Escríbeme',
      text: isDarkMode ? '[EMAIL]' : 'Email'
    },
    { 
      icon: Phone, 
      href: 'tel:+34123456789', 
      label: 'Llamada directa',
      text: isDarkMode ? '[PHONE]' : 'Teléfono'
    }
  ];

  // Estilos dinámicos usando el mismo patrón que el Header
  const getContactStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO
        background: withBackground 
          ? 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-none p-4 transition-all duration-300 ease-in-out'
          : '',
        link: 'text-emerald-500 font-mono text-sm tracking-wider uppercase border-l-2 border-transparent hover:border-l-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 px-4 py-2 transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(16,185,129,0.2)]',
        icon: 'transition-all duration-200 hover:scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]',
        label: 'text-xs font-mono tracking-wider uppercase text-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]'
      };
    } else {
      return {
        // MODO CLARO
        background: withBackground 
          ? 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 rounded-xl p-4 transition-all duration-300 ease-out'
          : '',
        link: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/60 px-3 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02]',
        icon: 'transition-all duration-200 hover:scale-105',
        label: 'text-xs font-medium text-slate-700 tracking-wide'
      };
    }
  };

  const styles = getContactStyles();

  return (
    <div className={styles.background}>
      <div className={`flex items-center ${showLabels ? 'space-x-2' : 'space-x-4'} ${className}`}>
        {contactLinks.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '_self' : '_blank'}
              rel={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '' : 'noopener noreferrer'}
              className={`flex items-center ${showLabels ? 'space-x-2' : ''} ${styles.link}`}
              aria-label={contact.label}
              title={contact.label}
            >
              <Icon size={size} className={styles.icon} />
              {showLabels && (
                <span className={styles.label}>{contact.text}</span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;