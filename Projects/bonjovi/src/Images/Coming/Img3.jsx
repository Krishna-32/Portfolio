import React from "react";

const Img3 = () => {
  return (
    <img
      alt="Listing image"
      loading="lazy"
      width="200"
      height="200"
      decoding="async"
      data-nimg="1"
      className="h-auto w-[7vw]"
      style={{ color: "transparent" }}
      sizes="20vw"
      srcSet={`
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=128&q=75&fit=clip&auto=format 128w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=256&q=75&fit=clip&auto=format 256w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=384&q=75&fit=clip&auto=format 384w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=640&q=75&fit=clip&auto=format 640w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=750&q=75&fit=clip&auto=format 750w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=828&q=75&fit=clip&auto=format 828w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=1080&q=75&fit=clip&auto=format 1080w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=1200&q=75&fit=clip&auto=format 1200w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=1920&q=75&fit=clip&auto=format 1920w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=2048&q=75&fit=clip&auto=format 2048w,
     https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=3840&q=75&fit=clip&auto=format 3840w
   `}
      src="https://cdn.sanity.io/images/eieptkte/production/f1b94875f6bd5ba649f06c7ac2e4afde583454bb-158x156.jpg?w=3840&q=75&fit=clip&auto=format"
    />
  );
};

export default Img3;
