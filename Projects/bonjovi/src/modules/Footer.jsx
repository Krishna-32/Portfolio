import React from "react";
import Arrow from "../components/Arrow";
import AnimatedText from "../components/AnimatedText";

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
            <AnimatedText text="Exhibits" />
            <AnimatedText text="Studio" />
            <AnimatedText text="The Road" />
            <AnimatedText text="Office" />
          </div>
          <div className="flex flex-col w-1/4 pt-4">
            <AnimatedText text="About" />
            <AnimatedText text="Search" />
            <AnimatedText text="Shop" />
            <AnimatedText text="Sign in" />
          </div>
          <div className="flex flex-col w-1/4 pt-4">
            <AnimatedText text="Bon Jovi Official" />
            <AnimatedText text="Newsletter" />
            <AnimatedText text="Privacy" />
            <AnimatedText text="Terms" />
          </div>
          <div className="flex flex-col w-1/4 pt-4">
            <span>Site by</span>
            <AnimatedText text="Krishna" />
            <span>Powered by</span>
            <AnimatedText text="Krishna" />
          </div>
        </div>
      </div>

      <div className="bg-blackk font-formulab text-whitee text-[7vw] uppercase flex items-center justify-between px-4 -my-8">
        <span className="w-1/5 text-whitee font-founder text-[.8vw] tracking-widest uppercase translate-y-4">
          © Bon Jovi 2024
        </span>

        <div className="relative overflow-hidden group cursor-pointer">
          <span className="font-formulab text-[8vw] text-whitee uppercase block transition-transform duration-300 group-hover:-translate-y-full relative z-10">
            visit backstage shop
          </span>
          <span className="font-formulab text-[8vw] text-whitee uppercase block absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            visit backstage shop
          </span>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <span className="text-white text-[7vw] block transition-transform duration-300 group-hover:translate-x-full relative z-10">
            <Arrow />
          </span>
          <span className="text-white text-[7vw] block absolute inset-0 transition-transform duration-300 -translate-x-full group-hover:translate-x-0">
            <Arrow />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
