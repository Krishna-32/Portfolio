import React, { useRef } from "react";
import Flower from "../components/svg/flower";
import Butterfly from "../components/butterfly";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loader() {
  const pathRefFlower = useRef(null);
  const pathRefButterfly = useRef(null);

  useGSAP(() => {
    const flowerPath = pathRefFlower.current;
    const butterflyPath = pathRefButterfly.current;

    // Animate flower path
    if (flowerPath) {
      // @ts-ignore
      const flowerLength = flowerPath.getTotalLength();
      gsap.set(flowerPath, {
        strokeDasharray: flowerLength-0.5,
        strokeDashoffset: flowerLength,
      });

      // Animate butterfly path right after the flower
      let tl = gsap.timeline();

      tl.to(flowerPath, {
        strokeDashoffset: 0,
        repeat: 1,
        yoyo: true,
        duration: 2,
        ease: "power2.inOut",
      });

      // Animate butterfly after flower finishes (in the timeline)
      if (butterflyPath) {
        // @ts-ignore
        const butterflyLength = butterflyPath.getTotalLength();
        gsap.set(butterflyPath, {
          strokeDasharray: butterflyLength,
          strokeDashoffset: butterflyLength,
        });

        tl.to(butterflyPath, {
          strokeDashoffset: 0,
          repeat: 1,
          yoyo: true,
          duration: 2,
          ease: "power2.inOut",
        });
      }
    }
  }, []);

  return (
    <div className="main-container w-screen h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        <div>
          <Flower color="white" strokewidth="5" pathRefFlower={pathRefFlower} />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        <div>
          <Butterfly color="white" strokewidth="5" pathRefButterfly={pathRefButterfly} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
