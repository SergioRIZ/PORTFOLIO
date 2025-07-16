import React from 'react';

const ContactFormSubmit = ({ formStatus, styles, isDarkMode }) => {
  const isDisabled = formStatus.loading || Object.keys(formStatus.fieldErrors).some(key => formStatus.fieldErrors[key]);

  return (
    <button 
      type="submit" 
      disabled={isDisabled}
      className={`${styles.button} ${
        isDisabled ? styles.buttonDisabled : styles.buttonEnabled
      }`}
    >
      {formStatus.loading ? (
        <>
          <div className={styles.spinner}></div>
          <span>
            {isDarkMode ? (
              <>
                <span className="hidden sm:inline">ENVIANDO_EMAIL...</span>
                <span className="sm:hidden">ENVIANDO...</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Enviando email...</span>
                <span className="sm:hidden">Enviando...</span>
              </>
            )}
          </span>
        </>
      ) : (
        <span>
          {isDarkMode ? (
            <>
              <span className="hidden sm:inline">SEND-EMAIL()</span>
              <span className="sm:hidden">ENVIAR()</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Enviar Email</span>
              <span className="sm:hidden">Enviar</span>
            </>
          )}
        </span>
      )}
    </button>
  );
};

export default ContactFormSubmit;