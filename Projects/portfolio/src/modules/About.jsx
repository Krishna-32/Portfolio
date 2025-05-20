import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const wrapperRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add({
        isMobile: "(max-width: 1023px)",
        isDesktop: "(min-width: 1024px)"
      }, (context) => {
        let { isMobile, isDesktop } = context.conditions;

        if (isMobile) {
          gsap.to(firstRef.current, {
            y: "-12vmax",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              ease: "linear",
              markers: false,
            },
          });

          gsap.to(secondRef.current, {
            y: "-8vmax",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              ease: "linear",
              markers: false,
            },
          });
        }

        if (isDesktop) {
          gsap.to(firstRef.current, {
            y: "-18vmax",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              ease: "linear",
              markers: false,
            },
          });

          gsap.to(secondRef.current, {
            y: "-12vmax",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              ease: "linear",
              markers: false,
            },
          });
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="wrapper h-full flex flex-col justify-center items-center mt-40 overflow-visible"
    >
      <div ref={firstRef} className="first overflow-visible">
        <span className="uppercase font-seasonr text-whitee text-[9vmax] lg:text-[30vh]">
          Hello!
        </span>
      </div>

      <div ref={secondRef} className="second text-center overflow-visible">
        <span className="uppercase font-seasonb text-whitee text-[4vmax] leading-[40px] lg:leading-[70px]">
          I'm an Experienced
          <br />
          Developer
          <br />
          Ready to work
        </span>
      </div>
      <div className="third flex flex-col items-center justify-center lg:w-2/3 lg:text-[2.5vw] lg:font-extralight gap-10 text-center px-4 text-whitee font-halyard overflow-visible">
        <p>
          Greetings, I&apos;m Krishna, a skilled designer and developer with a passion for creating impactful digital experiences. With extensive experience in modern web development and design principles, I consistently deliver sophisticated solutions that combine technical excellence with refined aesthetics. Based in Toronto, I&apos;ve established myself as a professional who brings both innovation and reliability to every project.
        </p>
        <p>
          My professional approach combines strategic design thinking with technical proficiency in modern frameworks and technologies. I excel at architecting complex systems into elegant, performant applications that serve real business needs. My methodology emphasizes clean, efficient solutions that seamlessly integrate form and function, resulting in products that exceed client expectations.
        </p>
        <p>
          With a proven track record of successful projects, I bring both creative vision and technical expertise to every engagement. I specialize in developing scalable, future-proof solutions that ensure optimal performance and exceptional user experiences. I welcome opportunities to collaborate on challenging projects that require innovative thinking and technical excellence in creating impactful digital solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
