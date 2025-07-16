import React from 'react';
import { useTerminalTyping } from './useTerminalTyping';

const TerminalAnimation = ({ isDarkMode, styles }) => {
  const {
    displayedText,
    currentTypingText,
    showCursor,
    isAnimationComplete
  } = useTerminalTyping(isDarkMode);

  // Solo mostrar en modo oscuro
  if (!isDarkMode) return null;

  return (
    <>
      <div className={styles.terminalPrompt}>
        INITIALIZING PORTFOLIO...
      </div>
      
      <div className={styles.commandLine}>
        <div className="text-left space-y-1 text-xs sm:text-sm lg:text-base">
          <div 
            className={styles.commandText}
            style={{ fontFamily: 'monospace' }}
          >
            {displayedText}{currentTypingText}
            {!isAnimationComplete && showCursor && (
              <span className={styles.cursor}>_</span>
            )}
            {isAnimationComplete && showCursor && (
              <span className={styles.cursor}>_</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminalAnimation;