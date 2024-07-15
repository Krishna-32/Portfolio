import React from 'react';

function Nav() {
  return (
    <div className='w-full h-20 flex justify-between items-center px-16'>
      <div className="logo cursor-pointer">
        <h1>
          <span className='font-mediumNeue text-5xl'>K</span>
          <span className='font-regularNeue text-2xl'>rishna</span>
        </h1>
      </div>
      
      <div className="links flex gap-10">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
          <a key={index} className={`${index ===4 && "ml-32"} cursor-pointer font-regularNeue`} >{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Nav;
