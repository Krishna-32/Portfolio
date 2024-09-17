import React, { useContext } from "react";
import { HoverContext } from "./Clickable"; // Adjust the import path as necessary

// Svg component
const Svg = () => {
  const isHovered = useContext(HoverContext); // Consume the context

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
      className={`absolute bottom-2 right-2 mix-blend-difference transition-transform duration-300 ${isHovered ? '-rotate-[180deg] scale-0' : ''}`}
      width="24"
      height="24"
    >
      <path
        fill="white" // Change fill color to white
        stroke="white" // Add stroke color for boldness
        strokeWidth="1.5" // Adjust stroke width to make it bold
        fillRule="evenodd"
        d="M0 1v6h1V1h6V0H0v1ZM28 1v6h-1V1h-6V0h7v1ZM1 28h6v-1H1v-6H0v7h1ZM27 28h-6v-1h6v-6h1v7h-1Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

// Export Svg
export default Svg;
