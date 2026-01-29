import React, {useEffect, useState} from 'react'

function Header() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full flex justify-between items-center">
      <img
        src="/src/assets/logo.png"
        className={`${windowWidth > 900 ? "w-[15vw]" : "w-[20vh]"}`}
        alt="logo"
      />


      <p className={`${windowWidth > 900 ? "text-[1.32vw]" : "text-[1vh]"} pr-5`}>Are you a business owner?</p>
    </div>
  );
}

export default Header;
