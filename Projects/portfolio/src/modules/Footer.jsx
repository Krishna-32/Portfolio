import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
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
            y: "-5vmax",
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
           y: "-4vmax",
           scrollTrigger: {
             trigger: secondRef.current,
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
            y: "-3vmax",
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
            y: "-4vmax",
            scrollTrigger: {
              trigger: secondRef.current,
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

  const handleEmailClick = () => {
    window.location.href = "mailto:kaiavi71@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/krishna-guptaa/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Krishna-32/Portfolio/tree/main/Projects", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/krix.naa", "_blank");
  };

  return (
    <div
      ref={wrapperRef}
      className="wrapper relative h-full lg:h-screen flex flex-col justify-center items-center mt-10 lg:mt-40 overflow-visible"
    >
      <div ref={firstRef} className="first overflow-visible">
        <span className="uppercase font-seasonr text-whitee tracking-tighter text-[7vmax] lg:text-[30vh]">
          Let's Talk
        </span>
      </div>

      <div ref={secondRef} className="second text-center overflow-visible">
        <span className="uppercase font-seasonb text-whitee text-[3.2vmax] lg:text-[4vw] leading-[30px] lg:leading-[70px]">
          <span className="block hover:text-greyy transition-colors" onClick={handleEmailClick}>
            Email
          </span>
          <span className="block hover:text-greyy transition-colors" onClick={handleLinkedInClick}>
            LinkedIn
          </span>
          <span className="block hover:text-greyy transition-colors" onClick={handleGithubClick}>
            Github
          </span>
          <span className="block hover:text-greyy transition-colors" onClick={handleInstagramClick}>
            Instagram
          </span>
        </span>
      </div>
      <div className="third text-center text-whitee text-[12.8px] pb-10 lg:pb-0 tracking-wider font-halyard">
        <div className="uppercase">© {new Date().getFullYear()}. DEV BY <span className="text-whitee uppercase hover:text-greyy transition-colors">Krishna</span></div>
      </div>
    </div>
  );
}

export default Footer;
