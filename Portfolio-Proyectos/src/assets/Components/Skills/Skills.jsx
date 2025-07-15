import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [animatedBars, setAnimatedBars] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  // Skills data organizadas por categorías lógicas con colores específicos
  // MOVER DENTRO DEL COMPONENTE para que se actualice con cambios de tema
  const getSkillsData = () => ({
    frontend: {
      title: isDarkMode ? 'FRONTEND.DEV' : 'Frontend',
      skills: [
        { name: 'React.js', level: 100, icon: '/react.svg', color: '#61DAFB' },
        { name: 'JavaScript', level: 100, icon: '/javascript.svg', color: '#F7DF1E' },
        { name: 'HTML5', level: 100, icon: '/html5.svg', color: '#E34F26' },
        { name: 'CSS3', level: 100, icon: '/css3.svg', color: '#1572B6' },
        { name: 'Tailwind CSS', level: 100, icon: '/tailwind.svg', color: '#06B6D4' },
        { name: 'Vite', level: 100, icon: '/vite.svg', color: '#646CFF' }
      ]
    },
    backend: {
      title: isDarkMode ? 'BACKEND.SYS' : 'Backend',
      skills: [
        { name: 'PHP', level: 100, icon: '/php.svg', color: '#777BB4' },
        { name: 'JAVA', level: 100, icon: '/java.svg', color: '#ED8B00' },
        { name: 'C#', level: 100, icon: '/csharp.svg', color: '#239120' },
        { name: 'MySQL', level: 100, icon: '/mysql.svg', color: '#4479A1' },
        { name: 'Firebase', level: 100, icon: '/firebase.svg', color: '#FFCA28' },
        { name: 'API', level: 100, icon: '/api.svg', color: '#FF6B6B' }
      ]
    },
    tools: {
      title: isDarkMode ? 'TOOLS.EXE' : 'Herramientas',
      skills: [
        { name: 'Git', level: 100, icon: '/git.svg', color: '#F05032' },
        { name: 'AWS', level: 100, icon: '/aws.svg', color: '#ED8B70' },
        { name: 'VS Code', level: 100, icon: '/vscode.svg', color: '#007ACC' },
        { name: 'Unity', level: 100, icon: '/unity.svg', color: '#000000' },
        { name: 'Jira', level: 100, icon: '/jira.svg', color: '#0052CC' },
        { name: 'Hostalia', level: 100, icon: '/hostalia.svg', color: '#8B5A3C' }
      ]
    }
  });

  const skillsData = getSkillsData();

  // Detectar cuando la sección está visible para animar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animar barras con delay escalonado
          Object.keys(skillsData).forEach((category, categoryIndex) => {
            skillsData[category].skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedBars(prev => ({
                  ...prev,
                  [`${category}-${skillIndex}`]: true
                }));
              }, (categoryIndex * 200) + (skillIndex * 80));
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [isVisible, skillsData]);

  // AÑADIR: Hook para forzar re-render cuando cambia el tema
  useEffect(() => {
    // Forzar repaint específico para Skills cuando cambia el tema
    const forceRepaint = () => {
      requestAnimationFrame(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
          // Técnica 1: Transform trick
          skillsSection.style.transform = 'translateZ(0)';
          skillsSection.offsetHeight;
          skillsSection.style.transform = '';
          
          // Técnica 2: Display trick
          skillsSection.style.display = 'none';
          skillsSection.offsetHeight;
          skillsSection.style.display = '';
          
          // Forzar repaint de las cards específicamente
          const skillCards = skillsSection.querySelectorAll('[class*="bg-black"], [class*="bg-white"], [class*="backdrop-blur"]');
          skillCards.forEach(card => {
            card.style.transform = 'translateZ(0)';
            card.offsetHeight;
            card.style.transform = '';
          });
          
          // Forzar repaint de todos los elementos hijos
          const allChildren = skillsSection.querySelectorAll('*');
          allChildren.forEach(child => {
            child.style.transform = 'translateZ(0)';
            child.offsetHeight;
            child.style.transform = '';
          });
        }
      });
    };

    // Delay pequeño para permitir que el DOM se actualice
    const timer = setTimeout(forceRepaint, 50);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  // Estilos dinámicos para responsive
  const getStyles = () => {
    if (isDarkMode) {
      return {
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        container: 'max-w-8xl mx-auto w-full',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] leading-tight',
        categoriesGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8',
        categoryCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 p-4 sm:p-6 rounded-none transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-[1.02]',
        categoryTitle: 'text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-emerald-500 font-mono tracking-wider uppercase text-center border-b-2 border-emerald-500/30 pb-2 sm:pb-3',
        skillsContainer: 'space-y-3 sm:space-y-4',
        skillItem: 'group',
        skillHeader: 'flex items-center justify-between mb-2',
        skillName: 'flex items-center gap-2 text-emerald-400 font-mono text-xs sm:text-sm tracking-wide',
        skillIcon: 'w-4 h-4 sm:w-5 sm:h-5 object-contain transition-all duration-200 group-hover:scale-110 filter drop-shadow-[0_0_4px_rgba(16,185,129,0.4)]',
        skillLevel: 'text-emerald-500 font-mono text-xs font-bold',
        progressContainer: 'relative h-1.5 sm:h-2 bg-gray-800 border border-emerald-500/30 rounded-none overflow-hidden',
        progressBar: 'h-full transition-all duration-1000 ease-out',
        progressGlow: 'absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 animate-pulse',
        statsContainer: 'mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6',
        statCard: 'text-center p-3 sm:p-4 rounded-lg bg-black/60 border border-emerald-500/30',
        statNumber: 'text-lg sm:text-xl font-bold text-emerald-500 font-mono',
        statLabel: 'text-xs sm:text-sm text-emerald-400 font-mono',
        terminalContainer: 'mt-8 sm:mt-12 text-center',
        terminalCard: 'inline-block bg-black/90 border-2 border-emerald-500 px-4 sm:px-6 py-2 sm:py-3 rounded-none shadow-lg shadow-emerald-500/40',
        terminalPrompt: 'text-emerald-400 font-mono text-xs sm:text-sm tracking-wider',
        terminalOutput: 'text-emerald-300 font-mono text-xs sm:text-sm mt-1'
      };
    } else {
      return {
        section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        container: 'max-w-8xl mx-auto w-full',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight',
        categoriesGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8',
        categoryCard: 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 p-4 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:scale-[1.02]',
        categoryTitle: 'text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-800 text-center border-b border-slate-200 pb-2 sm:pb-3',
        skillsContainer: 'space-y-3 sm:space-y-4',
        skillItem: 'group',
        skillHeader: 'flex items-center justify-between mb-2',
        skillName: 'flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-sm',
        skillIcon: 'w-4 h-4 sm:w-5 sm:h-5 object-contain transition-all duration-200 group-hover:scale-110',
        skillLevel: 'text-slate-600 font-semibold text-xs',
        progressContainer: 'relative h-1.5 sm:h-2 bg-slate-200 rounded-full overflow-hidden',
        progressBar: 'h-full transition-all duration-1000 ease-out rounded-full',
        progressGlow: '',
        statsContainer: 'mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6',
        statCard: 'text-center p-3 sm:p-4 rounded-lg bg-white/80 border border-slate-200',
        statNumber: 'text-lg sm:text-xl font-bold text-slate-800',
        statLabel: 'text-xs sm:text-sm text-slate-600',
        terminalContainer: '',
        terminalCard: '',
        terminalPrompt: '',
        terminalOutput: ''
      };
    }
  };

  const styles = getStyles();

  // Función para generar el estilo de la barra de progreso con colores específicos
  const getProgressBarStyle = (skill, isAnimated) => {
    const baseStyle = {
      width: isAnimated ? `${skill.level}%` : '0%',
      transition: 'all 1000ms ease-out'
    };

    if (isDarkMode) {
      return {
        ...baseStyle,
        background: `linear-gradient(90deg, ${skill.color}E6, ${skill.color})`,
        boxShadow: `0 0 10px ${skill.color}80`
      };
    } else {
      return {
        ...baseStyle,
        background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`
      };
    }
  };

  // Obtener color de categoría para mejor organización visual
  const getCategoryGradient = (categoryKey) => {
    if (!isDarkMode) return '';
    
    const gradients = {
      frontend: 'from-emerald-500/20 to-emerald-600/20',
      backend: 'from-blue-500/20 to-blue-600/20',
      tools: 'from-purple-500/20 to-purple-600/20'
    };
    return gradients[categoryKey] || gradients.frontend;
  };

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {isDarkMode ? (
            <>
              <span className="hidden sm:inline">&gt; SKILLS.PORTFOLIO</span>
              <span className="sm:hidden">&gt; SKILLS</span>
            </>
          ) : (
            'Habilidades'
          )}
        </h2>

        <div className={styles.categoriesGrid}>
          {Object.entries(skillsData).map(([categoryKey, category]) => (
            <div 
              key={categoryKey} 
              className={`${styles.categoryCard} ${isDarkMode ? `bg-gradient-to-br ${getCategoryGradient(categoryKey)}` : ''}`}
            >
              <h3 className={styles.categoryTitle}>
                {category.title}
              </h3>

              <div className={styles.skillsContainer}>
                {category.skills.map((skill, index) => {
                  const isAnimated = animatedBars[`${categoryKey}-${index}`];
                  
                  return (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillHeader}>
                        <div className={styles.skillName}>
                          <img 
                            src={skill.icon} 
                            alt={`${skill.name} icon`}
                            className={styles.skillIcon}
                            onError={(e) => {
                              // Fallback si la imagen no carga
                              e.target.style.display = 'none';
                              e.target.parentElement.insertAdjacentHTML('afterbegin', 
                                `<div class="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${isDarkMode ? 'from-emerald-500 to-emerald-600' : 'from-blue-500 to-purple-500'} rounded-full flex items-center justify-center text-white text-xs font-bold">${skill.name.charAt(0)}</div>`
                              );
                            }}
                          />
                          <span className="truncate">{skill.name}</span>
                        </div>
                      </div>

                      <div className={styles.progressContainer}>
                        <div 
                          className={styles.progressBar}
                          style={getProgressBarStyle(skill, isAnimated)}
                        />
                        {isDarkMode && (
                          <div 
                            className="absolute inset-0 animate-pulse opacity-30"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}40, ${skill.color}20)`
                            }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas y terminal footer */}
        <div className={styles.statsContainer}>
          {Object.entries(skillsData).map(([categoryKey, category]) => (
            <div key={categoryKey} className={styles.statCard}>
              <div className={styles.statNumber}>
                {category.skills.length}
              </div>
              <div className={styles.statLabel}>
                {isDarkMode ? category.title.toUpperCase() : category.title}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal footer solo en modo oscuro */}
        {isDarkMode && (
          <div className={styles.terminalContainer}>
            <div className={styles.terminalCard}>
              <p className={styles.terminalPrompt}>
                <span className="text-emerald-500">sergio@portfolio:~$</span> cat skills.json | grep "level" | wc -l
              </p>
              <p className={styles.terminalOutput}>
                &gt; {Object.values(skillsData).reduce((total, category) => total + category.skills.length, 0)} skills loaded successfully
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;