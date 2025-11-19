import React from "react";

const Butterfly = ({ color, strokewidth, pathRefButterfly }) => {
  return (
    <svg
      width="289"
      height="301"
      viewBox="0 0 289 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRefButterfly}
        d="M0 212.075C81 212.075 148.5 283.575 133 294.575C117.5 305.575 72.5 288.075 77.5 198.075C82.5 108.075 226.5 -11.9249 274.5 20.5749C322.5 53.0747 204 179.575 204 179.575C202.534 198.482 132.301 200.944 133 188.075C165.209 158.951 206.329 173.786 208.5 188.075C210.671 202.364 171.782 341.98 83 203.575C-5.78185 65.1703 92.5382 -33.5667 109.5 15.0751"
        stroke={color}
        strokeWidth={strokewidth}
        fill="none"
      />
    </svg>
  );
};

export default Butterfly;
