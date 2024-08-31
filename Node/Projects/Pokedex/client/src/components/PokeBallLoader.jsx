import React from "react";
import Lottie from "lottie-react";
import pokeballAnimation from "../animation/Animation - 1724797205704.json"; // Update the path accordingly

function PokeBallLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie animationData={pokeballAnimation} loop={true} />
    </div>
  );
}

export default PokeBallLoader;
