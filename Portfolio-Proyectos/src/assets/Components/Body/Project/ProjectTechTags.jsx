import React from 'react';
import { getTechColorConfig } from './projectData';

const ProjectTechTags = ({ technologies, styles, isDarkMode }) => {
  const techColors = getTechColorConfig(isDarkMode);

  const getTechColor = (color) => {
    return techColors[color] || techColors.blue;
  };

  return (
    <div className={styles.techContainer}>
      {technologies.map((tech, techIndex) => (
        <span 
          key={`${tech.name}-${techIndex}`}
          className={getTechColor(tech.color)}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
};

export default ProjectTechTags;