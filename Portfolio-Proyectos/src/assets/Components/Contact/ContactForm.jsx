import React from 'react';
import Contact from './Contact';
import { useTheme } from '../../../hooks/useTheme';
import { useContactForm } from './useContactForm';
import { getContactFormStyles } from './contactFormStyles';
import ContactFormAlerts from './ContactFormAlerts';
import ContactFormFields from './ContactFormFields';
import ContactFormSubmit from './ContactFormSubmit';

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const {
    formData,
    formStatus,
    handleInputChange,
    handleSubmit,
    VALIDATION_RULES
  } = useContactForm();

  const styles = getContactFormStyles(isDarkMode);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {isDarkMode ? (
            <>
              <span className="hidden sm:inline">&gt; CONTACTO.EXE</span>
              <span className="sm:hidden">&gt; CONTACT</span>
            </>
          ) : (
            'Contacto'
          )}
        </h2>
        
        <div className={styles.contactContainer}>
          <Contact 
            showLabels={true} 
            size={20} 
            className="flex-wrap justify-center" 
            withBackground={true} 
          />
        </div>
        
        <div className={styles.formContainer}>
          <ContactFormAlerts 
            formStatus={formStatus}
            styles={styles}
            isDarkMode={isDarkMode}
          />

          <form onSubmit={handleSubmit} className={styles.form}>
            <ContactFormFields 
              formData={formData}
              formStatus={formStatus}
              handleInputChange={handleInputChange}
              styles={styles}
              isDarkMode={isDarkMode}
              VALIDATION_RULES={VALIDATION_RULES}
            />
            
            <ContactFormSubmit 
              formStatus={formStatus}
              styles={styles}
              isDarkMode={isDarkMode}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;