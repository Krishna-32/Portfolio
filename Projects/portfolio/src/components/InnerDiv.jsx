import React from "react";

function InnerDiv(props) {
  return (
    <div className="wrapper h-full w-full bg-blackk flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center font-seasonr text-whitee group">
        <div className="h-[18vw] lg:w-[35vw] lg:h-[6vw] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-end leading-[5vw] overflow-visible lg:gap-4 uppercase gap-2">
          <span className="text-[5vw] lg:text-[2vw] italic lg:-translate-y-5 overflow-visible group-hover:text-whitee group-hover:translate-x-2 transition-transform duration-300 ease-in-out lg:text-greyy">
            {props.idx}
          </span>

          <span className="text-[7vw] lg:text-[4vw] font-seasonb overflow-visible group-hover:text-whitee group-hover:translate-x-2 transition-transform duration-300 ease-in-out lg:text-greyy">
            {props.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default InnerDiv;
