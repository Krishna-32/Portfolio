import React from 'react';
import Home from './modules/Home';
import Bg from './components/Bg';
import Navbar from './components/Navbar';
import InnerDiv from './components/InnerDiv'; // Import the InnerDiv component
import ScrollAnimation from './components/ScrollAnimation'; // Import the ScrollAnimation component
import Img1 from './Images/Bon Jovi/Img1'
import Img4 from './Images/Bon Jovi/Img4'

function App() {
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
