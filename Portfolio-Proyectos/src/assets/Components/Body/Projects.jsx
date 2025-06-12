import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

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
      title: isDarkMode ? "POKEDEX.EXE" : "Pokedex",
      description: isDarkMode 
        ? "// Aplicación de una pokedex pokemon conectada a la PokeAPI, con búsqueda y filtrado de Pokémon, en Español e Inglés." 
        : " Aplicación de una pokedex pokemon conectada a la PokeAPI, con búsqueda y filtrado de Pokémon, en Español e Inglés.",
      gradient: isDarkMode ? "from-emerald-400 to-cyan-400" : "from-blue-400 to-purple-600",
      liveUrl: "https://pokedex-pokemon-app-alpha.vercel.app/",
      // AGREGA AQUÍ LA RUTA DE TU IMAGEN DE LA POKEDEX
      image: "/Pokedex.png", // Cambia por tu imagen
      technologies: [
        { name: isDarkMode ? "REACT.JS" : "React", color: "blue" },
        { name: isDarkMode ? "VITE" : "Vite", color: "purple" },
        { name: isDarkMode ? "TAILWINDCSS" : "TailwindCSS", color: "green" }
      ]
    },
    {
      id: 2,
      title: isDarkMode ? "VISITAS_VIRTUALES.EXE" : "Visitas_Virtuales",
      description: isDarkMode 
        ? "// Aplicación de visitas virtuales 360º, con un recorrido sobre un centro educativo, con autocamara y puntos de intereses." 
        : "Aplicación de visitas virtuales 360º, con un recorrido sobre un centro educativo, con autocamara y puntos de intereses.",
      gradient: isDarkMode ? "from-cyan-400 to-emerald-400" : "from-green-400 to-blue-600",
      liveUrl: "https://sergioriz-portfolio-visitas.web.app/",
      // AGREGA AQUÍ LA RUTA DE TU IMAGEN DE VISITAS VIRTUALES
      image: "/Tour-Virtual.png", // Cambia por tu imagen
      technologies: [
        { name: isDarkMode ? "UNITY" : "Unity", color: "yellow" },
        { name: isDarkMode ? "C#" : "C#", color: "purple" },
        { name: isDarkMode ? "WEBGL" : "WebGL", color: "green" }
      ]
    },
  ];

  // Estilos dinámicos usando el mismo patrón que el Header
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        projectCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-none overflow-hidden hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-[1.02]',
        projectTitle: 'text-2xl font-semibold mb-3 text-emerald-500 font-mono tracking-wider uppercase',
        projectDescription: 'text-emerald-400 font-mono text-base tracking-wide mb-6 leading-relaxed',
        techContainer: 'flex flex-wrap gap-3 mb-6'
      };
    } else {
      return {
        // MODO CLARO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 font-light tracking-wide',
        projectCard: 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:scale-[1.02]',
        projectTitle: 'text-2xl font-semibold mb-3 text-slate-800',
        projectDescription: 'text-slate-600 font-medium text-base mb-6 leading-relaxed',
        techContainer: 'flex flex-wrap gap-3 mb-6'
      };
    }
  };

  const getTechColor = (color) => {
    if (isDarkMode) {
      const darkColors = {
        blue: "bg-blue-900/50 border border-blue-500 text-blue-400 font-mono text-sm tracking-wider uppercase shadow-lg shadow-blue-500/20",
        green: "bg-green-900/50 border border-green-500 text-green-400 font-mono text-sm tracking-wider uppercase shadow-lg shadow-green-500/20",
        yellow: "bg-yellow-900/50 border border-yellow-500 text-yellow-400 font-mono text-sm tracking-wider uppercase shadow-lg shadow-yellow-500/20",
        purple: "bg-purple-900/50 border border-purple-500 text-purple-400 font-mono text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20",
        red: "bg-red-900/50 border border-red-500 text-red-400 font-mono text-sm tracking-wider uppercase shadow-lg shadow-red-500/20",
        indigo: "bg-indigo-900/50 border border-indigo-500 text-indigo-400 font-mono text-sm tracking-wider uppercase shadow-lg shadow-indigo-500/20"
      };
      return darkColors[color] || darkColors.blue;
    } else {
      const lightColors = {
        blue: "bg-blue-100/90 backdrop-blur-sm border border-blue-300 text-blue-800 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200",
        green: "bg-green-100/90 backdrop-blur-sm border border-green-300 text-green-800 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200",
        yellow: "bg-yellow-100/90 backdrop-blur-sm border border-yellow-300 text-yellow-800 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200",
        purple: "bg-purple-100/90 backdrop-blur-sm border border-purple-300 text-purple-800 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200",
        red: "bg-red-100/90 backdrop-blur-sm border border-red-300 text-red-800 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200",
        indigo: "bg-indigo-100/90 backdrop-blur-sm border border-indigo-300 text-indigo-800 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200"
      };
      return lightColors[color] || lightColors.blue;
    }
  };

  const styles = getStyles();

  return (
    <section id="projects" className={styles.section}>
      <div className="max-w-8xl mx-auto">
        <h2 className={styles.title}>
          {isDarkMode ? '> PROJECTS.PORTFOLIO' : 'PROYECTOS'}
        </h2>
        <div className="flex justify-center items-stretch gap-8 flex-wrap">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectCard} cursor-pointer block w-full max-w-4xl flex-1`}
            >
              <div className={`h-80 relative overflow-hidden ${
                isDarkMode 
                  ? 'border-b-2 border-emerald-500' 
                  : ''
              }`}>
                <img 
                  src={project.image}
                  alt={`Preview de ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col h-full">
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
                      className={`px-4 py-2 rounded-full ${getTechColor(tech.color)}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {/* Indicador visual de que es clickeable */}
                <div className="flex items-center justify-center mt-auto pt-6">
                  <div className={`flex items-center gap-2 ${
                    isDarkMode 
                      ? 'text-emerald-400 font-mono text-sm tracking-wider uppercase' 
                      : 'text-slate-500 font-medium text-base'
                  }`}>
                    <ExternalLink size={18} />
                    {isDarkMode ? "CLICK_TO_VIEW" : "Haz clic para ver"}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;