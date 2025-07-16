// Estilos dinámicos para Header
export const getHeaderStyles = (isDarkMode, isScrolled) => {
  if (isDarkMode) {
    return {
      // MODO OSCURO - Responsive optimizado
      base: isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b-2 border-t-2 border-emerald-500 shadow-2xl shadow-emerald-500/40' 
        : 'bg-black/90 backdrop-blur-xl border-b-2 border-t-2 border-emerald-500 shadow-lg shadow-emerald-500/30',
      transition: 'transition-all duration-300 ease-in-out',
      logo: 'text-lg sm:text-xl md:text-2xl font-bold text-emerald-500 font-mono tracking-wider drop-shadow-lg hover:scale-105 transition-transform duration-200',
      logoGlow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
      navLink: 'text-emerald-500 font-mono text-xs sm:text-sm tracking-wider uppercase border-l-2 border-transparent hover:border-l-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 px-2 sm:px-4 py-1.5 transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(16,185,129,0.2)] cursor-pointer',
      mobileButton: 'p-2 bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-200 hover:scale-105',
      mobileMenu: 'bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40 rounded-lg overflow-hidden',
      mobileLinkHover: 'hover:bg-emerald-500/10 hover:border-l-emerald-500',
      borderColor: 'border-emerald-500/30'
    };
  } else {
    return {
      // MODO CLARO - Responsive optimizado
      base: isScrolled 
        ? 'bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-lg shadow-slate-200/30' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-md shadow-slate-200/20',
      transition: 'transition-all duration-300 ease-out',
      logo: 'text-lg sm:text-xl md:text-2xl font-light text-slate-800 tracking-wide hover:scale-105 hover:text-slate-900 transition-all duration-200',
      logoGlow: '',
      navLink: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/60 px-2 sm:px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer',
      mobileButton: 'p-2.5 bg-white/90 backdrop-blur-sm border border-slate-200/60 text-slate-600 hover:text-slate-800 hover:bg-white/95 hover:border-slate-300/80 rounded-xl shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 ease-out',
      mobileMenu: 'bg-white/98 backdrop-blur-xl border-2 border-slate-200 shadow-xl shadow-slate-200/50 rounded-lg overflow-hidden',
      mobileLinkHover: 'hover:bg-slate-100/60',
      borderColor: 'border-slate-200/60'
    };
  }
};