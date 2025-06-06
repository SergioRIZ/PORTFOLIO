import React, { useState } from 'react';
import Contact from './Contact';

const ContactForm = () => {
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
    emailValid: null
  });

  // Validación de email
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email) && email.length <= 254;
  };

  // Simulación de verificación de email
  const verifyEmailExists = async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const commonDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'icloud.com'];
        const domain = email.split('@')[1];
        resolve(commonDomains.includes(domain) || Math.random() > 0.3);
      }, 1000);
    });
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: '' }));
    }
  };

  // Verificar email cuando pierde el foco
  const handleEmailBlur = async () => {
    if (!formData.email) return;
    
    if (!validateEmail(formData.email)) {
      setFormStatus(prev => ({ ...prev, emailValid: false }));
      return;
    }

    setFormStatus(prev => ({ ...prev, emailValid: 'checking' }));
    
    try {
      const isValid = await verifyEmailExists(formData.email);
      setFormStatus(prev => ({ ...prev, emailValid: isValid }));
    } catch (error) {
      console.error('Error verificando email:', error);
      setFormStatus(prev => ({ ...prev, emailValid: false }));
    }
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.name.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'El nombre es requerido' }));
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setFormStatus(prev => ({ ...prev, error: 'Email inválido' }));
      return;
    }
    
    if (!formData.message.trim()) {
      setFormStatus(prev => ({ ...prev, error: 'El mensaje es requerido' }));
      return;
    }

    setFormStatus(prev => ({ ...prev, loading: true, error: '' }));

    try {
      // Verificar email una vez más
      const emailExists = await verifyEmailExists(formData.email);
      if (!emailExists) {
        setFormStatus(prev => ({ 
          ...prev, 
          loading: false, 
          error: 'El email no parece existir. Verifica la dirección.' 
        }));
        return;
      }

      // Simulación del envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Éxito
      setFormStatus(prev => ({ 
        ...prev, 
        loading: false, 
        success: true, 
        error: '' 
      }));
      
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

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setFormStatus(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Error al enviar el mensaje. Inténtalo nuevamente.' 
      }));
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-white">
          Contacto
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="flex justify-center mb-8">
          <Contact showLabels={true} size={24} className="space-x-8" withBackground={true} />
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          {formStatus.success && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-medium">
                ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
              </p>
            </div>
          )}
          
          {formStatus.error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 font-medium">
                ❌ {formStatus.error}
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
                  placeholder="Tu nombre *" 
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div className="relative">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  placeholder="Tu email *" 
                  required
                  className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ${
                    formStatus.emailValid === true 
                      ? 'border-green-500 focus:ring-green-500' 
                      : formStatus.emailValid === false 
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-emerald-500'
                  }`}
                />
                {formStatus.emailValid === 'checking' && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                  </div>
                )}
                {formStatus.emailValid === true && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    ✅
                  </div>
                )}
                {formStatus.emailValid === false && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                    ❌
                  </div>
                )}
              </div>
            </div>
            
            <input 
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Asunto" 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
            />
            
            <textarea 
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tu mensaje *" 
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400 resize-vertical min-h-[120px]"
            ></textarea>
            
            <button 
              type="submit" 
              disabled={formStatus.loading || formStatus.emailValid === false}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                formStatus.loading || formStatus.emailValid === false
                  ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                  : 'bg-blue-600 dark:bg-emerald-600 hover:bg-blue-700 dark:hover:bg-emerald-700 text-white hover:shadow-lg'
              }`}
            >
              {formStatus.loading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Enviando...</span>
                </>
              ) : (
                <span>Enviar Mensaje</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;