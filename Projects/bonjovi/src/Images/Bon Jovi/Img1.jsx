import React from "react";
import { Clickable } from "../../components/Clickable";
import Svg from "../../components/Svg";

function Img1(props) {
  return (
    <div className="w-[30%] ml-32">
      <Clickable>
        <div className="relative">
          <img
            alt="Scattered artefact image"
            loading="lazy"
            width="1920"
            height="1500"
            decoding="async"
            className="h-auto w-full"
            style={{ color: "transparent" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            srcSet="
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=384&q=75&fit=clip&auto=format 384w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=640&q=75&fit=clip&auto=format 640w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=750&q=75&fit=clip&auto=format 750w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=828&q=75&fit=clip&auto=format 828w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=1080&q=75&fit=clip&auto=format 1080w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=1200&q=75&fit=clip&auto=format 1200w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=1920&q=75&fit=clip&auto=format 1920w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=2048&q=75&fit=clip&auto=format 2048w,
                https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=3840&q=75&fit=clip&auto=format 3840w
              "
            src="https://cdn.sanity.io/images/eieptkte/production/3a089c8178af247ae8900ef392f1ce09f771368d-1920x1500.jpg?w=3840&q=75&fit=clip&auto=format"
          />

          <Svg/>
        </div>

        <span className="font-founder text-sm uppercase">{props.title}</span>
      </Clickable>
    </div>
  );
}

export default Img1;
