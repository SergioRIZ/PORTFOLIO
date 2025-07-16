import React from 'react';

const ContactFormAlerts = ({ formStatus, styles, isDarkMode }) => {
  if (!formStatus.success && !formStatus.error) return null;

  return (
    <>
      {formStatus.success && (
        <div className={styles.successAlert}>
          <p className={styles.successText}>
            {isDarkMode ? (
              <>
                <span className="hidden sm:inline">
                  &gt; STATUS: SUCCESS - Email enviado correctamente a sroldan.portfolio@gmail.com!
                </span>
                <span className="sm:hidden">&gt; SUCCESS - Email enviado!</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">
                  ✅ ¡Email enviado correctamente! Te responderé pronto.
                </span>
                <span className="sm:hidden">✅ ¡Email enviado!</span>
              </>
            )}
          </p>
        </div>
      )}
      
      {formStatus.error && (
        <div className={styles.errorAlert}>
          <p className={styles.errorText}>
            {isDarkMode ? (
              <>
                <span className="hidden sm:inline">&gt; ERROR: {formStatus.error}</span>
                <span className="sm:hidden">&gt; ERROR</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">❌ {formStatus.error}</span>
                <span className="sm:hidden">❌ Error al enviar</span>
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default ContactFormAlerts;