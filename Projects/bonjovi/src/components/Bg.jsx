import React from 'react'

function Bg(props) {
  return (
    <div className={`w-full h-screen bg-${props.bgcolor} text-${props.color} flex flex-col items-center justify-center`}>
        <span className='font-founder text-[.9vw]'>
            {props.date}
        </span>

        <h1 className='uppercase font-formulab text-[10vw]'>
            {props.title}
        </h1>
    </div>
  )
}

export default Bg