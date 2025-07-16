import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import { getProjectsData } from './projectData';
import { getProjectsStyles } from './projectStyles';
import ProjectsTitle from './ProjectTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const projects = getProjectsData(isDarkMode);
  const styles = getProjectsStyles(isDarkMode);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <ProjectsTitle 
          styles={styles}
          isDarkMode={isDarkMode}
        />
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              styles={styles}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;