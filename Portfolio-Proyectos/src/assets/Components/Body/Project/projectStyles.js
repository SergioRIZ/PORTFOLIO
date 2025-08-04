// Estilos dinámicos para Projects
export const getProjectsStyles = (isDarkMode) => {
  if (isDarkMode) {
    return {
      section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900',
      container: 'max-w-8xl mx-auto w-full',
      titleContainer: 'w-full text-center mb-12 sm:mb-16',
      title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] leading-tight',
      projectsGrid: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto',
      projectCard: 'bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-none overflow-hidden hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer',
      imageContainer: 'h-48 sm:h-60 md:h-72 lg:h-80 relative overflow-hidden border-b-2 border-emerald-500',
      projectContent: 'p-4 sm:p-6 lg:p-8 flex flex-col', // QUITADO h-full
      projectTitle: 'text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-500 font-mono tracking-wider uppercase',
      projectDescription: 'text-emerald-400 font-mono text-sm sm:text-base tracking-wide mb-4 sm:mb-6 leading-relaxed', // QUITADO flex-grow
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
      projectContent: 'p-4 sm:p-6 lg:p-8 flex flex-col', // QUITADO h-full
      projectTitle: 'text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800',
      projectDescription: 'text-slate-600 font-medium text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed', // QUITADO flex-grow
      techContainer: 'flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6',
      clickIndicator: 'flex items-center justify-center mt-auto pt-4 sm:pt-6',
      clickText: 'text-slate-500 font-medium text-xs sm:text-base'
    };
  }
};