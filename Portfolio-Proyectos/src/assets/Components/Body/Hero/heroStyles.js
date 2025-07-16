// Estilos dinámicos para Hero
export const getHeroStyles = (isDarkMode) => {
  if (isDarkMode) {
    return {
      // MODO OSCURO - Responsive optimizado
      section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900',
      container: 'max-w-6xl mx-auto text-center w-full',
      title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse leading-tight',
      subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-400 font-mono tracking-wide mb-6 sm:mb-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] leading-relaxed',
      terminalPrompt: 'text-emerald-500 font-mono text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 tracking-wider',
      commandLine: 'bg-black/90 border-2 border-emerald-500 rounded-none p-3 sm:p-4 lg:p-6 font-mono text-emerald-400 shadow-2xl shadow-emerald-500/40 backdrop-blur-xl mx-auto max-w-4xl min-h-[200px] sm:min-h-[250px]',
      commandText: 'text-emerald-400 whitespace-pre-line leading-relaxed min-h-[150px] sm:min-h-[180px]',
      cursor: 'text-emerald-500 animate-pulse',
      buttonContainer: 'mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center',
      primaryButton: 'w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-black px-6 sm:px-8 py-3 rounded-none font-mono tracking-wider uppercase border-2 border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base cursor-pointer',
      secondaryButton: 'w-full sm:w-auto bg-transparent border-2 border-emerald-500 text-emerald-500 px-6 sm:px-8 py-3 rounded-none font-mono tracking-wider uppercase hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base cursor-pointer'
    };
  } else {
    return {
      // MODO CLARO - Responsive optimizado
      section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100',
      container: 'max-w-6xl mx-auto text-center w-full',
      title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light tracking-wide leading-tight',
      subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-medium mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto',
      terminalPrompt: '',
      commandLine: '',
      commandText: '',
      cursor: '',
      buttonContainer: '',
      primaryButton: '',
      secondaryButton: ''
    };
  }
};