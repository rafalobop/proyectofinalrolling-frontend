import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookies = () => {
  return (
    <CookieConsent
      debug={true}
      location="top"
      buttonText="Acepto"
      style={{ background: '#084298' }}
      buttonStyle={{ color: '#fff', fontSize: '14px', background: '#fff' }}
      expires={150}
      onAccept={() => {
        alert('La aceptación se activó al hacer clic en el botón Aceptar');
      }}
    >
      Este sitio creado por CODESCHOOL cumple las políticas y utiliza cookies.
      Si continúa utilizando este sitio asumiremos que está de acuerdo.{' '}
    </CookieConsent>
  );
};

export default Cookies;
