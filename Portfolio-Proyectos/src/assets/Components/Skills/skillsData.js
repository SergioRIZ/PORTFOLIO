// Datos de habilidades organizados por categorías
export const getSkillsData = (isDarkMode) => ({
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

// Función para obtener gradientes de categoría
export const getCategoryGradient = (categoryKey, isDarkMode) => {
  if (!isDarkMode) return '';
  
  const gradients = {
    frontend: 'from-emerald-500/20 to-emerald-600/20',
    backend: 'from-blue-500/20 to-blue-600/20',
    tools: 'from-purple-500/20 to-purple-600/20'
  };
  return gradients[categoryKey] || gradients.frontend;
};

// Función para obtener el total de skills
export const getTotalSkills = (skillsData) => {
  return Object.values(skillsData).reduce((total, category) => total + category.skills.length, 0);
};