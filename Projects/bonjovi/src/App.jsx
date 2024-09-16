import React from 'react'
import Home from './modules/Home'
import Bg from './components/Bg'
import Navbar from './components/Navbar'
import Test1 from './Test1'
import Test2 from './Test2'

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

      <Test1/>
      <Test2/>

    </div>

    </>
    )
}

export default App