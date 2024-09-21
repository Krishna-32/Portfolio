import React from "react";
import Arrow from "../components/Arrow";

function About(props) {
  return (
    <div className="w-full overflow-hidden cursor-pointer border-b-gray-600 border-b-[1px] group relative">
      {/* Background transition */}
      <div className="absolute inset-0 bg-blackk transition-transform duration-300 group-hover:-translate-y-full z-0"></div>
      <div className="absolute inset-0 bg-white transition-transform duration-300 translate-y-full group-hover:translate-y-0 z-0"></div>

      <div className="-my-8 text-white relative z-10">
        <div className="flex justify-between px-4 items-center">
          <div className="flex gap-10 items-center">
            {props.img}

            <div className="flex items-start gap-2 pt-6 ">
              {/* Text transition */}
              <div className="relative overflow-hidden group">
                <span className="font-formulab text-[8vw] text-whitee uppercase block transition-transform duration-300 group-hover:-translate-y-full relative z-10">
                  {props.title}
                </span>
                <span className="font-formulab text-[8vw] text-blackk uppercase block absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  {props.title}
                </span>
              </div>

              <span className="font-founder pt-6 text-whitee group-hover:text-blackk transition-transform duration-300">{props.date}</span>
            </div>
          </div>

          {/* Arrow transition */}
          <div className="relative overflow-hidden group">
            <span className="text-white text-[5vw] block transition-transform duration-300 group-hover:translate-x-full relative z-10">
              <Arrow />
            </span>
            <span className="text-blackk text-[5vw] block absolute inset-0 transition-transform duration-300 -translate-x-full group-hover:translate-x-0">
              <Arrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
