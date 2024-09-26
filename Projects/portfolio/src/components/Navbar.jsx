import React from 'react'

function Navbar() {
  return (
    <div className='wrapper h-full w-full py-2 px-4 lg:px-12   '>
      <div className='flex justify-between items-center text-whitee font-halyard lg:text-[1.5vw] uppercase'>
        <span className='overflow-hidden cursor-pointer'>
          work
        </span>

        <img className='w-10 cursor-pointer' src="/logo.svg" alt="" />

        <span className='overflow-hidden cursor-pointer'>
          about
        </span>
      </div>
    </div>
  )
}

export default Navbar