import React from 'react'

function Home() {
  return (
    <div className='wrapper relative bg-blackk w-full h-screen flex overflow-hidden'>

        <div className='left pt-20'>

            <div className='top pl-[12vw]'>
                <p className='text-whitee font-founder tracking-tighter text-xl leading-2'>
                Take a journey through four decades and <br />
                counting of Bon Jovi history. With millions of <br />
                records sold and fans rocked, this collection <br />
                offers a glimpse into the band's ever- <br />
                expanding personal archives. Join us and <br />
                experience just a few behind-the-scenes <br />
                moments from an extraordinary 40-year <br />
                legacy.
                </p>
            </div>


            <div className='bottom absolute -bottom-10 left-4 flex flex-col gap-4'>

                <div className='btm-top flex gap-20 text-white font-founder font-light text-[.8vw]'>
                    <span className='text-md tracking-wide'>
                        EXHIBITION
                    </span>

                    <span className='bg-whitee text-center text-blackk rounded-sm w-[5.2vw] text-md tracking-wide'>
                        1984-2024
                    </span>
                </div>

                <div className='btm-btm'>
                    <h1 className='uppercase font-formulab text-whitee text-[10vw] overflow-hidden'>"We'll make it i swear"</h1>
                </div>

            </div>

        </div>


        <div className='right absolute right-0 w-[40vw] translate-y-[40%] rotate-[15deg]'>

            <img src="https://cdn.sanity.io/images/eieptkte/production/693879401614a2066032b5ec91b37ac49901991e-800x675.png?w=1200&q=75&fit=clip&auto=format" alt="" />

        </div>

    </div>
  )
}

export default Home