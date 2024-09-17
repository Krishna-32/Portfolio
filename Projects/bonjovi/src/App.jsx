import React from 'react';
import Home from './modules/Home';
import Bg from './components/Bg';
import Navbar from './components/Navbar';
import Test1 from './Test1';
import Test2 from './Test2';
import InnerDiv from './InnerDiv'; // Import the InnerDiv component
import ScrollAnimation from './ScrollAnimation'; // Import the ScrollAnimation component

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

        {/* Wrap Test1 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Bg color='blackk' bgcolor='whitee' title='Bon Jovi' date='1983 - 1984'/>
          <InnerDiv>
            <span className='w-[65%] flex flex-col gap-4 items-center'>
              <img
              alt="Scattered artefact image"
              loading="lazy"
              width="1920"
              height="1500"
              decoding="async"
              className="h-auto w-full"
              style={{ color: 'transparent' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=384&q=75&fit=clip&auto=format 384w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=640&q=75&fit=clip&auto=format 640w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=750&q=75&fit=clip&auto=format 750w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=828&q=75&fit=clip&auto=format 828w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=1080&q=75&fit=clip&auto=format 1080w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=1200&q=75&fit=clip&auto=format 1200w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=1920&q=75&fit=clip&auto=format 1920w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=2048&q=75&fit=clip&auto=format 2048w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=3840&q=75&fit=clip&auto=format 3840w
              "
              src="https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=3840&q=75&fit=clip&auto=format"
            />

              <span className='font-founder text-sm uppercase'>Album Cover Outtake</span>

            </span>

            <span>Hello</span>
            <span>Amigos</span>
            <span>Namaste</span>
            <span>Ola</span>
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

        <ScrollAnimation duration={1000}>
          <Test1 />
          <InnerDiv>
            <span>Hi</span>
            <span>Hello</span>
            <span>Amigos</span>
            <span>Namaste</span>
            <span>Ola</span>
          </InnerDiv>
        </ScrollAnimation>

        {/* Wrap Test2 with ScrollAnimation */}
        <ScrollAnimation duration={1000}>
          <Test2 />
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
