import React, { useState, useEffect } from 'react';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: isDarkMode ? "PROJECT_01.EXE" : "E-Commerce App",
      description: isDarkMode 
        ? "// React + Redux tienda online con carrito y checkout completo" 
        : "Aplicación de comercio electrónico con carrito de compras, sistema de pagos y gestión de inventario.",
      gradient: isDarkMode ? "from-emerald-400 to-cyan-400" : "from-blue-400 to-purple-600",
      technologies: [
        { name: isDarkMode ? "REACT.JS" : "React", color: "blue" },
        { name: isDarkMode ? "REDUX.JS" : "Redux", color: "purple" },
        { name: isDarkMode ? "CSS3.0" : "CSS", color: "green" }
      ]
    },
    {
      id: 2,
      title: isDarkMode ? "PROJECT_02.EXE" : "Weather Dashboard",
      description: isDarkMode 
        ? "// Dashboard meteorológico con API integration y geolocalización" 
        : "Dashboard del clima con integración de APIs, geolocalización y pronósticos detallados.",
      gradient: isDarkMode ? "from-cyan-400 to-emerald-400" : "from-green-400 to-blue-600",
      technologies: [
        { name: isDarkMode ? "JAVASCRIPT" : "JavaScript", color: "yellow" },
        { name: isDarkMode ? "REST_API" : "API", color: "purple" },
        { name: isDarkMode ? "GEOLOCATION" : "Maps", color: "green" }
      ]
    },
    {
      id: 3,
      title: isDarkMode ? "PROJECT_03.EXE" : "Portfolio Website",
      description: isDarkMode 
        ? "// Portfolio responsivo con dark/light theme y animaciones" 
        : "Sitio web portfolio responsivo con sistema de temas, animaciones y formulario de contacto.",
      gradient: isDarkMode ? "from-emerald-400 to-teal-400" : "from-pink-400 to-red-600",
      technologies: [
        { name: isDarkMode ? "HTML5.0" : "HTML", color: "red" },
        { name: isDarkMode ? "TAILWIND" : "Tailwind", color: "indigo" },
        { name: isDarkMode ? "REACT.JS" : "React", color: "blue" }
      ]
    }
  ];

  // Estilos dinámicos usando el mismo patrón que el Header
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        projectCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-none overflow-hidden hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-[1.02]',
        projectTitle: 'text-xl font-semibold mb-2 text-emerald-500 font-mono tracking-wider uppercase',
        projectDescription: 'text-emerald-400 font-mono text-sm tracking-wide mb-4 leading-relaxed',
        techContainer: 'flex flex-wrap gap-2'
      };
    } else {
      return {
        // MODO CLARO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 font-light tracking-wide',
        projectCard: 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:scale-[1.02]',
        projectTitle: 'text-xl font-semibold mb-2 text-slate-800',
        projectDescription: 'text-slate-600 font-medium mb-4 leading-relaxed',
        techContainer: 'flex flex-wrap gap-2'
      };
    }
  };

  const getTechColor = (color) => {
    if (isDarkMode) {
      const darkColors = {
        blue: "bg-blue-900/50 border border-blue-500 text-blue-400 font-mono text-xs tracking-wider uppercase shadow-lg shadow-blue-500/20",
        green: "bg-green-900/50 border border-green-500 text-green-400 font-mono text-xs tracking-wider uppercase shadow-lg shadow-green-500/20",
        yellow: "bg-yellow-900/50 border border-yellow-500 text-yellow-400 font-mono text-xs tracking-wider uppercase shadow-lg shadow-yellow-500/20",
        purple: "bg-purple-900/50 border border-purple-500 text-purple-400 font-mono text-xs tracking-wider uppercase shadow-lg shadow-purple-500/20",
        red: "bg-red-900/50 border border-red-500 text-red-400 font-mono text-xs tracking-wider uppercase shadow-lg shadow-red-500/20",
        indigo: "bg-indigo-900/50 border border-indigo-500 text-indigo-400 font-mono text-xs tracking-wider uppercase shadow-lg shadow-indigo-500/20"
      };
      return darkColors[color] || darkColors.blue;
    } else {
      const lightColors = {
        blue: "bg-blue-100/90 backdrop-blur-sm border border-blue-300 text-blue-800 font-medium shadow-sm hover:shadow-md transition-all duration-200",
        green: "bg-green-100/90 backdrop-blur-sm border border-green-300 text-green-800 font-medium shadow-sm hover:shadow-md transition-all duration-200",
        yellow: "bg-yellow-100/90 backdrop-blur-sm border border-yellow-300 text-yellow-800 font-medium shadow-sm hover:shadow-md transition-all duration-200",
        purple: "bg-purple-100/90 backdrop-blur-sm border border-purple-300 text-purple-800 font-medium shadow-sm hover:shadow-md transition-all duration-200",
        red: "bg-red-100/90 backdrop-blur-sm border border-red-300 text-red-800 font-medium shadow-sm hover:shadow-md transition-all duration-200",
        indigo: "bg-indigo-100/90 backdrop-blur-sm border border-indigo-300 text-indigo-800 font-medium shadow-sm hover:shadow-md transition-all duration-200"
      };
      return lightColors[color] || lightColors.blue;
    }
  };

  const styles = getStyles();

  return (
    <section id="projects" className={styles.section}>
      <div className="max-w-6xl mx-auto">
        <h2 className={styles.title}>
          {isDarkMode ? '> PROJECTS.PORTFOLIO' : 'Proyectos'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={styles.projectCard}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} ${
                isDarkMode 
                  ? 'border-b-2 border-emerald-500 shadow-inner' 
                  : 'shadow-inner'
              }`}>
                {isDarkMode && (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-black/80 font-mono font-bold text-2xl tracking-wider">
                      {`<${project.id.toString().padStart(2, '0')}/>`}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.techContainer}>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech.color)}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;