import React from "react";

const Flower = ({ color, strokewidth, pathRefFlower }) => {
  return (
    <svg
      width="128"
      height="341"
      viewBox="0 0 128 341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRefFlower}
        d="M47.8069 157.5C-29.6931 154.5 25.1447 216.392 52.3069 252C79.4691 287.608 84.4292 332.951 65.8069 338C47.1846 343.049 28.9559 279.193 56.807 233.5C84.658 187.807 67.4444 105.569 71.807 86C76.1696 66.4308 32.7732 -5.74024 8.80709 14.5C-15.1591 34.7402 33.6652 94.5276 79.307 86C124.949 77.4724 132.191 14.0573 119.807 14.5C107.423 14.9426 86.8069 32.5 86.8069 32.5C78.5648 17.0806 79.307 2.50003 65.8069 2.5C52.3068 2.49997 53.5138 8.36334 47.8069 19"
        stroke={color}
        strokeWidth={strokewidth}
        fill="none"
      />
    </svg>
  );
};

export default Flower;
