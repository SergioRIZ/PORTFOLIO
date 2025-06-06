import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del proyecto y tecnologías utilizadas.",
      gradient: "from-blue-400 to-purple-600",
      technologies: [
        { name: "React", color: "blue" },
        { name: "CSS", color: "green" }
      ]
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del proyecto y tecnologías utilizadas.",
      gradient: "from-green-400 to-blue-600",
      technologies: [
        { name: "JavaScript", color: "yellow" },
        { name: "API", color: "purple" }
      ]
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción del proyecto y tecnologías utilizadas.",
      gradient: "from-pink-400 to-red-600",
      technologies: [
        { name: "HTML", color: "red" },
        { name: "Tailwind", color: "indigo" }
      ]
    }
  ];

  const getTechColor = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech.color)}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;