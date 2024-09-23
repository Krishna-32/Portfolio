import React from "react";
import Arrow from "../components/Arrow";

function Footer() {
  return (
    <div className="wrapper flex flex-col relative overflow-hidden">
      <div className="w-full h-[16vw] bg-blackk flex">
        <div className="w-2/5 pl-4 pt-4">
          <img
            className="w-[16vw] object-contain"
            src="https://backstage.bonjovi.com/_next/image?url=%2Flogo-silver-sm.png&w=128&q=75"
            alt="Bon Jovi logo"
          />
        </div>

        <div className="w-4/5 flex gap-10 justify-between font-founder text-whitee uppercase text-[.9vw]">
          <div className="flex flex-col w-1/4 pt-4">
            <span>Exhibits</span>
            <span>Studio</span>
            <span>The Road</span>
            <span>Office</span>
          </div>
          <div className="flex flex-col w-1/4 pt-4">
            <span>About</span>
            <span>Search</span>
            <span>Shop</span>
            <span>Sign in</span>
          </div>
          <div className="flex flex-col w-1/4 pt-4">
            <span>Bon Jovi Official</span>
            <span>Newsletter</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
          <div className="flex flex-col w-1/4 pt-4">
            <span>Site by</span>
            <span>Krishna</span>
            <span>Powered by</span>
            <span>Krishna</span>
          </div>
        </div>
      </div>

      <div className="bg-blackk font-formulab text-whitee text-[7vw] uppercase flex items-center justify-between px-4 -my-8">
        <span className="w-1/5 text-whitee font-founder text-[.8vw] tracking-widest uppercase translate-y-4">
          © Bon Jovi 2024
        </span>

        <span>visit backstage shop</span>

        <Arrow />
      </div>
    </div>
  );
}

export default Footer;
