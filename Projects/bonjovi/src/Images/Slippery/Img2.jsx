import React from "react";
import { Clickable } from "../../components/Clickable";
import Svg from "../../components/Svg";

function Img2(props) {
  return (
    <div className="main flex items-center justify-center group">
      <Clickable>
        <div className="flex flex-col justify-center gap-4 items-center h-[40vw]">
          {/* Image 1 */}
          <div className="image1 -rotate-[10deg] w-[40%] h-[60%] flex justify-center items-center transition-transform duration-500 ease-out group-hover:rotate-[5deg] group-hover:translate-x-24">
            <img
              alt="Scattered artefact image"
              loading="lazy"
              width="1920"
              height="1007"
              decoding="async"
              className="h-auto w-full"
              style={{ color: "transparent" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=384&q=75&fit=clip&auto=format 384w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=640&q=75&fit=clip&auto=format 640w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=750&q=75&fit=clip&auto=format 750w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=828&q=75&fit=clip&auto=format 828w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=1080&q=75&fit=clip&auto=format 1080w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=1200&q=75&fit=clip&auto=format 1200w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=1920&q=75&fit=clip&auto=format 1920w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=2048&q=75&fit=clip&auto=format 2048w,
    https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=3840&q=75&fit=clip&auto=format 3840w
  "
              src="https://cdn.sanity.io/images/eieptkte/production/1d0789477dfdb18887e9973aa3bac094aa62b78c-1920x1007.jpg?w=3840&q=75&fit=clip&auto=format"
            />
          </div>

          {/* Image 2 */}
          <div className="image2 absolute rotate-[10deg] w-[20%] transition-transform duration-500 ease-out group-hover:-rotate-[5deg] group-hover:-translate-x-24">
            <img
              alt="Scattered artefact image"
              loading="lazy"
              width="1920"
              height="1875"
              decoding="async"
              className="h-auto w-full"
              style={{ color: "transparent" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=384&q=75&fit=clip&auto=format 384w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=640&q=75&fit=clip&auto=format 640w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=750&q=75&fit=clip&auto=format 750w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=828&q=75&fit=clip&auto=format 828w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=1080&q=75&fit=clip&auto=format 1080w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=1200&q=75&fit=clip&auto=format 1200w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=1920&q=75&fit=clip&auto=format 1920w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=2048&q=75&fit=clip&auto=format 2048w,
    https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=3840&q=75&fit=clip&auto=format 3840w
  "
              src="https://cdn.sanity.io/images/eieptkte/production/89b5ffaa14e3b010716c57092e64b4ffe99c751b-1920x1875.jpg?w=3840&q=75&fit=clip&auto=format"
            />

            <Svg />
          </div>

          <span className="font-founder text-sm uppercase mt-10">
            {props.title}
          </span>
        </div>
      </Clickable>
    </div>
  );
}

export default Img2;
