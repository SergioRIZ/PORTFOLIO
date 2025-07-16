import React from 'react';
import { getInputClasses } from './contactFormStyles';

const ContactFormFields = ({ 
  formData, 
  formStatus, 
  handleInputChange, 
  styles, 
  isDarkMode, 
  VALIDATION_RULES 
}) => {
  return (
    <>
      {/* Fila con nombre y email */}
      <div className={styles.gridContainer}>
        <div className={styles.inputContainer}>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={isDarkMode ? '> NAME *' : 'Tu nombre *'} 
            required
            maxLength={VALIDATION_RULES.name.max}
            className={getInputClasses(styles, formStatus.fieldErrors, 'name')}
          />
          {formStatus.fieldErrors.name && (
            <p className={styles.fieldError}>
              {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.name}` : formStatus.fieldErrors.name}
            </p>
          )}
        </div>
        
        <div className={styles.inputContainer}>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={isDarkMode ? '> EMAIL *' : 'Tu email *'} 
            required
            maxLength={VALIDATION_RULES.email.max}
            className={getInputClasses(styles, formStatus.fieldErrors, 'email')}
          />
          
          {formStatus.fieldErrors.email && (
            <p className={styles.fieldError}>
              {isDarkMode ? `> ERROR: ${formStatus.fieldErrors.email}` : formStatus.fieldErrors.email}
            </p>
          )}
        </div>
      </div>
      
      {/* Campo de asunto */}
      <div className={styles.inputContainer}>
        <input 
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder={isDarkMode ? '> SUBJECT' : 'Asunto'} 
          maxLength={VALIDATION_RULES.subject.max}
          className={getInputClasses(styles, formStatus.fieldErrors, 'subject')}
        />
      </div>
      
      {/* Campo de mensaje */}
      <div className={styles.inputContainer}>
        <textarea 
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={isDarkMode ? '> MESSAGE *' : 'Tu mensaje *'} 
          required
          maxLength={VALIDATION_RULES.message.max}
          className={`${getInputClasses(styles, formStatus.fieldErrors, 'message')} ${styles.textarea}`}
        />
        <div className={styles.characterCountContainer}>
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
    </>
  );
};

export default ContactFormFields;