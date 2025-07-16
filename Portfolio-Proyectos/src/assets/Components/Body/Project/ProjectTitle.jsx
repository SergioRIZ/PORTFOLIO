import React from 'react';

const ProjectsTitle = ({ styles, isDarkMode }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>
        {isDarkMode ? (
          <>
            <span className="hidden sm:inline">&gt; PROJECTS.PORTFOLIO</span>
            <span className="sm:hidden">&gt; PROJECTS</span>
          </>
        ) : (
          'Proyectos'
        )}
      </h2>
    </div>
  );
};

export default ProjectsTitle;