// Datos de proyectos organizados
export const getProjectsData = (isDarkMode) => [
  {
    id: 1,
    title: isDarkMode ? "POKEDEX.EXE" : "Pokedex",
    description: isDarkMode 
      ? "// Pokedex pokemon app linked with an API, with features such as search and filtering of Pokemon, with traduction in English and Spanish." 
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
      ? "// 360º virtual tour app doing a tour of an educational center as an example, with auto-camera, interest points and more features." 
      : "Aplicación de visitas virtuales 360º, con un recorrido sobre un centro educativo, con autocamara, puntos de intereses y mas funcionalidades.",
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
  {
    id: 3,
    title: isDarkMode ? "TASKFLOW.EXE" : "TaskFlow",
    description: isDarkMode 
      ? "// Advanced task management app with categories, filters, search, and real-time editing. Features include task completion tracking, statistics, and responsive design with glassmorphism effects." 
      : "Aplicación avanzada de gestión de tareas con categorías, filtros, búsqueda y edición en tiempo real. Incluye seguimiento de completitud, estadísticas y diseño responsive con efectos glassmorphism.",
    shortDescription: isDarkMode
      ? "// Gestor de tareas con categorías, filtros y estadísticas."
      : "Gestor de tareas con categorías, filtros y estadísticas.",
    liveUrl: "https://tu-taskflow-deploy.vercel.app/", // Reemplaza con tu URL de deploy
    image: "/taskflow.png", // Asegúrate de agregar esta imagen a tu carpeta public
    technologies: [
      { name: isDarkMode ? "NEXT.JS" : "Next.js", color: "blue" },
      { name: isDarkMode ? "REACT.JS" : "React", color: "blue" },
      { name: isDarkMode ? "TYPESCRIPT" : "TypeScript", color: "purple" },
      { name: isDarkMode ? "TAILWINDCSS" : "TailwindCSS", color: "green" }
    ]
  }
];

// Función para obtener configuración de colores de tecnologías
export const getTechColorConfig = (isDarkMode) => {
  if (isDarkMode) {
    return {
      blue: "bg-blue-900/50 border border-blue-500 text-blue-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-500/20 px-2 sm:px-3 py-1 sm:py-1.5",
      green: "bg-green-900/50 border border-green-500 text-green-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-green-500/20 px-2 sm:px-3 py-1 sm:py-1.5",
      yellow: "bg-yellow-900/50 border border-yellow-500 text-yellow-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-yellow-500/20 px-2 sm:px-3 py-1 sm:py-1.5",
      purple: "bg-purple-900/50 border border-purple-500 text-purple-400 font-mono text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20 px-2 sm:px-3 py-1 sm:py-1.5"
    };
  } else {
    return {
      blue: "bg-blue-100/90 backdrop-blur-sm border border-blue-300 text-blue-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
      green: "bg-green-100/90 backdrop-blur-sm border border-green-300 text-green-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
      yellow: "bg-yellow-100/90 backdrop-blur-sm border border-yellow-300 text-yellow-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
      purple: "bg-purple-100/90 backdrop-blur-sm border border-purple-300 text-purple-800 font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
    };
  }
};

// Función para obtener texto de fallback para imágenes
export const getImageFallbackText = (isDarkMode) => {
  return isDarkMode ? '[IMAGE_NOT_FOUND]' : 'Imagen no disponible';
};