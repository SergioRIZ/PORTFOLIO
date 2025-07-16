// Estilos dinámicos para ContactForm
export const getContactFormStyles = (isDarkMode) => {
  if (isDarkMode) {
    return {
      section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900',
      container: 'max-w-6xl mx-auto text-center w-full',
      title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] leading-tight',
      contactContainer: 'flex justify-center mb-6 sm:mb-8',
      formContainer: 'p-4 sm:p-6 lg:p-8 rounded-xl max-w-4xl mx-auto bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40',
      successAlert: 'mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-emerald-900/50 backdrop-blur-sm border-2 border-emerald-500 shadow-lg shadow-emerald-500/20',
      successText: 'font-medium text-emerald-400 font-mono tracking-wide text-sm sm:text-base',
      errorAlert: 'mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-red-900/50 backdrop-blur-sm border-2 border-red-500 shadow-lg shadow-red-500/20',
      errorText: 'font-medium text-red-400 font-mono tracking-wide text-sm sm:text-base',
      form: 'space-y-4 sm:space-y-6',
      gridContainer: 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
      inputContainer: 'space-y-1 sm:space-y-2',
      input: 'w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-black/90 backdrop-blur-sm text-emerald-400 font-mono placeholder-emerald-600 text-sm sm:text-base',
      inputNormal: 'border-emerald-500/50 focus:ring-emerald-500 hover:border-emerald-500',
      inputError: 'border-red-500 focus:ring-red-500 shadow-lg shadow-red-500/20',
      textarea: 'resize-vertical min-h-[100px] sm:min-h-[120px]',
      fieldError: 'text-xs sm:text-sm mt-1 font-medium text-red-400 font-mono',
      characterCount: 'text-xs sm:text-sm ml-auto text-emerald-500 font-mono',
      characterCountContainer: 'flex justify-between items-center mt-1 sm:mt-2',
      button: 'w-full font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-mono tracking-wider uppercase cursor-pointer text-sm sm:text-base',
      buttonEnabled: 'bg-emerald-600 hover:bg-emerald-700 text-black hover:shadow-emerald-500/40 border-2 border-emerald-500 hover:scale-[1.02]',
      buttonDisabled: 'cursor-not-allowed bg-gray-700 text-gray-400 border-2 border-gray-600',
      spinner: 'animate-spin h-4 w-4 border-2 border-t-transparent rounded-full border-emerald-500'
    };
  } else {
    return {
      section: 'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100',
      container: 'max-w-6xl mx-auto text-center w-full',
      title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-slate-800 font-light tracking-wide bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight',
      contactContainer: 'flex justify-center mb-6 sm:mb-8',
      formContainer: 'p-4 sm:p-6 lg:p-8 rounded-xl max-w-4xl mx-auto bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30',
      successAlert: 'mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-green-100/90 backdrop-blur-sm border border-green-300 shadow-md shadow-green-200/30',
      successText: 'font-medium text-green-800 text-sm sm:text-base',
      errorAlert: 'mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-red-100/90 backdrop-blur-sm border border-red-300 shadow-md shadow-red-200/30',
      errorText: 'font-medium text-red-800 text-sm sm:text-base',
      form: 'space-y-4 sm:space-y-6',
      gridContainer: 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
      inputContainer: 'space-y-1 sm:space-y-2',
      input: 'w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-white/95 backdrop-blur-sm text-slate-800 placeholder-slate-500 text-sm sm:text-base',
      inputNormal: 'border-slate-300 focus:ring-slate-400 hover:border-slate-400 hover:shadow-md',
      inputError: 'border-red-500 focus:ring-red-500 shadow-sm',
      textarea: 'resize-vertical min-h-[100px] sm:min-h-[120px]',
      fieldError: 'text-xs sm:text-sm mt-1 font-medium text-red-600',
      characterCount: 'text-xs sm:text-sm ml-auto text-slate-500',
      characterCountContainer: 'flex justify-between items-center mt-1 sm:mt-2',
      button: 'w-full font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium cursor-pointer text-sm sm:text-base',
      buttonEnabled: 'text-white hover:shadow-lg hover:scale-[1.02] bg-slate-600 hover:bg-slate-700 hover:shadow-slate-200/50',
      buttonDisabled: 'cursor-not-allowed bg-gray-400 text-gray-200',
      spinner: 'animate-spin h-4 w-4 border-2 border-t-transparent rounded-full border-white'
    };
  }
};

// Función para obtener clases de input dinámicamente
export const getInputClasses = (styles, fieldErrors, fieldName) => {
  const hasError = fieldErrors[fieldName];
  
  let classes = styles.input + ' ';
  
  if (hasError) {
    classes += styles.inputError;
  } else {
    classes += styles.inputNormal;
  }
  
  return classes;
};