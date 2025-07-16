// Estilos dinámicos para Skills
export const getSkillsStyles = (isDarkMode) => {
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

// Función para generar el estilo de la barra de progreso con colores específicos
export const getProgressBarStyle = (skill, isAnimated, isDarkMode) => {
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