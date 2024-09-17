import React, { useEffect } from 'react';
import Home from './modules/Home';
import Bg from './components/Bg';
import Navbar from './components/Navbar';
import InnerDiv from './components/InnerDiv'; 
import LocomotiveScroll from "locomotive-scroll";
import ScrollAnimation from './components/ScrollAnimation'; 
import Img1 from './Images/Bon Jovi/Img1'
import Img2 from './Images/Bon Jovi/Img2'
import Img3 from './Images/Bon Jovi/Img3'
import Img4 from './Images/Bon Jovi/Img4'
import Svg from './components/Svg';

function App() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <div className='wrapper'>
        <Navbar className="fixed z-[99] w-full top-0" />
        <div>
          <Home />
        </div>

        {/* Wrap Test1 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Bg color='blackk' bgcolor='whitee' title='Bon Jovi' date='1983 - 1984'/>
          <InnerDiv>
            <Img1 title='Album cover outtake'/>
            <Img2 title='Early Band Promotion'/>
            <Img3 title="Runaway tour t-shirt"/>         
            <Img4 title="Jon's Runaway Tour Itinerary"/>         
          </InnerDiv>
        </ScrollAnimation>

        {/* Wrap Test2 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Bg color='whitee' bgcolor='blackk' title='7800° Fahrenheit' date='1985 - 1986'/> 
          <InnerDiv>
            <span>Oppai</span>
            <span>Sugoii</span>
            <span>Arigato</span>
          </InnerDiv>
        </ScrollAnimation>

      </div>
    </>
  );
}

export default App;
