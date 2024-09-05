import React, { useState, useRef } from 'react';
import Play from '../svgs/Play';
import Pause from '../svgs/Pause';

function VideoCard({ src, title, description, cta }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef();

  const playPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='flex flex-col gap-10 items-center pb-20'>
      <div className='relative'>
        <video ref={videoRef} width={500} autoPlay muted loop disablePictureInPicture>
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={playPause}
          className='playPauseBtn absolute top-4 right-4 bg-gray-300/50 p-2 rounded-full text-lg cursor-pointer'
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 text-center h-28'>
          <h1 className='font-[gucci-bold] uppercase tracking-tighter'>
            {title}
          </h1>
          <p
            className='font-[gucci-light] tracking-tighter'
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <span className='font-[gucci-medium] tracking-tighter'>
          {cta}
        </span>
      </div>
    </div>
  );
}

function Services() {
  const videoData = [
    {
      src: "gucci/1.mp4",
      title: "Personalization",
      description: `Emboss select bags, luggage, belts, leather <br/>
                    accessories, and items from the pet’s collection with <br/>
                    initials to create a truly unique piece.`,
      cta: 'Discover The Collection'
    },
    {
      src: "gucci/2.mp4",
      title: "Packaging",
      description: `Choose between our online exclusive tote or <br/>
                    boutique shopping bag to give your order the <br/>
                    perfect finish.`,
      cta: 'Explore Gucci’s Packaging'
    },
    {
      src: "gucci/3.mp4",
      title: "Collect in store",
      description: `Order online and collect your order from your <br/>
                    preferred Gucci boutique.`,
      cta: "Discover How"
    }
  ];

  return (
    <div className='main flex flex-col items-center gap-20'>
      <div className='title'>
        <h1 className='font-[gucci-light] tracking-tighter uppercase text-5xl overflow-hidden'>
          Gucci Services
        </h1>
      </div>

      <div className='body flex flex-col items-center'>
        <div className='videos flex px-20 gap-10 text-center'>
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              src={video.src}
              title={video.title}
              description={video.description}
              cta={video.cta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
