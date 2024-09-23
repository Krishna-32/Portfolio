import React from "react";
import ComingSoon from "./Marquee/ComingSoon";

function Coming(props) {
  return (
    <div className="wrapper bg-black px-4 overflow-hidden cursor-pointer relative border-b-[1px] border-gray-600 group">
      <div className="flex items-center gap-10 -my-8">
        {props.img}

        <span className="font-formulab text-[8vw] uppercase pt-6 text-[#656563]">{props.title}</span>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 -rotate-[2.5deg] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <ComingSoon />
      </div>

      <div className="absolute right-4 bottom-4 overflow-hidden">
        <div className="py-2 px-3 rounded-md bg-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 relative overflow-hidden">
          <span className="font-founder uppercase text-whitee text-[.9vw]">
            Subscribe for update
          </span>
        </div>
      </div>
    </div>
  );
}

export default Coming;
