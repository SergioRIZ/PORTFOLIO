import React, { useEffect } from 'react';
import Header from "./assets/Components/Header/Header";
import AboutMe from "./assets/Components/Body/Aboutme";
import Projects from "./assets/Components/Body/Projects";
import ContactForm from "./assets/Components/Contact/ContactForm";
import Hero from "./assets/Components/Body/Hero";
import Skills from './assets/Components/Skills/Skills';

function App() {
  // Inicializar tema al cargar la aplicación
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Aplicar el tema de forma síncrona antes del primer render
    const applyTheme = () => {
      if (isDark) {
        document.documentElement.classList.add('dark', 'theme-dark');
        document.documentElement.classList.remove('theme-light');
      } else {
        document.documentElement.classList.add('theme-light');
        document.documentElement.classList.remove('dark', 'theme-dark');
      }
    };

    // Aplicar inmediatamente
    applyTheme();
    
    // También forzar un reflow para asegurar que los estilos se apliquen
    document.documentElement.offsetHeight;
    
  }, []);

  return (
    <div className="min-h-screen theme-transition theme-bg-pattern">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;