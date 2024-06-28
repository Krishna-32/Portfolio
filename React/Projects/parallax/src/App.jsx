import React, { useEffect } from 'react';
import Page1 from "./modules/page1/Page1";
import Page2 from "./modules/page2/Page2";
import Lenis from '@studio-freight/lenis';
import Page3 from './modules/page3/Page3';
import Page4 from './modules/page4/Page4';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // you can use different easing functions
      smooth: true,
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (  
    <>
      <div id="page1">
        <Page1 />
      </div>
      <div id="page2">
        <Page2 />
      </div>
      <div id="page3">
        <Page3 />
      </div>
      <div id="page4">
        <Page4 />
      </div>
    </>
  );
}

export default App;
