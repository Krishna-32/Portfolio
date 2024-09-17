import React, { createContext, useState } from "react";

// Create a context
const HoverContext = createContext();

// Clickable component
const Clickable = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContext.Provider value={isHovered}>
      <div
        className="cursor-pointer flex flex-col gap-4 items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    </HoverContext.Provider>
  );
};

// Export Clickable and HoverContext
export { Clickable, HoverContext };
