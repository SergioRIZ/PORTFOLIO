// Datos de navegación
export const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' }
];

// Textos para modo oscuro
export const darkModeTexts = {
  'Inicio': '[INICIO]',
  'Sobre mí': '[ABOUT]',
  'Habilidades': '[SKILLS]',
  'Proyectos': '[PROJECTS]',
  'Contacto': '[CONTACT]'
};

// Función para obtener el texto del logo
export const getLogoText = (isDarkMode) => {
  return {
    desktop: isDarkMode ? '> SERGIORIZ.EXE' : 'Portfolio',
    mobile: isDarkMode ? '> SR.EXE' : 'Portfolio'
  };
};

// Función para obtener el título del logo
export const getLogoTitle = (isDarkMode) => {
  return isDarkMode ? 'SERGIORIZ.EXE' : 'Portfolio';
};