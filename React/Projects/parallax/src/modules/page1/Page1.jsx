import React, { useRef, useEffect } from 'react';
import styles from "./Page1.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page1() {
  const main = useRef();
  const back = useRef();
  const front = useRef();

  useEffect(() => {
    // Main Cloud Animation
    gsap.to(main.current, {
      y: -200,
      scrollTrigger: {
        trigger: main.current,
        start: '-100 center',
        end: '400 center',
        scrub: true,
        markers: false,
      }
    });

    // Back Cloud Animation
    gsap.to(back.current, {
      y: -280,
      scrollTrigger: {
        trigger: back.current,
        start: '-390 center',
        end: '150 center',
        scrub: true,
        markers: false,
      }
    });

    // Front Cloud Animation
    gsap.to(front.current, {
      y: -250,
      scrollTrigger: {
        trigger: front.current,
        start: '-250 center',
        end: '150 center',
        scrub: true,
        markers: false,
      }
    });

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img ref={main} id={styles.main} src="/assets/clouds/mainclouds.png" alt="Main Cloud" />
        <img ref={back} id={styles.back} src="/assets/clouds/backclouds.png" alt="Back Clouds" />
        <img ref={front} id={styles.front} src="/assets/clouds/frontclouds.png" alt="Front Clouds" />
      </div>
    </div>
  );
}
