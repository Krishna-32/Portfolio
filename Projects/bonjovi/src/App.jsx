import React, { useEffect } from 'react';
import Home from './modules/Home';
import { Bg, Navbar, InnerDiv, ScrollAnimation, Camera } from './components'
import { Bon1, Bon2, Bon3, Bon4 } from './Images/Bon Jovi';
import { Fah1, Fah2, Fah3, Fah4, Fah5 } from './Images/Fahrenheit';
import { Slip1, Slip2, Slip3, Slip4 } from './Images/Slippery';
import { Abt1,Abt2, Abt3, Abt4, Abt5 } from './Images/About';
import { Com1, Com2, Com3 } from './Images/Coming';
import LocomotiveScroll from "locomotive-scroll";
import Marquee from './modules/Marquee/Marquee';
import About from './modules/About';
import Coming from './modules/Coming';
import Footer from './modules/Footer';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div onContextMenu={handleContextMenu} className='wrapper overflow-x-hidden'>
        <Navbar className="fixed z-[99] w-full top-0" />
        <div>
          <Home />
        </div>
        
        <div className='overflow-y-hidden'>

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

        <div>
          <Marquee/>
        </div>

        <div>
          <About title='get ready' date='1975 - 1982' img={<Abt1/>}/>
          <About title='the origin story' date='1982 - 1983' img={<Abt2/>}/>
          <About title='bon jovi' date='1983 - 1985' img={<Abt3/>}/>
          <About title='7800° Fahrenheit' date='1985 - 1986' img={<Abt4/>}/>
          <About title='slippery when wet' date='1986 - 1988' img={<Abt5/>}/>
        </div>

        <div>
          <Coming title='these days' img={<Com1/>}/>
          <Coming title='crush' img={<Com2/>}/>
          <Coming title='bounce' img={<Com3/>}/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>
    </>
  );
}

export default App;
