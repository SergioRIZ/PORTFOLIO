import React from 'react';

const Aboutme = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Sobre mí
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Soy un desarrollador apasionado por crear interfaces de usuario intuitivas y experiencias web excepcionales.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Me especializo en tecnologías modernas como React, JavaScript y CSS, siempre buscando las mejores prácticas y las últimas tendencias.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Información Personal</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Nombre:</strong> Tu Nombre</li>
              <li><strong>Ubicación:</strong> Tu Ciudad</li>
              <li><strong>Email:</strong> sergio_1999_cs@hotmail.com</li>
              <li><strong>Experiencia:</strong> X años</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;