import React from "react"

function Main() {

  return (
    <div className='relative'>

      <div>
        <img src="/gucci/main.avif" alt="" />
      </div>

      <div className='absolute w-full bottom-24 flex flex-col gap-6 items-center text-white font-[gucci-bold]'>
          <span className='text-3xl font-[gucci-medium]'>
            Men's Fall Winter 2024
          </span>

          <button className='bg-white text-black text-[.8vw] px-6 py-4 rounded-sm cursor-pointer'>
            EXPLORE THE COLLECTION
          </button>
        </div>

    </div>
  )
}

export default Main