// import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      visible={true}
      strokeColor="#03C03C" // If strokeWidth is necessary, check if it is valid.
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      // wrapperStyle={{}}
      // wrapperClass=""
      // Use size if that's the valid prop for dimensions
      // size={96} // Add this if `size` is a valid prop
    />
  );
}

export default Loader;
