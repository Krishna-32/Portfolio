import React, { useState } from "react";

const AnimatedText = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayedText, setDisplayedText] = useState(text);

  const handleMouseOver = (event) => {
    let iteration = 0;
    const originalText = text;
    const target = event.target;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayedText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    // Clear the interval when mouse leaves
    target.onmouseleave = () => {
      clearInterval(interval);
      setDisplayedText(originalText); // Reset the text when mouse leaves
    };
  };

  return (
    <h1
      className="animated-text cursor-pointer"
      onMouseOver={handleMouseOver}
      data-value={text}
    >
      {displayedText}
    </h1>
  );
};

export default AnimatedText;
