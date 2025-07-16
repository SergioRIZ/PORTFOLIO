import React from 'react';
import { getProgressBarStyle } from './skillsStyles';

const SkillItem = ({ skill, isAnimated, styles, isDarkMode }) => {
  const handleImageError = (e) => {
    // Fallback si la imagen no carga
    e.target.style.display = 'none';
    e.target.parentElement.insertAdjacentHTML('afterbegin', 
      `<div class="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${isDarkMode ? 'from-emerald-500 to-emerald-600' : 'from-blue-500 to-purple-500'} rounded-full flex items-center justify-center text-white text-xs font-bold">${skill.name.charAt(0)}</div>`
    );
  };

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <div className={styles.skillName}>
          <img 
            src={skill.icon} 
            alt={`${skill.name} icon`}
            className={styles.skillIcon}
            onError={handleImageError}
          />
          <span className="truncate">{skill.name}</span>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar}
          style={getProgressBarStyle(skill, isAnimated, isDarkMode)}
        />
        {isDarkMode && (
          <div 
            className="absolute inset-0 animate-pulse opacity-30"
            style={{
              background: `linear-gradient(90deg, ${skill.color}40, ${skill.color}20)`
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillItem;