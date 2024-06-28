import React, { useRef, useEffect } from 'react'
import styles from './Page3.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {

  const back = useRef();
  const mid = useRef();
  const front = useRef();

  useEffect(() => {
    // Main Cloud Animation
    gsap.to(back.current, {
      y: -200,
      scrollTrigger: {
        trigger: back.current,
        start: 'top center',
        end: '430 center',
        scrub: true,
        markers: false,
      }
    });

    gsap.to(mid.current, {
      y: -250,
      scrollTrigger: {
        trigger: mid.current,
        start: '-170 center',
        end: '350 center',
        scrub: true,
        markers: false,
      }
  });

  gsap.to(front.current, {
    y: -250,
    scrollTrigger: {
      trigger: front.current,
      start: '-250 center',
      end: '200 center',
      scrub: true,
      markers: false,
    }
});

}, []);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <img ref={back} id={styles.back} src="/assets/waves/back.png" alt="back Wave" />
        <img ref={mid} id={styles.mid} src="/assets/waves/m.png" alt="mid Waves" />
        <img ref={front} id={styles.front} src="/assets/waves/frontwave.png" alt="Front Waves" />
      </div>
    </div>
    </>
    
  );
}

export default Page3