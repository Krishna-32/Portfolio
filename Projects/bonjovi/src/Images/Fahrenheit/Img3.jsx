import React from "react";
import { Clickable } from "../../components/Clickable";
import Svg from "../../components/Svg";

function Img3(props) {
  return (
    <div className="w-[40%] flex flex-col gap-4 items-center pb-40 relative">
      <Clickable>
        <div className="relative w-[65%]">
          <img
            alt="Scattered artefact image"
            loading="lazy"
            width="600"
            height="798"
            decoding="async"
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            srcSet="
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=384&q=75&fit=clip&auto=format 384w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=640&q=75&fit=clip&auto=format 640w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=750&q=75&fit=clip&auto=format 750w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=828&q=75&fit=clip&auto=format 828w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=1080&q=75&fit=clip&auto=format 1080w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=1200&q=75&fit=clip&auto=format 1200w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=1920&q=75&fit=clip&auto=format 1920w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=2048&q=75&fit=clip&auto=format 2048w,
    https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=3840&q=75&fit=clip&auto=format 3840w"
            src="https://cdn.sanity.io/images/eieptkte/production/10ba7eb2be297d9432cba6adfcab0d397e3adc08-600x798.png?w=3840&q=75&fit=clip&auto=format"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Svg />
          </div>
        </div>
        <span className={`font-founder text-sm uppercase text-${props.text}`}>
          {props.title}
        </span>
      </Clickable>
    </div>
  );
}

export default Img3;