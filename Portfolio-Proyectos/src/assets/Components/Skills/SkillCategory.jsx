import React from 'react';
import SkillItem from './SkillItem';
import { getCategoryGradient } from './skillsData';

const SkillCategory = ({ 
  categoryKey, 
  category, 
  animatedBars, 
  styles, 
  isDarkMode 
}) => {
  return (
    <div 
      className={`${styles.categoryCard} ${isDarkMode ? `bg-gradient-to-br ${getCategoryGradient(categoryKey, isDarkMode)}` : ''}`}
    >
      <h3 className={styles.categoryTitle}>
        {category.title}
      </h3>

      <div className={styles.skillsContainer}>
        {category.skills.map((skill, index) => {
          const isAnimated = animatedBars[`${categoryKey}-${index}`];
          
          return (
            <SkillItem
              key={skill.name}
              skill={skill}
              isAnimated={isAnimated}
              styles={styles}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategory;