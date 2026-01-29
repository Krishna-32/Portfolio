import React, {useEffect, useState} from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Main() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative w-full -mt-10 overflow-hidden">
      <img
        src="/src/assets/mask2.png"
        className="w-full relative opacity-80"
        alt="main"
      />

      <div className={`absolute w-full flex gap-2 p-5 ${
          windowWidth > 900
          ? "-translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 mt-5 justify-center items-center gap-20"
          : windowWidth > 656
          ? "-translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 mt-5 gap-10"
          :windowWidth > 569 
          ? "top-17"
          : windowWidth > 488 
          ? "top-15"
          : windowWidth > 425
          ? "top-9"
          : "top-5"
      }`}>
        <div className={`${windowWidth > 900 ? "w-[50%]" : "w-full"} flex flex-col gap-2 h-full relative z-10 p-4`}>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/15 to-white/5 rounded-2xl backdrop-blur-sm"></div>
          <h1
            className={`font-bold leading-none text-black ${
              windowWidth < 390
                ? "text-[1.5vh]"
                : windowWidth > 900
                ? "text-[5vh]"
                : windowWidth > 701
                ? "text-[4.2vh]"
                : windowWidth > 656
                ? "text-[4vh]"
                : windowWidth > 619
                ? "text-[3.7vh]"
                : windowWidth > 569
                ? "text-[3.5vh]"
                : windowWidth > 488
                ? "text-[3.2vh]"
                : windowWidth > 425
                ? "text-[3vh]"
                : "text-[2.5vh]"
            }`}
          >
            FIFA 2026 Is Coming. Will Your Business Be Seen?
          </h1>
          <span className={`flex flex-wrap text-black ${
            windowWidth > 900
            ? "text-[2.2vh] leading-7"
            : windowWidth > 701
            ? "text-[2vh] leading-6"
            : windowWidth > 619
            ? "text-[1.8vh] leading-5"
            : windowWidth > 569
            ? "text-[1.5vh] leading-4"
            : "text-[1vh]"
          }`}>
            Toronto businesses have a<b>&nbsp;once-in-a-generational</b> opportunity. We help local brands get visibility, traffic, and customers during FIFA 2026.
          </span>
          <ul className={`font-bold text-black ${
            windowWidth > 900
            ? "text-[1.9vh]"
            : windowWidth > 732
            ? "text-[1.7vh]"
            : windowWidth > 619
            ? "text-[1.4vh]"
            : windowWidth > 569
            ? "text-[1.2vh]"
            : "text-[1vh]"
          }`}>
            <li className='flex items-center gap-1'><FaCheckCircle className='text-green-600'/>Local Toronto Focus</li>
            <li className='flex items-center gap-1'><FaCheckCircle className='text-green-600'/>No FIFA Affiliation</li>
            <li className='flex items-center gap-1'><FaCheckCircle className='text-green-600'/>Marketing & Visibility Experts</li>
            <li className='flex items-center gap-1'><FaCheckCircle className='text-green-600'/>Limited Business Slots</li>
          </ul>
        </div>
        <div className={`bg-white rounded-lg max-w-1/2 shadow-lg shadow-black/40  ${
          windowWidth < 390 
          ? "scale-[0.6] -mt-16 -mr-8" 
          : windowWidth > 900
          ? "scale-[1]"
          : windowWidth > 656
          ? "scale-[1] -mt-2 -mr-2"
          : windowWidth > 619
          ? "scale-[0.95] -mt-4 -mr-2"
          : windowWidth > 569
          ? "scale-[0.9] -mt-7 -mr-4"
          : windowWidth > 488
          ? "scale-[0.8] -mt-11 -mr-5" 
          : windowWidth > 425
          ? "scale-[0.7] -mt-12 -mr-7" 
          : "scale-[0.7] -mt-13 -mr-8"}`}>
          <form action="" className="flex flex-col p-4">
            <h1 className={`font-bold flex flex-col flex-wrap leading-none text-center ${
              windowWidth > 900 ? "text-2xl" : "text-md"
            }`}>
              Get Early Access <span className={windowWidth > 900 ? "text-lg" : "text-sm"}>for your business</span>
            </h1>
            <p className={`${windowWidth > 900 ? "text-[1.3vh]" : "text-[.9vh]"} mb-2 text-center`}>Leave your details. We'll explain how this works in a short call.</p>
            <input
              required
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={`p-1 border rounded mb-1 ${windowWidth > 900 ? "text-[1.5vh] p-2 mb-2" : "text-[1vh]"}`}
            />
            <input
              required
              type="text"
              name="businessName"
              placeholder="Business Name"
              className={`p-1 border rounded mb-1 ${windowWidth > 900 ? "text-[1.5vh] p-2 mb-2" : "text-[1vh]"}`}
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={`p-1 border rounded mb-1 ${windowWidth > 900 ? "text-[1.5vh] p-2 mb-2" : "text-[1vh]"}`}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className={`p-1 border rounded mb-1 ${windowWidth > 900 ? "text-[1.5vh] p-2 mb-2" : "text-[1vh]"}`}
            />
            <input
              type="url"
              name="website"
              placeholder="Website (Optional)"
              className={`p-1 border rounded mb-1 ${windowWidth > 900 ? "text-[1.5vh] p-2 mb-2" : "text-[1vh]"}`}
            />
            <select
              required
              name="businessCategory"
              className={`p-1 border rounded mb-1 ${windowWidth > 900 ? "text-[1.5vh] p-2 mb-2" : "text-[1vh]"}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select Business Category
              </option>
              <option value="restaurant">Restaurant</option>
              <option value="bar">Bar</option>
              <option value="retail">Retail</option>
              <option value="hotel">Hotel</option>
              <option value="entertainment">Entertainment</option>
              <option value="service">Service</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className={`bg-red-700 text-white rounded p-2 font-bold ${windowWidth > 900 ? "text-[1.5vh]" : "text-[1vh]"} hover:bg-gray-800 transition`}
            >
              Reserve My Spot
            </button>
            <p className={`${windowWidth > 900 ? "text-[1.5vh]" : "text-[0.8vh]"} text-center mt-2`}>
              No obligation. Limited businesses accepted.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Main