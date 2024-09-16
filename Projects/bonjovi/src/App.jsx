import React from 'react'
import Home from './modules/Home'
import Bg from './components/Bg'
import Navbar from './components/Navbar'

function App() {
  return (
    <>

    

    <div className='wrapper'>

      <Navbar className="fixed z-[99] w-full top-0"/>

      <div>
        <Home/>
      </div>

      <div>
        <Bg color='blackk' bgcolor='whitee' title='Bon jovi' date='1983 - 1984'/>
      </div>

      <div>
        <Bg color='whitee' bgcolor='blackk' title='7800° fahrenhiet' date='1985 - 1986'/>
      </div>

    </div>

    </>
    )
}

export default App