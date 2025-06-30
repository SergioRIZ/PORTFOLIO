import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'service_g4uhltb', // Tu Service ID
  templateId: 'template_rxzlj6f', // Tu Template ID
  publicKey: 'tgG4JkSzXGBlVmmdb' // Tu Public Key
};

// Constantes para validación
const VALIDATION_RULES = {
  name: { min: 2, max: 50 },
  email: { max: 254 },
  subject: { max: 100 },
  message: { min: 10, max: 1000 }
};

const ContactForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [forceRender, setForceRender] = useState(0);
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

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  // Detectar cambios de tema
  useEffect(() => {
    const checkTheme = () => {
      const newTheme = document.documentElement.classList.contains('dark');
      setIsDarkMode(newTheme);
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
          
          setTimeout(() => setForceRender(prev => prev + 1), 10);
          setTimeout(() => setForceRender(prev => prev + 1), 50);
          setTimeout(() => setForceRender(prev => prev + 1), 100);
          
          setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.style.display = 'none';
              contactSection.offsetHeight;
              contactSection.style.display = 'flex';
              
              const allElements = contactSection.querySelectorAll('*');
              allElements.forEach(el => {
                el.style.transform = 'translateZ(0)';
                el.offsetHeight;
                el.style.transform = '';
              });
            }
          }, 150);
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Validación de email
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

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: '' }));
    }

    const error = validateField(name, value);
    setFormStatus(prev => ({
      ...prev,
      fieldErrors: {
        ...prev.fieldErrors,
        [name]: error
      }
    }));
  };

  // Validación completa del formulario
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < VALIDATION_RULES.name.min) {
      errors.name = `Mínimo ${VALIDATION_RULES.name.min} caracteres`;
    }

    if (!formData.email) {
      errors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < VALIDATION_RULES.message.min) {
      errors.message = `Mínimo ${VALIDATION_RULES.message.min} caracteres`;
    }

    return errors;
  };

  // FUNCIÓN PARA ENVIAR EMAIL REAL
  const sendEmail = async (templateParams) => {
    try {
      console.log('Enviando email con EmailJS...', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Email enviado exitosamente:', response);
      return { success: true, response };
      
    } catch (error) {
      console.error('Error enviando email:', error);
      return { 
        success: false, 
        error: error.text || error.message || 'Error desconocido'
      };
    }
  };

  // Enviar formulario con EMAIL REAL
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
      // Preparar datos para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Nuevo mensaje desde Portfolio',
        message: formData.message,
        to_email: 'sroldan.portfolio@gmail.com', // Tu email destino
        reply_to: formData.email
      };

      // ENVIAR EMAIL REAL
      const emailResult = await sendEmail(templateParams);
      
      if (emailResult.success) {
        // Éxito - Email enviado
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
        
      } else {
        // Error al enviar email
        setFormStatus(prev => ({ 
          ...prev, 
          loading: false, 
          error: `Error al enviar el email: ${emailResult.error}. Verifica la configuración de EmailJS.`
        }));
      }

    } catch (err) {
      console.error('Error general:', err);
      setFormStatus(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Error inesperado al enviar el mensaje. Inténtalo nuevamente.' 
      }));
    }
  };

  // Estilos dinámicos (mismos que antes)
  const getStyles = () => {
    if (isDarkMode) {
      return {
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900',
        title: 'text-3xl md:text-5xl font-bold mb-12 text-emerald-500 font-mono tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        formContainer: 'p-8 rounded-xl max-w-2xl mx-auto bg-black/95 backdrop-blur-xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/40',
        successAlert: 'mb-6 p-4 rounded-lg bg-emerald-900/50 backdrop-blur-sm border-2 border-emerald-500 shadow-lg shadow-emerald-500/20',
        successText: 'font-medium text-emerald-400 font-mono tracking-wide',
        errorAlert: 'mb-6 p-4 rounded-lg bg-red-900/50 backdrop-blur-sm border-2 border-red-500 shadow-lg shadow-red-500/20',
        errorText: 'font-medium text-red-400 font-mono tracking-wide',
        input: 'w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-black/90 backdrop-blur-sm text-emerald-400 font-mono placeholder-emerald-600',
        inputNormal: 'border-emerald-500/50 focus:ring-emerald-500 hover:border-emerald-500',
        inputError: 'border-red-500 focus:ring-red-500 shadow-lg shadow-red-500/20',
        fieldError: 'text-sm mt-1 font-medium text-red-400 font-mono',
        button: 'w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-mono tracking-wider uppercase cursor-pointer',
        buttonEnabled: 'bg-emerald-600 hover:bg-emerald-700 text-black hover:shadow-emerald-500/40 border-2 border-emerald-500',
        buttonDisabled: 'cursor-not-allowed bg-gray-700 text-gray-400 border-2 border-gray-600',
        characterCount: 'text-sm ml-auto text-emerald-500 font-mono'
      };
    } else {
      return {
        section: 'min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100',
        title: 'text-3xl md:text-5xl font-bold mb-12 text-slate-800 font-light tracking-wide',
        formContainer: 'p-8 rounded-xl max-w-2xl mx-auto bg-white/98 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/30',
        successAlert: 'mb-6 p-4 rounded-lg bg-green-100/90 backdrop-blur-sm border border-green-300 shadow-md shadow-green-200/30',
        successText: 'font-medium text-green-800',
        errorAlert: 'mb-6 p-4 rounded-lg bg-red-100/90 backdrop-blur-sm border border-red-300 shadow-md shadow-red-200/30',
        errorText: 'font-medium text-red-800',
        input: 'w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-white/95 backdrop-blur-sm text-slate-800 placeholder-slate-500',
        inputNormal: 'border-slate-300 focus:ring-slate-400 hover:border-slate-400 hover:shadow-md',
        inputError: 'border-red-500 focus:ring-red-500 shadow-sm',
        fieldError: 'text-sm mt-1 font-medium text-red-600',
        button: 'w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium cursor-pointer',
        buttonEnabled: 'text-white hover:shadow-lg hover:scale-[1.02] bg-slate-600 hover:bg-slate-700 hover:shadow-slate-200/50',
        buttonDisabled: 'cursor-not-allowed bg-gray-400 text-gray-200',
        characterCount: 'text-sm ml-auto text-slate-500'
      };
    }
  };

  const getInputClasses = (fieldName) => {
    const styles = getStyles();
    const hasError = formStatus.fieldErrors[fieldName];
    
    let classes = styles.input + ' ';
    
    if (hasError) {
      classes += styles.inputError;
    } else {
      classes += styles.inputNormal;
    }
    
    return classes;
  };

  const styles = getStyles();

  return (
    <section 
      id="contact" 
      key={`contact-${forceRender}`}
      className={`${styles.section} force-visible`}
      style={{
        opacity: '1 !important',
        visibility: 'visible !important',
        display: 'flex !important',
        transform: 'translateZ(0)',
        willChange: 'auto',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <div 
        className="max-w-4xl mx-auto text-center w-full"
        style={{
          opacity: '1 !important',
          visibility: 'visible !important'
        }}
      >
        <h2 
          className={styles.title}
          style={{
            opacity: '1 !important',
            visibility: 'visible !important'
          }}
        >
          {isDarkMode ? '> CONTACTO.EXE' : 'Contacto'}
        </h2>
        
        <div 
          className="flex justify-center mb-8"
          style={{
            opacity: '1 !important',
            visibility: 'visible !important',
            display: 'flex !important'
          }}
        >
          <Contact showLabels={true} size={24} className="space-x-8" withBackground={true} />
        </div>
        
        <div 
          className={styles.formContainer}
          style={{
            opacity: '1 !important',
            visibility: 'visible !important',
            display: 'block !important'
          }}
        >
          {formStatus.success && (
            <div 
              className={styles.successAlert}
              style={{
                opacity: '1 !important',
                visibility: 'visible !important',
                display: 'block !important'
              }}
            >
              <p className={styles.successText}>
                {isDarkMode 
                  ? '> STATUS: SUCCESS - Email enviado correctamente a sroldan.portfolio@gmail.com!' 
                  : '✅ ¡Email enviado correctamente! Te responderé pronto.'
                }
              </p>
            </div>
          )}
          
          {formStatus.error && (
            <div 
              className={styles.errorAlert}
              style={{
                opacity: '1 !important',
                visibility: 'visible !important',
                display: 'block !important'
              }}
            >
              <p className={styles.errorText}>
                {isDarkMode ? `> ERROR: ${formStatus.error}` : `❌ ${formStatus.error}`}
              </p>
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            style={{
              opacity: '1 !important',
              visibility: 'visible !important',
              display: 'block !important'
            }}
          >
            <div 
              className="grid md:grid-cols-2 gap-6"
              style={{
                opacity: '1 !important',
                visibility: 'visible !important',
                display: 'grid !important'
              }}
            >
              <div style={{ opacity: '1 !important', visibility: 'visible !important' }}>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={isDarkMode ? '> NOMBRE *' : 'Tu nombre *'} 
                  required
                  maxLength={VALIDATION_RULES.name.max}
                  className={getInputClasses('name')}
                  style={{ opacity: '1 !important', visibility: 'visible !important' }}
                />
                {formStatus.fieldErrors.name && (
                  <p className={styles.fieldError}>
                    {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.name}` : formStatus.fieldErrors.name}
                  </p>
                )}
              </div>
              
              <div 
                className="relative"
                style={{ opacity: '1 !important', visibility: 'visible !important' }}
              >
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={isDarkMode ? '> EMAIL *' : 'Tu email *'} 
                  required
                  maxLength={VALIDATION_RULES.email.max}
                  className={getInputClasses('email')}
                  style={{ opacity: '1 !important', visibility: 'visible !important' }}
                />
                
                {formStatus.fieldErrors.email && (
                  <p className={styles.fieldError}>
                    {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.email}` : formStatus.fieldErrors.email}
                  </p>
                )}
              </div>
            </div>
            
            <div style={{ opacity: '1 !important', visibility: 'visible !important' }}>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={isDarkMode ? '> ASUNTO' : 'Asunto'} 
                maxLength={VALIDATION_RULES.subject.max}
                className={getInputClasses('subject')}
                style={{ opacity: '1 !important', visibility: 'visible !important' }}
              />
            </div>
            
            <div style={{ opacity: '1 !important', visibility: 'visible !important' }}>
              <textarea 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={isDarkMode ? '> MENSAJE *' : 'Tu mensaje *'} 
                required
                maxLength={VALIDATION_RULES.message.max}
                className={`${getInputClasses('message')} resize-vertical min-h-[120px]`}
                style={{ opacity: '1 !important', visibility: 'visible !important' }}
              />
              <div 
                className="flex justify-between items-center mt-1"
                style={{ opacity: '1 !important', visibility: 'visible !important', display: 'flex !important' }}
              >
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
              disabled={formStatus.loading || Object.keys(formStatus.fieldErrors).some(key => formStatus.fieldErrors[key])}
              className={`${styles.button} ${
                formStatus.loading || Object.keys(formStatus.fieldErrors).some(key => formStatus.fieldErrors[key])
                  ? styles.buttonDisabled
                  : styles.buttonEnabled
              }`}
              style={{ opacity: '1 !important', visibility: 'visible !important', display: 'flex !important' }}
            >
              {formStatus.loading ? (
                <>
                  <div className={`animate-spin h-4 w-4 border-2 border-t-transparent rounded-full ${
                    isDarkMode ? 'border-emerald-500' : 'border-white'
                  }`}></div>
                  <span>{isDarkMode ? 'ENVIANDO_EMAIL...' : 'Enviando email...'}</span>
                </>
              ) : (
                <span>{isDarkMode ? 'ENVIAR_EMAIL()' : 'Enviar Email'}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;