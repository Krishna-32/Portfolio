import React from 'react';
import Home from './modules/Home';
import Bg from './components/Bg';
import Navbar from './components/Navbar';
import Test1 from './Test1';
import Test2 from './Test2';
import InnerDiv from './InnerDiv'; // Import the InnerDiv component
import Section from './Section'; // Import the Section component

function App() {
  return (
    <>
      <div className='wrapper'>
        <Navbar className="fixed z-[99] w-full top-0" />
        <div>
          <Home />
        </div>
        <div>
          <Bg color='blackk' bgcolor='whitee' title='Bon Jovi' date='1983 - 1984' />
        </div>
        <div>
          <Bg color='whitee' bgcolor='blackk' title='7800° Fahrenheit' date='1985 - 1986' />
        </div>

        {/* Wrap Test1 with Section */}
        <Section duration={1000}>
          <Test1 />
          <InnerDiv>
            <span>Hi</span>
            <span>Hello</span>
            <span>Amigos</span>
            <span>Namaste</span>
            <span>Ola</span>
          </InnerDiv>
        </Section>

        {/* Wrap Test2 with Section */}
        <Section duration={1000}>
          <Test2 />
          <InnerDiv>
            <span>Oppai</span>
            <span>Sugoii</span>
            <span>Arigato</span>
          </InnerDiv>
        </Section>

        <Section duration={1000}>
          <Test1 />
          <InnerDiv>
            <span>Hi</span>
            <span>Hello</span>
            <span>Amigos</span>
            <span>Namaste</span>
            <span>Ola</span>
          </InnerDiv>
        </Section>

        {/* Wrap Test2 with Section */}
        <Section duration={1000}>
          <Test2 />
          <InnerDiv>
            <span>Oppai</span>
            <span>Sugoii</span>
            <span>Arigato</span>
          </InnerDiv>
        </Section>

      </div>
    </>
  );
}

export default App;
