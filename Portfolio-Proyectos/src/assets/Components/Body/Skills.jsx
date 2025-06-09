import React, { useState, useEffect } from 'react';

const Skills = () => {
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

  const frontendSkills = [
    { 
      name: isDarkMode ? "REACT.JS" : "React", 
      level: 90, 
      color: isDarkMode ? "bg-gradient-to-r from-blue-500 to-blue-400" : "bg-blue-600",
      darkColor: "shadow-blue-500/40 border-blue-500",
      experience: "2+ años"
    },
    { 
      name: isDarkMode ? "JAVASCRIPT_ES6+" : "JavaScript", 
      level: 85, 
      color: isDarkMode ? "bg-gradient-to-r from-yellow-500 to-yellow-400" : "bg-yellow-500",
      darkColor: "shadow-yellow-500/40 border-yellow-500",
      experience: "3+ años"
    },
    { 
      name: isDarkMode ? "CSS3_TAILWIND" : "CSS/Tailwind", 
      level: 88, 
      color: isDarkMode ? "bg-gradient-to-r from-green-500 to-green-400" : "bg-green-500",
      darkColor: "shadow-green-500/40 border-green-500",
      experience: "3+ años"
    }
  ];

  const toolsSkills = [
    { 
      name: isDarkMode ? "GIT_VERSION_CONTROL" : "Git", 
      level: 80, 
      color: isDarkMode ? "bg-gradient-to-r from-purple-500 to-purple-400" : "bg-purple-600",
      darkColor: "shadow-purple-500/40 border-purple-500",
      experience: "2+ años"
    },
    { 
      name: isDarkMode ? "FIGMA_DESIGN" : "Figma", 
      level: 75, 
      color: isDarkMode ? "bg-gradient-to-r from-pink-500 to-pink-400" : "bg-pink-500",
      darkColor: "shadow-pink-500/40 border-pink-500",
      experience: "1+ año"
    },
    { 
      name: isDarkMode ? "VSCODE_EDITOR" : "VS Code", 
      level: 95, 
      color: isDarkMode ? "bg-gradient-to-r from-blue-500 to-cyan-400" : "bg-blue-500",
      darkColor: "shadow-cyan-500/40 border-cyan-500",
      experience: "3+ años"
    }
  ];

  // Estilos dinámicos usando el mismo patrón que el Header
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        skillCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 p-6 rounded-none',
        skillTitle: 'text-2xl font-semibold mb-6 text-emerald-500 font-mono tracking-wider uppercase',
        skillName: 'text-emerald-400 font-mono text-sm tracking-wider uppercase',
        skillLevel: 'text-emerald-300 font-mono text-sm',
        skillBarBg: 'w-full bg-gray-800 border border-emerald-500/50 rounded-none h-3 shadow-inner',
        skillExperience: 'text-emerald-500 font-mono text-xs tracking-wider'
      };
    } else {
      return {
        // MODO CLARO
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 font-light tracking-wide',
        skillCard: 'bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30 p-6 rounded-xl',
        skillTitle: 'text-2xl font-semibold mb-6 text-slate-800',
        skillName: 'text-slate-700 font-medium',
        skillLevel: 'text-slate-600',
        skillBarBg: 'w-full bg-slate-200 rounded-full h-3 shadow-inner',
        skillExperience: 'text-slate-500 text-xs'
      };
    }
  };

  const SkillBar = ({ skill }) => {
    const styles = getStyles();
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={styles.skillName}>{skill.name}</span>
          <div className="flex items-center space-x-2">
            <span className={styles.skillLevel}>
              {isDarkMode ? `[${skill.level}%]` : `${skill.level}%`}
            </span>
            <span className={styles.skillExperience}>
              {isDarkMode ? `// ${skill.experience}` : skill.experience}
            </span>
          </div>
        </div>
        <div className={styles.skillBarBg}>
          <div 
            className={`${skill.color} h-3 ${isDarkMode ? 'rounded-none shadow-lg border-r-2 ' + skill.darkColor : 'rounded-full'} transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{width: `${skill.level}%`}}
          >
            {isDarkMode && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            )}
          </div>
        </div>
        
        {isDarkMode && (
          <div className="text-emerald-600 font-mono text-xs tracking-wider">
            {`${'█'.repeat(Math.floor(skill.level / 10))}${'░'.repeat(10 - Math.floor(skill.level / 10))} ${skill.level}/100`}
          </div>
        )}
      </div>
    );
  };

  const styles = getStyles();

  return (
    <section id="skills" className={styles.section}>
      <div className="max-w-4xl mx-auto">
        <h2 className={styles.title}>
          {isDarkMode ? '> SKILLS.DATABASE' : 'Habilidades'}
        </h2>
        
        {isDarkMode && (
          <div className="text-center mb-8">
            <div className="text-emerald-400 font-mono text-sm tracking-wider">
              // Cargando módulos de habilidades...
            </div>
            <div className="text-emerald-500 font-mono text-xs mt-2">
              STATUS: OPERATIONAL | LEVEL: SENIOR | EXP: GROWING++
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>
              {isDarkMode ? '> FRONTEND.MODULES' : 'Frontend'}
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>
              {isDarkMode ? '> TOOLS.ARSENAL' : 'Herramientas'}
            </h3>
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {isDarkMode && (
          <div className="mt-12 text-center">
            <div className="bg-black/95 border-2 border-emerald-500 p-4 rounded-none font-mono text-emerald-400 text-sm shadow-2xl shadow-emerald-500/40">
              <div className="text-emerald-500 mb-2">sergio@portfolio:~$ cat learning_queue.txt</div>
              <div className="text-left space-y-1">
                <div>→ TypeScript.advanced</div>
                <div>→ Next.js.framework</div>
                <div>→ Node.js.backend</div>
                <div>→ MongoDB.database</div>
                <div className="text-emerald-500 mt-2">// Siempre aprendiendo nuevas tecnologías...</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;