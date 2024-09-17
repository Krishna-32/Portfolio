// Navbar.js
import React from 'react';

function Navbar({ className }) {
  return (<>
    <div className={`wrapper text-whitee mix-blend-difference ${className} font-founder uppercase pt-4 px-4 text-[0.9vw] flex items-center justify-between`}>
      
        <div className='left flex gap-6'>
            {['exhibits', '|', 'studio', 'the road', 'office'].map((itm, idx)=>{
                return <span
                className='cursor-pointer'
                key={idx}>
                    {itm}
                </span>
            })}
        </div>


        <div className='right flex gap-6 items-center'>
            {['about', 'search', 'newsletter', 'sign in', 'shop'].map((itm, idx)=>{
                return <span key={idx} className={`${idx == 4 && 'bg-whitee text-blackk rounded-sm w-12 text-center'} cursor-pointer`}>
                    {itm} 
                </span>
            })}
            <div className='cursor-pointer'>
            <svg width={'1.2vw'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="11.879 13.214 17.431 16.621" className="null stroke-white"><path d="M13.5 20.412v2M16.793 18.118v6.588M20.09 16.471v9.882M23.383 14v14.823M26.676 18.118v6.588"></path></svg>
            </div>
        </div>

    </div>

    <div className='mid fixed z-50 flex items-center justify-center w-full overflow-hidden'>

        <img className='w-16 cursor-pointer' src="https://backstage.bonjovi.com/_next/image?url=%2Flogo-silver-sm.png&w=128&q=75" alt="" />

    </div>
  </>);
}

export default Navbar;
