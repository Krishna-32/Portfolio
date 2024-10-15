// ScrollContext.js
import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollCount, setScrollCount] = useState(0);
  
  return (
    <ScrollContext.Provider value={{ scrollCount, setScrollCount }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
