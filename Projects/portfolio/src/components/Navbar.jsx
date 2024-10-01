import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  const [logoSrc, setLogoSrc] = useState('/logo.svg')

  return (
    <div className='wrapper h-full w-full py-2 px-4 lg:px-12   '>
      <div className='flex justify-between items-center text-whitee font-halyard lg:text-[1.5vw] uppercase'>
        <Link 
          to="work-section"
          smooth={true}
          duration={1000}
          delay={200}
          className='overflow-hidden hover:text-greyy transition-colors'
        >
          work
        </Link>

        <Link
          to="hero-section"
          smooth={true}
          duration={1000}
          delay={200}
        >
          <img 
            className='w-10' 
            src={logoSrc} 
            alt="Logo" 
            onMouseEnter={() => setLogoSrc('/logo_g.svg')}
            onMouseLeave={() => setLogoSrc('/logo.svg')}
          />
        </Link>

        <Link 
          to="about-section"
          smooth={true}
          duration={1000}
          delay={200}
          className='overflow-hidden hover:text-greyy transition-colors'
        >
          about
        </Link>
      </div>
    </div>
  )
}

export default Navbar