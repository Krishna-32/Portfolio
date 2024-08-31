import React from 'react'
import Session from './Session'
import { Link } from 'react-router-dom'

function Navbar() {

    const navItems = [
        {label: 'Home', path: '/'},
        {label: 'Saved', path: '/saved'},
        {label: 'Profile', path: '/profile'},
    ]
    

  return (
    <div className='flex justify-around px-16 py-6 bg-black text-white text-xl'>

        <div className='flex gap-20 cursor-pointer'>
            {navItems.map((items,index) => {
                return <Link to={items.path} key={index}>{items.label}</Link>
            })}
        </div>

        <div className='cursor-pointer'>
            <Link to='/auth'><Session/></Link>
        </div>
    </div>
  )
}

export default Navbar