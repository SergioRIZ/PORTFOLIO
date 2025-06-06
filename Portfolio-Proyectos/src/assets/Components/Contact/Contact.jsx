import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

const Contact = ({ className = "", showLabels = false, size = 18, withBackground = false }) => {
  const { isDarkMode, getThemeClasses } = useTheme();
console.log('Current theme:', isDarkMode ? 'dark' : 'light');
  const contactLinks = [
    {
      icon: Github, 
      href: 'https://github.com/tuusuario', 
      label: 'GitHub - Mi código y proyectos',
      text: 'GitHub'
    },
    {
      icon: Linkedin, 
      href: 'https://linkedin.com/in/tuusuario',
      label: 'LinkedIn - Conectemos profesionalmente',
      text: 'LinkedIn'
    },
    {
      icon: Mail, 
      href: 'mailto:sergio_1999_cs@hotmail.com?subject=Hola! Me interesa contactarte&body=Hola, me gustaría hablar contigo sobre...', 
      label: 'Email directo - Escríbeme',
      text: 'Email'
    },
    { 
      icon: Phone, 
      href: 'tel:+34123456789', 
      label: 'Llamada directa',
      text: 'Teléfono'
    }
  ];

  // Estilos de fondo usando el hook
  const backgroundClasses = withBackground 
    ? getThemeClasses(
        'rounded-xl p-4 transition-all duration-300',
        'bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-md shadow-slate-200/20',
        'bg-black/90 backdrop-blur-xl border border-emerald-500/30 shadow-lg shadow-emerald-500/20'
      )
    : '';

  // Estilos de enlaces usando el hook
  const linkClasses = getThemeClasses(
    'transition-all transform',
    'text-slate-500 hover:text-slate-700 hover:scale-110 duration-200 hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
    'text-emerald-500 hover:text-emerald-400 hover:scale-125 hover:rotate-12 duration-300 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]'
  );

  return (
    <div className={backgroundClasses}>
      <div className={`flex items-center space-x-4 ${className}`}>
        {contactLinks.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '_self' : '_blank'}
              rel={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '' : 'noopener noreferrer'}
              className={`flex items-center space-x-1 ${linkClasses}`}
              aria-label={contact.label}
              title={contact.label}
            >
              <Icon size={size} />
              {showLabels && (
                <span className="text-xs font-medium">{contact.text}</span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;