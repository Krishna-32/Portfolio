import React from "react";
import { Clickable } from "../../components/Clickable";
import Svg from "../../components/Svg";

function Img2(props) {
  return (
    <div className="main flex items-center justify-center group">
      <Clickable>
        <div className="flex flex-col justify-center gap-4 items-center h-full">
          {/* Image 1 */}
          <div className="image1 -rotate-[10deg] w-[30%] transition-transform duration-500 ease-out group-hover:rotate-[5deg] group-hover:translate-x-32">
            <img
              alt="Scattered artefact image"
              loading="lazy"
              width="1245"
              height="2167"
              decoding="async"
              className="h-auto w-full"
              style={{ color: "transparent" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=384&amp;q=75&amp;fit=clip&amp;auto=format 384w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=640&amp;q=75&amp;fit=clip&amp;auto=format 640w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=750&amp;q=75&amp;fit=clip&amp;auto=format 750w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=828&amp;q=75&amp;fit=clip&amp;auto=format 828w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=1080&amp;q=75&amp;fit=clip&amp;auto=format 1080w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=1200&amp;q=75&amp;fit=clip&amp;auto=format 1200w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=1920&amp;q=75&amp;fit=clip&amp;auto=format 1920w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=2048&amp;q=75&amp;fit=clip&amp;auto=format 2048w,
    https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 3840w
  "
              src="https://cdn.sanity.io/images/eieptkte/production/03157841e493ec606ba94fa5dc366c1b8f0d4bc3-1245x2167.png?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
            />
          </div>

          {/* Image 2 */}
          <div className="image2 absolute rotate-[10deg] w-[15%] transition-transform duration-500 ease-out group-hover:-rotate-[5deg] group-hover:-translate-x-32 -translate-y-10">
            <img
              alt="Scattered artefact image"
              loading="lazy"
              width="1229"
              height="2152"
              decoding="async"
              className="h-auto w-full"
              style={{ color: "transparent" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=384&amp;q=75&amp;fit=clip&amp;auto=format 384w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=640&amp;q=75&amp;fit=clip&amp;auto=format 640w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=750&amp;q=75&amp;fit=clip&amp;auto=format 750w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=828&amp;q=75&amp;fit=clip&amp;auto=format 828w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=1080&amp;q=75&amp;fit=clip&amp;auto=format 1080w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=1200&amp;q=75&amp;fit=clip&amp;auto=format 1200w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=1920&amp;q=75&amp;fit=clip&amp;auto=format 1920w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=2048&amp;q=75&amp;fit=clip&amp;auto=format 2048w,
    https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 3840w
  "
              src="https://cdn.sanity.io/images/eieptkte/production/384d6b28864aec777b72e982319dfcc19563ee0a-1229x2152.png?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
            />

          <Svg/>
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
