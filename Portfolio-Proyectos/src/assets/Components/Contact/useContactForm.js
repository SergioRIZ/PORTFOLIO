import { useState, useEffect } from 'react';
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

export const useContactForm = () => {
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

  // Enviar email
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

  // Manejar envío del formulario
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
        to_email: 'sroldan.portfolio@gmail.com',
        reply_to: formData.email
      };

      // Enviar email
      const emailResult = await sendEmail(templateParams);
      
      if (emailResult.success) {
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
        
      } else {
        // Error
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

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormStatus({
      loading: false,
      success: false,
      error: '',
      emailValid: null,
      fieldErrors: {}
    });
  };

  return {
    formData,
    formStatus,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField,
    VALIDATION_RULES
  };
};