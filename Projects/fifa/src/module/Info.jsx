import React, {useEffect, useState} from 'react'

function Info() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='relative w-full flex flex-col justified-between items-center'>
      <img
        src={
          windowWidth > 500
            ? "/src/assets/maskC.png"
            : windowWidth < 721
            ? "/src/assets/maskB.png"
            : "/src/assets/maskA.png"
        }
        className="w-full h-auto mask-[linear-gradient(to_top,black_85%,transparent_100%)]"
        alt="img"
      />
      <div className={`absolute w-full flex flex-col justified-between items-center px-4 ${
        windowWidth > 900 ? "gap-5" : windowWidth > 640 ? "gap-4" : "gap-2"
      }`}>
        <h1 className={`pt-4 font-bold ${windowWidth > 900 ? "text-[2.5vw] pt-8" : windowWidth > 700 ? "text-[2.5vh]" : "text-[1.8vh]"}`}>Why Businesses Are Preparing Early</h1>

        <div className='flex w-full gap-2 px-2'>
          <div className='w-full bg-white overflow-hidden rounded-lg flex flex-col gap-4 p-2'>
            <img
              src="/src/assets/icon1.png"
              className="w-full rounded-[15%] h-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect]"
              alt="icon1"
            />
            <span className='w-full flex flex-col flex-wrap justify-between items-center text-center pt-1'>
              <h1 className={`font-bold ${
                windowWidth < 400 ? "text-[1vh]" 
                : windowWidth < 721 ? "text-[1.2vh]" 
                : "text-[2vh]"
              }`}>Massive Foot Traffic</h1>
              <p className={`w-[80%] text-center ${
                windowWidth < 400 ? "text-[0.7vh]" 
                : windowWidth > 900 ? "text-[1.7vh]"
                : windowWidth > 721 ? "text-[1vh]" 
                : "text-[0.8vh]"
              }`}>
                Millions of visitors across North America, with Toronto hosting key matches.
              </p>
            </span>
          </div>

          <div className='w-full bg-white overflow-hidden rounded-lg flex flex-col gap-4 p-2'>
          <img
              src="/src/assets/icon2.png"
              className="w-full rounded-[15%] h-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect]"
              alt="icon1"
            />
            <span className='w-full flex flex-col flex-wrap justify-between items-center text-center pt-1'>
            <h1 className={`font-bold ${
                windowWidth < 400 ? "text-[1vh]" 
                : windowWidth < 721 ? "text-[1.2vh]" 
                : "text-[2vh]"
              }`}>Digital Visibility Matters</h1>
             <p className={`w-[80%] text-center ${
                windowWidth < 400 ? "text-[0.7vh]" 
                : windowWidth > 900 ? "text-[1.7vh]"
                : windowWidth > 721 ? "text-[1vh]" 
                : "text-[0.8vh]"
              }`}>Fans search Google, Maps, Instagram before they walk in.</p>
            </span>
          </div>

          <div className='w-full bg-white overflow-hidden rounded-lg flex flex-col gap-4 p-2'>
          <img
              src="/src/assets/icon3.png"
              className="w-full rounded-[15%] h-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect]"
              alt="icon1"
            />
            <span className='w-full flex flex-col flex-wrap justify-between items-center text-center pt-1'>
            <h1 className={`font-bold ${
                windowWidth < 400 ? "text-[1vh]" 
                : windowWidth < 721 ? "text-[1.2vh]" 
                : "text-[2vh]"
              }`}>Early Movers Win</h1>
              <p className={`w-[80%] text-center ${
                windowWidth < 400 ? "text-[0.7vh]" 
                : windowWidth > 900 ? "text-[1.7vh]"
                : windowWidth > 721 ? "text-[1vh]" 
                : "text-[0.8vh]"
              }`}>Businesses that prepare early dominate attention.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;