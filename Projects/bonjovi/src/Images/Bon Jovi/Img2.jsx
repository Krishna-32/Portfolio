import React from "react";
import { Clickable } from "../../components/Clickable";
import Svg from "../../components/Svg";

function Img2(props) {
  return (
    <div className="main flex items-center justify-center group">
      <Clickable>
      <div className="flex flex-col justify-center gap-4 items-center h-[40vw]">
        {/* Image 1 */}
        <div className="image1 -rotate-[10deg] w-[40%] transition-transform duration-500 ease-out group-hover:rotate-[5deg] group-hover:translate-x-24">
          <img
            alt="Scattered artefact image"
            loading="lazy"
            width="800"
            height="1063"
            decoding="async"
            className="h-auto w-full"
            style={{ color: "transparent" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            srcSet="
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=384&q=75&fit=clip&auto=format 384w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=640&q=75&fit=clip&auto=format 640w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=750&q=75&fit=clip&auto=format 750w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=828&q=75&fit=clip&auto=format 828w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=1080&q=75&fit=clip&auto=format 1080w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=1200&q=75&fit=clip&auto=format 1200w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=1920&q=75&fit=clip&auto=format 1920w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=2048&q=75&fit=clip&auto=format 2048w,
              https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=3840&q=75&fit=clip&auto=format 3840w
            "
            src="https://cdn.sanity.io/images/eieptkte/production/2433c14af3fd4991b062bf3c91d8a2f666921a88-800x1063.png?w=3840&q=75&fit=clip&auto=format"
          />

          <Svg/>
        </div>

        {/* Image 2 */}
        <div className="image2 absolute rotate-[10deg] w-[20%] transition-transform duration-500 ease-out group-hover:-rotate-[5deg] group-hover:-translate-x-24">
          <img
            alt="Scattered artefact image"
            loading="lazy"
            width="1920"
            height="1578"
            decoding="async"
            className="h-auto w-full"
            style={{ color: "transparent" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            srcSet="
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=384&q=75&fit=clip&auto=format 384w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=640&q=75&fit=clip&auto=format 640w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=750&q=75&fit=clip&auto=format 750w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=828&q=75&fit=clip&auto=format 828w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=1080&q=75&fit=clip&auto=format 1080w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=1200&q=75&fit=clip&auto=format 1200w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=1920&q=75&fit=clip&auto=format 1920w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=2048&q=75&fit=clip&auto=format 2048w,
              https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=3840&q=75&fit=clip&auto=format 3840w
            "
            src="https://cdn.sanity.io/images/eieptkte/production/36af9a5e0ffb4966542160779d39d818e421e61e-1920x1578.jpg?w=3840&q=75&fit=clip&auto=format"
          />
        </div>

        <span className="font-founder text-sm uppercase mt-10">{props.title}</span>
      </div>
      </Clickable>
    </div>
  );
}

export default Img2;
