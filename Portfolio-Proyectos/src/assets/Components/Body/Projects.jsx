import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

const Projects = () => {
  const { isDarkMode } = useTheme();
  
  // Debug - remove this after testing
  console.log('Projects component - isDarkMode:', isDarkMode);
  console.log('Document classes:', document.documentElement.classList.toString());

  // Move projects inside component to ensure they update with theme changes
  const getProjects = () => [
    {
      id: 1,
      title: isDarkMode ? "POKEDEX.EXE" : "Pokedex",
      description: isDarkMode 
        ? "// Aplicación de una pokedex pokemon conectada a la PokeAPI, con búsqueda y filtrado de Pokémon, en Español e Inglés." 
        : "Aplicación de una pokedex pokemon conectada a la PokeAPI, con búsqueda y filtrado de Pokémon, en Español e Inglés.",
      shortDescription: isDarkMode
        ? "// Pokedex con PokeAPI, búsqueda y filtrado en ES/EN."
        : "Pokedex con PokeAPI, búsqueda y filtrado en ES/EN.",
      liveUrl: "https://pokedex-pokemon-app-alpha.vercel.app/",
      image: "/Pokedex.png",
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
      shortDescription: isDarkMode
        ? "// Visitas virtuales 360º con autocámara y puntos de interés."
        : "Visitas virtuales 360º con autocámara y puntos de interés.",
      liveUrl: "https://sergioriz-portfolio-visitas.web.app/",
      image: "/Tour-Virtual.png",
      technologies: [
        { name: isDarkMode ? "UNITY" : "Unity", color: "yellow" },
        { name: isDarkMode ? "C#" : "C#", color: "purple" },
        { name: isDarkMode ? "WEBGL" : "WebGL", color: "green" }
      ]
    },
  ];

  const projects = getProjects();

  // Estilos dinámicos mejorados para responsive
  const getStyles = () => {
    if (isDarkMode) {
      return {
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        container: 'max-w-8xl mx-auto w-full',
        titleContainer: 'w-full text-center mb-12 sm:mb-16',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] leading-tight',
        projectsGrid: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto',
        projectCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-none overflow-hidden hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer',
        imageContainer: 'h-48 sm:h-60 md:h-72 lg:h-80 relative overflow-hidden border-b-2 border-emerald-500',
        projectContent: 'p-4 sm:p-6 lg:p-8 flex flex-col h-full',
        projectTitle: 'text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-500 font-mono tracking-wider uppercase',
        projectDescription: 'text-emerald-400 font-mono text-sm sm:text-base tracking-wide mb-4 sm:mb-6 leading-relaxed flex-grow',
        techContainer: 'flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6',
        clickIndicator: 'flex items-center justify-center mt-auto pt-4 sm:pt-6',
        clickText: 'text-emerald-400 font-mono text-xs sm:text-sm tracking-wider uppercase'
      };
    } else {
      return {
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        container: 'max-w-8xl mx-auto w-full',
        titleContainer: 'w-full text-center mb-12 sm:mb-16',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide leading-tight',
        projectsGrid: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto',
        projectCard: 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer',
        imageContainer: 'h-48 sm:h-60 md:h-72 lg:h-80 relative overflow-hidden',
        projectContent: 'p-4 sm:p-6 lg:p-8 flex flex-col h-full',
        projectTitle: 'text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800',
        projectDescription: 'text-slate-600 font-medium text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-grow',
        techContainer: 'flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6',
        clickIndicator: 'flex items-center justify-center mt-auto pt-4 sm:pt-6',
        clickText: 'text-slate-500 font-medium text-xs sm:text-base'
      };
    }
  };

  const getTechColor = (color) => {
    if (isDarkMode) {
      const darkColors = {
        blue: "bg-blue-900/50 border border-blue-500 text-blue-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-500/20 px-2 sm:px-3 py-1 sm:py-1.5",
        green: "bg-green-900/50 border border-green-500 text-green-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-green-500/20 px-2 sm:px-3 py-1 sm:py-1.5",
        yellow: "bg-yellow-900/50 border border-yellow-500 text-yellow-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-yellow-500/20 px-2 sm:px-3 py-1 sm:py-1.5",
        purple: "bg-purple-900/50 border border-purple-500 text-purple-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20 px-2 sm:px-3 py-1 sm:py-1.5"
      };
      return darkColors[color] || darkColors.blue;
    } else {
      const lightColors = {
        blue: "bg-blue-100/90 backdrop-blur-sm border border-blue-300 text-blue-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
        green: "bg-green-100/90 backdrop-blur-sm border border-green-300 text-green-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
        yellow: "bg-yellow-100/90 backdrop-blur-sm border border-yellow-300 text-yellow-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
        purple: "bg-purple-100/90 backdrop-blur-sm border border-purple-300 text-purple-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
      };
      return lightColors[color] || lightColors.blue;
    }
  };

  const styles = getStyles();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            {isDarkMode ? (
              <>
                <span className="hidden sm:inline">&gt; PROJECTS.PORTFOLIO</span>
                <span className="sm:hidden">&gt; PROJECTS</span>
              </>
            ) : (
              'Proyectos'
            )}
          </h2>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => window.open(project.liveUrl, '_blank')}
              className={styles.projectCard}
            >
              {/* Imagen del proyecto - Responsive */}
              <div className={styles.imageContainer}>
                {project.image && (
                  <img 
                    src={project.image}
                    alt={`Preview de ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800 text-emerald-500' : 'bg-gray-100 text-slate-600'}">
                          <span class="text-lg sm:text-2xl font-mono text-center px-4">${isDarkMode ? '[IMAGE_NOT_FOUND]' : 'Imagen no disponible'}</span>
                        </div>
                      `;
                    }}
                  />
                )}
              </div>
              
              {/* Contenido del proyecto - Responsive */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                
                <p className={styles.projectDescription}>
                  <span className="hidden sm:inline">{project.description}</span>
                  <span className="sm:hidden">{project.shortDescription}</span>
                </p>
                
                {/* Tecnologías - Responsive */}
                <div className={styles.techContainer}>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={`${tech.name}-${techIndex}`}
                      className={getTechColor(tech.color)}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {/* Indicador de click - Responsive */}
                <div className={styles.clickIndicator}>
                  <div className={`flex items-center gap-2 ${styles.clickText}`}>
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    {isDarkMode ? (
                      <>
                        <span className="hidden sm:inline">CLICK_TO_VIEW</span>
                        <span className="sm:hidden">VER</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Haz clic para ver</span>
                        <span className="sm:hidden">Ver proyecto</span>
                      </>
                    )}
                  </div>
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