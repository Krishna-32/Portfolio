import React, { useState } from "react";
import ArrowUp from "../svgs/Arrowup";
import ArrowDown from "../svgs/Arrowdown";
import ArrowRight from "../svgs/Arrowright";

function Footer() {
  const [arrow, setArrow] = useState(false);

  const toggleArrow = () => {
    setArrow(!arrow);
  };

  return (
    <div className="wrapper bg-black w-full h-full px-20 pt-20 flex flex-col gap-20 font-[gucci-bold] text-[0.8vw]">
      <div className="tp flex justify-between">
        <div className="lt flex flex-col w-[50%]">
          <div className="up flex gap-[30%]">
            <div className="lt flex flex-col gap-6">
              <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
                MAY WE HELP YOU?
              </h1>
              <div className="font-[gucci] text-white flex flex-col gap-6">
                {[
                  "Contact Us",
                  "My Order",
                  "FAQs",
                  "Email Unsubscribe",
                  "Sitemap",
                ].map((items, idx) => {
                  return <span className="cursor-pointer" key={idx}>{items}</span>;
                })}
              </div>
            </div>

            <div className="rt flex flex-col gap-6">
              <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
                THE COMPANY
              </h1>
              <div className="font-[gucci] text-white flex flex-col gap-6 ">
                {[
                  "About Gucci",
                  "Gucci Equilibrium",
                  "Code of Ethics",
                  "Careers",
                  "Legal",
                  "Privacy &  Cookie Policy",
                  "Corporate Information",
                ].map((items, idx) => {
                  return <span className="cursor-pointer" key={idx}>{items}</span>;
                })}
              </div>
            </div>
          </div>

          <div className="dwn flex flex-col gap-6">
            <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
              Gucci Services
            </h1>
            <div className="font-[gucci] text-white flex flex-col gap-6">
              {[
                "Discover Our Services",
                "Book an Appointment",
                "Collect in Store",
              ].map((items, idx) => {
                return <span className="cursor-pointer" key={idx}>{items}</span>;
              })}
            </div>
          </div>
        </div>

        <div className="rt w-[50%] flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
              STORE LOCATOR
            </h1>
            <div className="flex items-center gap-2 border-b-2 pb-2 border-b-white justify-between">
              <input
                className="bg-black text-lg focus:outline-none text-white"
                type="text"
                placeholder="Country/Region, City"
              />
              <ArrowRight className="text-white text-lg" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
              SIGN UP FOR GUCCI UPDATES
            </h1>
            <p className="text-white font-[gucci] text-[0.77vw]">
              By entering your email address below, you consent to receiving our
              newsletter with access to our latest collections,
              <br /> events and initiatives. More details on this are provided
              in our Privacy Policy
            </p>
            <div className="flex items-center border-b-2 pb-2 border-b-white justify-between">
              <input
                className="bg-black text-lg focus:outline-none text-white"
                type="email"
                placeholder="Email"
              />
              <ArrowRight className="text-white text-lg" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
              LANGUAGE
            </h1>

            <div className="relative flex">
              <select
                onClick={toggleArrow}
                className="bg-black text-white appearance-none font-[gucci-bold] focus:outline-none cursor-pointer"
              >
                <option value="english">ENGLISH</option>
                <option value="french">FRANÇAIS</option>
              </select>

              <div>
                {arrow ? (
                  <ArrowUp className="text-white text-lg" />
                ) : (
                  <ArrowDown className="text-white text-lg" />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="uppercase font-[gucci-bold] text-[#aeaeae]">
              COUNTRY/REGION
            </h1>
            <span className="text-white font-[gucci-bold] uppercase">
              CANADA
            </span>
          </div>
        </div>
      </div>

      <div className="btm flex flex-col -gap-10">
        <div className="up">
          <p className="text-white font-[gucci-book] tracking-tighter">
            © 2016 - 2022 Guccio Gucci S.p.A. - All rights reserved. SIAE
            LICENCE # 2294/I/1936 and 5647/I/1936
          </p>
        </div>

        <div className="dwn flex items-center justify-center">
          <span className="text-white font-[gucci-main] text-[20vw] -top-[3.5vw] tracking-[5vw] cursor-pointer">
            <h1>GUCCI</h1>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
