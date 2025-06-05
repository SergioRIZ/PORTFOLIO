import { useEffect } from 'react';
import Header from "./assets/Components/Header/Header"

function App() {

  // Inicializar tema al cargar la aplicación
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark', 'theme-dark');
      document.documentElement.classList.remove('theme-light');
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('dark', 'theme-dark');
    }
  }, []);

  return (
    <div className="min-h-screen theme-transition theme-bg-pattern">
      <Header />
      
      {/* Contenido principal */}
      
    </div>
  )
}

export default App