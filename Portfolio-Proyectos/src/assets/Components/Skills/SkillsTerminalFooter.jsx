import React from 'react';
import { getTotalSkills } from './skillsData';

const SkillsTerminalFooter = ({ skillsData, styles, isDarkMode }) => {
  // Solo mostrar en modo oscuro
  if (!isDarkMode) return null;

  const totalSkills = getTotalSkills(skillsData);

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalCard}>
        <p className={styles.terminalPrompt}>
          <span className="text-emerald-500">sergio@portfolio:~$</span> cat skills.json | grep "level" | wc -l
        </p>
        <p className={styles.terminalOutput}>
          &gt; {totalSkills} skills loaded successfully
        </p>
      </div>
    </div>
  );
};

export default SkillsTerminalFooter;