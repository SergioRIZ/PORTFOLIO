import React, { useState, useEffect } from 'react';
import Contact from './Contact';

// Constantes para validación
const VALIDATION_RULES = {
  name: { min: 2, max: 50 },
  email: { max: 254 },
  subject: { max: 100 },
  message: { min: 10, max: 1000 }
};

const ContactForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: '',
    emailValid: null,
    fieldErrors: {}
  });

  // Detectar cambios de tema observando las clases del document (IGUAL QUE EN HEADER)
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Verificar tema inicial
    checkTheme();

    // Observar cambios en las clases del document
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Validación mejorada de email
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email) && email.length <= VALIDATION_RULES.email.max;
  };

  // Validación de campos
  const validateField = (name, value) => {
    const rules = VALIDATION_RULES[name];
    if (!rules) return null;

    if (name === 'email') {
      return validateEmail(value) ? null : 'Email inválido';
    }

    if (rules.min && value.trim().length < rules.min) {
      return `Mínimo ${rules.min} caracteres`;
    }

    if (rules.max && value.length > rules.max) {
      return `Máximo ${rules.max} caracteres`;
    }

    return null;
  };

  // Verificación mejorada de email
  const verifyEmailExists = async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dominios comunes más completos
        const commonDomains = [
          'gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 
          'icloud.com', 'protonmail.com', 'zoho.com', 'aol.com',
          'mail.com', 'yandex.com'
        ];
        const domain = email.split('@')[1]?.toLowerCase();
        
        // Verificación básica de dominio + simulación de verificación más realista
        const isDomainValid = domain && domain.includes('.') && domain.length > 3;
        const isCommonDomain = commonDomains.includes(domain);
        const randomCheck = Math.random() > 0.1; // 90% de probabilidad de éxito
        
        resolve(isDomainValid && (isCommonDomain || randomCheck));
      }, 800);
    });
  };

  // Manejar cambios en el formulario con validación en tiempo real
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Limpiar errores generales
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: '' }));
    }

    // Validación en tiempo real para campos específicos
    const error = validateField(name, value);
    setFormStatus(prev => ({
      ...prev,
      fieldErrors: {
        ...prev.fieldErrors,
        [name]: error
      }
    }));
  };

  // Verificar email cuando pierde el foco
  const handleEmailBlur = async () => {
    if (!formData.email || formStatus.fieldErrors.email) return;
    
    if (!validateEmail(formData.email)) {
      setFormStatus(prev => ({ 
        ...prev, 
        emailValid: false,
        fieldErrors: { ...prev.fieldErrors, email: 'Email inválido' }
      }));
      return;
    }

    setFormStatus(prev => ({ ...prev, emailValid: 'checking' }));
    
    try {
      const isValid = await verifyEmailExists(formData.email);
      setFormStatus(prev => ({ 
        ...prev, 
        emailValid: isValid,
        fieldErrors: {
          ...prev.fieldErrors,
          email: isValid ? null : 'El email no parece existir'
        }
      }));
    } catch (err) {
      console.error('Error verificando email:', err);
      setFormStatus(prev => ({ 
        ...prev, 
        emailValid: false,
        fieldErrors: { ...prev.fieldErrors, email: 'Error verificando email' }
      }));
    }
  };

  // Validación completa del formulario
  const validateForm = () => {
    const errors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < VALIDATION_RULES.name.min) {
      errors.name = `Mínimo ${VALIDATION_RULES.name.min} caracteres`;
    }

    // Validar email
    if (!formData.email) {
      errors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email inválido';
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < VALIDATION_RULES.message.min) {
      errors.message = `Mínimo ${VALIDATION_RULES.message.min} caracteres`;
    }

    return errors;
  };

  // Enviar formulario con validación mejorada
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación completa
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormStatus(prev => ({ 
        ...prev, 
        fieldErrors: errors,
        error: 'Por favor, corrige los errores antes de enviar'
      }));
      return;
    }

    setFormStatus(prev => ({ ...prev, loading: true, error: '' }));

    try {
      // Verificar email una vez más si no se ha verificado
      if (formStatus.emailValid !== true) {
        const emailExists = await verifyEmailExists(formData.email);
        if (!emailExists) {
          setFormStatus(prev => ({ 
            ...prev, 
            loading: false, 
            error: 'El email no parece existir. Verifica la dirección.',
            fieldErrors: { ...prev.fieldErrors, email: 'Email no válido' }
          }));
          return;
        }
      }

      // Simulación del envío (aquí integrarías con tu backend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Éxito
      setFormStatus({
        loading: false,
        success: true,
        error: '',
        emailValid: null,
        fieldErrors: {}
      });
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      console.error('Error al enviar mensaje:', err);
      setFormStatus(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Error al enviar el mensaje. Inténtalo nuevamente.' 
      }));
    }
  };

  // Estilos dinámicos usando el mismo patrón que el Header
  const getStyles = () => {
    if (isDarkMode) {
      return {
        // MODO OSCURO - Exactamente como en el Header
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-3xl md:text-5xl font-bold mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        subtitle: 'text-xl mb-8 text-emerald-400 font-mono tracking-wide',
        formContainer: 'p-8 rounded-xl max-w-2xl mx-auto bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40',
        successAlert: 'mb-6 p-4 rounded-lg bg-emerald-900/50 backdrop-blur-sm border-2 border-emerald-500 shadow-lg shadow-emerald-500/20',
        successText: 'font-medium text-emerald-400 font-mono tracking-wide',
        errorAlert: 'mb-6 p-4 rounded-lg bg-red-900/50 backdrop-blur-sm border-2 border-red-500 shadow-lg shadow-red-500/20',
        errorText: 'font-medium text-red-400 font-mono tracking-wide',
        input: 'w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-black/90 backdrop-blur-sm text-emerald-400 font-mono placeholder-emerald-600',
        inputNormal: 'border-emerald-500/50 focus:ring-emerald-500 hover:border-emerald-500',
        inputError: 'border-red-500 focus:ring-red-500 shadow-lg shadow-red-500/20',
        inputValid: 'border-emerald-500 focus:ring-emerald-500 shadow-lg shadow-emerald-500/20',
        fieldError: 'text-sm mt-1 font-medium text-red-400 font-mono',
        button: 'w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-mono tracking-wider uppercase',
        buttonEnabled: 'bg-emerald-600 hover:bg-emerald-700 text-black hover:shadow-emerald-500/40 border-2 border-emerald-500',
        buttonDisabled: 'cursor-not-allowed bg-gray-700 text-gray-400 border-2 border-gray-600',
        characterCount: 'text-sm ml-auto text-emerald-500 font-mono'
      };
    } else {
      return {
        // MODO CLARO - Exactamente como en el Header
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-3xl md:text-5xl font-bold mb-12 text-slate-800 font-light tracking-wide',
        subtitle: 'text-xl mb-8 text-slate-600 font-medium',
        formContainer: 'p-8 rounded-xl max-w-2xl mx-auto bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30',
        successAlert: 'mb-6 p-4 rounded-lg bg-green-100/90 backdrop-blur-sm border border-green-300 shadow-md shadow-green-200/30',
        successText: 'font-medium text-green-800',
        errorAlert: 'mb-6 p-4 rounded-lg bg-red-100/90 backdrop-blur-sm border border-red-300 shadow-md shadow-red-200/30',
        errorText: 'font-medium text-red-800',
        input: 'w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-white/95 backdrop-blur-sm text-slate-800 placeholder-slate-500',
        inputNormal: 'border-slate-300 focus:ring-slate-400 hover:border-slate-400 hover:shadow-md',
        inputError: 'border-red-500 focus:ring-red-500 shadow-sm',
        inputValid: 'border-green-500 focus:ring-green-500 shadow-sm hover:shadow-md',
        fieldError: 'text-sm mt-1 font-medium text-red-600',
        button: 'w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium',
        buttonEnabled: 'text-white hover:shadow-lg hover:scale-[1.02] bg-slate-600 hover:bg-slate-700 hover:shadow-slate-200/50',
        buttonDisabled: 'cursor-not-allowed bg-gray-400 text-gray-200',
        characterCount: 'text-sm ml-auto text-slate-500'
      };
    }
  };

  // Función helper para estilos de input
  const getInputClasses = (fieldName) => {
    const styles = getStyles();
    const hasError = formStatus.fieldErrors[fieldName];
    const isEmailField = fieldName === 'email';
    
    let classes = styles.input + ' ';
    
    if (hasError) {
      classes += styles.inputError;
    } else if (isEmailField && formStatus.emailValid === true) {
      classes += styles.inputValid;
    } else {
      classes += styles.inputNormal;
    }
    
    return classes;
  };

  const styles = getStyles();

  return (
    <section id="contact" className={styles.section}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={styles.title}>
          {isDarkMode ? '> CONTACTO.EXE' : 'Contacto'}
        </h2>
        <p className={styles.subtitle}>
          {isDarkMode ? '// ¿Tienes un proyecto en mente? ¡Hablemos!' : '¿Tienes un proyecto en mente? ¡Hablemos!'}
        </p>
        
        <div className="flex justify-center mb-8">
          <Contact showLabels={true} size={24} className="space-x-8" withBackground={true} />
        </div>
        
        <div className={styles.formContainer}>
          {formStatus.success && (
            <div className={styles.successAlert}>
              <p className={styles.successText}>
                {isDarkMode ? '> STATUS: SUCCESS - Mensaje enviado correctamente!' : '✅ ¡Mensaje enviado correctamente! Te responderé pronto.'}
              </p>
            </div>
          )}
          
          {formStatus.error && (
            <div className={styles.errorAlert}>
              <p className={styles.errorText}>
                {isDarkMode ? `> ERROR: ${formStatus.error}` : `❌ ${formStatus.error}`}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={isDarkMode ? '> NOMBRE *' : 'Tu nombre *'} 
                  required
                  maxLength={VALIDATION_RULES.name.max}
                  className={getInputClasses('name')}
                />
                {formStatus.fieldErrors.name && (
                  <p className={styles.fieldError}>
                    {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.name}` : formStatus.fieldErrors.name}
                  </p>
                )}
              </div>
              
              <div className="relative">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  placeholder={isDarkMode ? '> EMAIL *' : 'Tu email *'} 
                  required
                  maxLength={VALIDATION_RULES.email.max}
                  className={getInputClasses('email')}
                />
                
                {/* Indicadores visuales del email */}
                {formStatus.emailValid === 'checking' && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className={`animate-spin h-4 w-4 border-2 border-t-transparent rounded-full ${
                      isDarkMode ? 'border-emerald-500' : 'border-slate-500'
                    }`}></div>
                  </div>
                )}
                {formStatus.emailValid === true && (
                  <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-emerald-500' : 'text-green-500'
                  }`}>
                    {isDarkMode ? '[OK]' : '✅'}
                  </div>
                )}
                {formStatus.emailValid === false && (
                  <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-red-500' : 'text-red-500'
                  }`}>
                    {isDarkMode ? '[ERR]' : '❌'}
                  </div>
                )}
                
                {formStatus.fieldErrors.email && (
                  <p className={styles.fieldError}>
                    {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.email}` : formStatus.fieldErrors.email}
                  </p>
                )}
              </div>
            </div>
            
            <div>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={isDarkMode ? '> ASUNTO' : 'Asunto'} 
                maxLength={VALIDATION_RULES.subject.max}
                className={getInputClasses('subject')}
              />
              {formStatus.fieldErrors.subject && (
                <p className={styles.fieldError}>
                  {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.subject}` : formStatus.fieldErrors.subject}
                </p>
              )}
            </div>
            
            <div>
              <textarea 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={isDarkMode ? '> MENSAJE *' : 'Tu mensaje *'} 
                required
                maxLength={VALIDATION_RULES.message.max}
                className={`${getInputClasses('message')} resize-vertical min-h-[120px]`}
              />
              <div className="flex justify-between items-center mt-1">
                {formStatus.fieldErrors.message && (
                  <p className={styles.fieldError}>
                    {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.message}` : formStatus.fieldErrors.message}
                  </p>
                )}
                <p className={styles.characterCount}>
                  {isDarkMode ? `[${formData.message.length}/${VALIDATION_RULES.message.max}]` : `${formData.message.length}/${VALIDATION_RULES.message.max}`}
                </p>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={formStatus.loading || formStatus.emailValid === false || Object.keys(formStatus.fieldErrors).some(key => formStatus.fieldErrors[key])}
              className={`${styles.button} ${
                formStatus.loading || formStatus.emailValid === false || Object.keys(formStatus.fieldErrors).some(key => formStatus.fieldErrors[key])
                  ? styles.buttonDisabled
                  : styles.buttonEnabled
              }`}
            >
              {formStatus.loading ? (
                <>
                  <div className={`animate-spin h-4 w-4 border-2 border-t-transparent rounded-full ${
                    isDarkMode ? 'border-emerald-500' : 'border-white'
                  }`}></div>
                  <span>{isDarkMode ? 'ENVIANDO...' : 'Enviando...'}</span>
                </>
              ) : (
                <span>{isDarkMode ? 'ENVIAR_MENSAJE()' : 'Enviar Mensaje'}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;