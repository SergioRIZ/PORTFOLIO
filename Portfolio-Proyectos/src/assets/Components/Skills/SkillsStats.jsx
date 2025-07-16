import React from 'react';

const SkillsStats = ({ skillsData, styles, isDarkMode }) => {
  return (
    <div className={styles.statsContainer}>
      {Object.entries(skillsData).map(([categoryKey, category]) => (
        <div key={categoryKey} className={styles.statCard}>
          <div className={styles.statNumber}>
            {category.skills.length}
          </div>
          <div className={styles.statLabel}>
            {isDarkMode ? category.title.toUpperCase() : category.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsStats;