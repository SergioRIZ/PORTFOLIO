import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectTechTags from './ProjectTechTags';
import ProjectClickIndicator from './ProjectClickIndicator';

const ProjectCard = ({ project, styles, isDarkMode }) => {
  const handleProjectClick = () => {
    window.open(project.liveUrl, '_blank');
  };

  return (
    <div
      onClick={handleProjectClick}
      className={styles.projectCard}
      role="button"
      tabIndex={0}
      aria-label={`Ver proyecto ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleProjectClick();
        }
      }}
    >
      <ProjectImage 
        project={project}
        styles={styles}
        isDarkMode={isDarkMode}
      />
      
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>
          {project.title}
        </h3>
        
        <p className={styles.projectDescription}>
          <span className="hidden sm:inline">{project.description}</span>
          <span className="sm:hidden">{project.shortDescription}</span>
        </p>
        
        <ProjectTechTags 
          technologies={project.technologies}
          styles={styles}
          isDarkMode={isDarkMode}
        />
        
        <ProjectClickIndicator 
          styles={styles}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default ProjectCard;