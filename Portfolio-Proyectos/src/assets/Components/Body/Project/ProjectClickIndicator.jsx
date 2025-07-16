import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectClickIndicator = ({ styles, isDarkMode }) => {
  return (
    <div className={styles.clickIndicator}>
      <div className={`flex items-center gap-2 ${styles.clickText}`}>
        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
        {isDarkMode ? (
          <>
            <span className="hidden sm:inline">CLICK_TO_VIEW</span>
            <span className="sm:hidden">VER</span>
          </>
        ) : (
          <>
            <span className="hidden sm:inline">Haz clic para ver</span>
            <span className="sm:hidden">Ver proyecto</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectClickIndicator;