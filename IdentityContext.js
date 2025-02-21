import React, { createContext, useState } from 'react';

export const IdentityContext = createContext();

export const IdentityProvider = ({ children }) => {
  const [idUploaded, setIdUploaded] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);

  return (
    <IdentityContext.Provider value={{ idUploaded, setIdUploaded, selfieUploaded, setSelfieUploaded }}>
      {children}
    </IdentityContext.Provider>
  );
};