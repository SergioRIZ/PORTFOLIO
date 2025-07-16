import React from 'react';
import { getImageFallbackText } from './projectData';

const ProjectImage = ({ project, styles, isDarkMode }) => {
  const fallbackText = getImageFallbackText(isDarkMode);

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = `
      <div class="w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800 text-emerald-500' : 'bg-gray-100 text-slate-600'}">
        <span class="text-lg sm:text-2xl font-mono text-center px-4">${fallbackText}</span>
      </div>
    `;
  };

  return (
    <div className={styles.imageContainer}>
      {project.image && (
        <img 
          src={project.image}
          alt={`Preview de ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ProjectImage;