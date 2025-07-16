import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { getSkillsData } from './skillsData';
import { getSkillsStyles } from './skillsStyles';
import { useSkillsAnimation } from './useSkillsAnimation';
import SkillCategory from './SkillCategory';
import SkillsStats from './SkillsStats';
import SkillsTerminalFooter from './SkillsTerminalFooter';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const skillsData = getSkillsData(isDarkMode);
  const styles = getSkillsStyles(isDarkMode);
  const { animatedBars } = useSkillsAnimation(skillsData, isDarkMode);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {isDarkMode ? (
            <>
              <span className="hidden sm:inline">&gt; SKILLS.PORTFOLIO</span>
              <span className="sm:hidden">&gt; SKILLS</span>
            </>
          ) : (
            'Habilidades'
          )}
        </h2>

        <div className={styles.categoriesGrid}>
          {Object.entries(skillsData).map(([categoryKey, category]) => (
            <SkillCategory
              key={categoryKey}
              categoryKey={categoryKey}
              category={category}
              animatedBars={animatedBars}
              styles={styles}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        <SkillsStats 
          skillsData={skillsData}
          styles={styles}
          isDarkMode={isDarkMode}
        />

        <SkillsTerminalFooter 
          skillsData={skillsData}
          styles={styles}
          isDarkMode={isDarkMode}
        />
      </div>
    </section>
  );
};

export default Skills;