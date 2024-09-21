// icon:arrow-right-thick | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function Arrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 10v4h9l-3.5 3.5 2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5 13 10H4z" />
    </svg>
  );
}

export default Arrow;
