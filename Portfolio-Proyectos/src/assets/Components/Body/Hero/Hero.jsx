import React from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import { getHeroStyles } from './heroStyles';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import TerminalAnimation from './TerminalAnimation';
import HeroButtons from './HeroButtons';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const styles = getHeroStyles(isDarkMode);

  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <HeroTitle isDarkMode={isDarkMode} styles={styles} />  

        <TerminalAnimation isDarkMode={isDarkMode} styles={styles} />
                
        <HeroSubtitle isDarkMode={isDarkMode} styles={styles} />

        <HeroButtons isDarkMode={isDarkMode} styles={styles} />
      </div>
    </section>
  );
};

export default Hero;