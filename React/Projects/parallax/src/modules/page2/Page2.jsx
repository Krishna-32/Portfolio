import React, { useRef, useEffect } from 'react'
import styles from "./Page2.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page2() {
  const main = useRef();
  const back = useRef();
  const front = useRef();

  
  useEffect(() => {
    // Main Cloud Animation
    gsap.to(main.current, {
      y: -200,
      scrollTrigger: {
        trigger: main.current,
        start: 'top center',
        end: '700 center',
        scrub: true,
        markers: false,
      }
    });

    gsap.to(back.current, {
        y: -250,
        scrollTrigger: {
          trigger: back.current,
          start: '-350 center',
          end: 'bottom center',
          scrub: true,
          markers: false,
        }
    });

    gsap.to(front.current, {
      y: -300,
      scrollTrigger: {
        trigger: front.current,
        start: '-370 center',
        end: 'bottom center',
        scrub: true,
        markers: false,
      }
  });

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img ref={main} id={styles.main} src="/assets/mountains/m.png" alt="Main Mountain" />
        <img ref={back} id={styles.back} src="/assets/mountains/backmountains.png" alt="Back Mountains" />
        <img ref={front} id={styles.front} src="/assets/mountains/frontmountains.png" alt="Front Mountains" />
      </div>
    </div>
  );
}

