import React, { useEffect } from 'react';
import Home from './modules/Home';
import { Bg, Navbar, InnerDiv, ScrollAnimation, Camera } from './components'
import LocomotiveScroll from "locomotive-scroll";
import { Bon1, Bon2, Bon3, Bon4 } from './Images/Bon Jovi';
import { Fah1, Fah2, Fah3, Fah4, Fah5 } from './Images/Fahrenheit';
import { Slip1, Slip2, Slip3, Slip4 } from './Images/Slippery';


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

        {/* Wrap Page1 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Bg color='blackk' bgcolor='whitee' title='Bon Jovi' date='1983 - 1984'/>
          <InnerDiv>
            <Bon1 title='Album cover outtake'/>
            <Bon2 title='Early Band Promotion'/>
            <Bon3 title="Runaway tour t-shirt"/>         
            <Bon4 title="Jon's Runaway Tour Itinerary"/>         
          </InnerDiv>
        </ScrollAnimation>

        {/* Wrap Page2 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Bg color='whitee' bgcolor='blackk' title='7800° Fahrenheit' date='1985 - 1986'/> 
          <InnerDiv>
            <Fah1 title='Take a bow' text='white'/>
            <Fah2 title='7800° Fahrenheit Liner Notes' text='white'/>
            <Fah3 title='Early Magazine Cover' text='white'/>
            <Fah4 title='“ONLY LONELY” VIDEO SHOOT' text='white'/>
            <Fah5 title='RICHIE AND JON' text='white'/>
          </InnerDiv>
        </ScrollAnimation>

        {/* Wrap Page3 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Bg color='blackk' bgcolor='whitee' title='SLIPPERY WHEN WET' date='1986 - 1988'/>
          <InnerDiv>
            <Slip1 title={<Camera/>}/>
            <Slip2 title='Slippery When Wet Tour Program'/>
            <Slip3 title="1988 Press Photo"/>         
            <Slip4 title="Special Guest Little Steven"/>         
          </InnerDiv>
        </ScrollAnimation>

      </div>
    </>
  );
}

export default App;
