import { useState, useEffect } from 'react';

// Datos del terminal
const TERMINAL_COMMANDS = [
  {
    command: 'whoami',
    response: '> SERGIO_RIZ - Frontend Developer'
  },
  {
    command: 'cat about.txt',
    response: '"Desarrollador orientado a crear experiencias web."'
  },
  {
    command: 'ls projects/',
    response: '> 2 proyectos listos para mostrar...'
  },
  {
    command: 'echo $STATUS',
    response: '> Listo para construir webs!'
  }
];

export const useTerminalTyping = (isDarkMode) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingCommand, setIsTypingCommand] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');

  // Animación del cursor parpadeante
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  // Resetear animación cuando cambia el modo
  useEffect(() => {

    // Iniciar animación solo en modo oscuro
    if (isAnimationComplete) {
      setCurrentCommandIndex(0);
      setCurrentCharIndex(0);
      setDisplayedText('');
      setIsTypingCommand(true);
      setIsAnimationComplete(false);
      setCurrentTypingText('');
    }
  }, [isDarkMode, isAnimationComplete]);

  // Lógica principal de la animación de typing
  useEffect(() => {
    if (!isDarkMode || isAnimationComplete) return;

    let timeout;
    const currentCommand = TERMINAL_COMMANDS[currentCommandIndex];
    
    if (!currentCommand) {
      // Todos los comandos completados - Animar la línea final
      if (currentCharIndex === 0) {
        // Iniciar animación de la línea final
        const finalText = '\n\nsergio@portfolio:~$ ';
        if (currentCharIndex < finalText.length) {
          timeout = setTimeout(() => {
            const newChar = finalText[currentCharIndex];
            setCurrentTypingText(prev => prev + newChar);
            setCurrentCharIndex(prev => prev + 1);
          }, 40 + Math.random() * 15);
        }
      } else {
        const finalText = '\n\nsergio@portfolio:~$ ';
        if (currentCharIndex < finalText.length) {
          timeout = setTimeout(() => {
            const newChar = finalText[currentCharIndex];
            setCurrentTypingText(prev => prev + newChar);
            setCurrentCharIndex(prev => prev + 1);
          }, 40 + Math.random() * 15);
        } else {
          // Línea final completada
          setDisplayedText(prev => prev + currentTypingText);
          setCurrentTypingText('');
          setIsAnimationComplete(true);
        }
      }
      return;
    }

    if (isTypingCommand) {
      // Typing del comando letra por letra
      const commandText = `sergio@portfolio:~$ ${currentCommand.command}`;
      
      if (currentCharIndex < commandText.length) {
        timeout = setTimeout(() => {
          const newChar = commandText[currentCharIndex];
          setCurrentTypingText(prev => prev + newChar);
          setCurrentCharIndex(prev => prev + 1);
        }, 35 + Math.random() * 15); // Más rápido: 35-50ms por carácter
      } else {
        // Comando completo, pasar a la respuesta
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentTypingText);
          setCurrentTypingText('');
          setIsTypingCommand(false);
          setCurrentCharIndex(0);
        }, 150);
      }
    } else {
      // Typing de la respuesta letra por letra
      const responseText = `\n${currentCommand.response}`;
      
      if (currentCharIndex < responseText.length) {
        timeout = setTimeout(() => {
          const newChar = responseText[currentCharIndex];
          setCurrentTypingText(prev => prev + newChar);
          setCurrentCharIndex(prev => prev + 1);
        }, 30 + Math.random() * 10); // Más rápido para respuestas: 30-40ms
      } else {
        // Respuesta completa, pasar al siguiente comando
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentTypingText);
          setCurrentTypingText('');
          
          const nextIndex = currentCommandIndex + 1;
          if (nextIndex < TERMINAL_COMMANDS.length) {
            setCurrentCommandIndex(nextIndex);
            setIsTypingCommand(true);
            setCurrentCharIndex(0);
            setDisplayedText(prev => prev + '\n');
          } else {
            // Preparar para la línea final
            setCurrentCommandIndex(-1); // Señal para línea final
            setCurrentCharIndex(0);
          }
        }, 250);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCommandIndex, currentCharIndex, isTypingCommand, isDarkMode, displayedText, isAnimationComplete, currentTypingText]);

  return {
    displayedText,
    currentTypingText,
    showCursor,
    isAnimationComplete
  };
};