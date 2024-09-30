import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const wrapperRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(firstRef.current, {
        y: "-12vh",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
        },
      });

      gsap.to(secondRef.current, {
        y: "-8vh",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="wrapper h-screen flex flex-col justify-center items-center my-40 overflow-visible"
    >
      <div ref={firstRef} className="first overflow-visible">
        <span className="uppercase font-seasonr text-whitee text-[9vmax]">
          Hello!
        </span>
      </div>

      <div ref={secondRef} className="second text-center overflow-visible">
        <span className="uppercase font-seasonb text-whitee text-[4vmax] leading-[40px]">
          I'm a Junior lvl
          <br />
          Designer
          <br />
          Ready to work
        </span>
      </div>
      <div className="third flex flex-col gap-10 text-center px-4 text-whitee font-halyard overflow-visible">
        <p>
          Hey there! I'm a passionate design student at Georgian@ilac, set to graduate in 2025. My focus is on creating visually impactful yet beautifully simple designs. Toronto is where I call home, and it's here that I've been honing my skills in graphic design while also diving into the world of React development.
        </p>
        <p>
          What really drives me is the challenge of blending creative concepts with technical solutions. I love taking complex ideas and transforming them into clean, intuitive designs that resonate with people. It's like solving an intricate puzzle, but with the added thrill of creating something visually stunning.
        </p>
        <p>
          Each day, I'm excited to push the boundaries of design. For me, it's not just about aesthetics – it's about crafting experiences that evoke emotion and leave a lasting impression. I'm eager to bring my unique perspective to the table and collaborate on projects that make a real impact. Let's create something extraordinary together!
        </p>
      </div>
    </div>
  );
}

export default About;
