import React, { useRef, useState } from 'react';
import Play from '../svgs/Play';
import Pause from '../svgs/Pause';
import Unmute from '../svgs/Unmute';
import Mute from '../svgs/Mute';

function Featured() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);
  const video = useRef();

  const playPause = () => {
    if (isPlaying) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const muteUnmute = () => {
    if (isMute) {
      video.current.muted = false; // Unmute
    } else {
      video.current.muted = true; // Mute
    }
    setIsMute(!isMute);
  };

  return (
    <div className='main flex flex-col px-4 py-40 gap-40 items-center'>
      <div className='txt'>
        <span className='uppercase font-[gucci-bold]'>Featured</span>
      </div>

      <div className='section w-full flex items-center justify-evenly px-16 pb-20'>
        <div className='video w-[58%] relative'>
          <video ref={video} width={900} autoPlay muted loop disablePictureInPicture>
            <source src="gucci/tennis.mp4" type='video/mp4' />
            Your browser does not support the video tag.
          </video>

          <div className='btn absolute top-4 right-4 flex flex-col gap-4 cursor-pointer'>
            <button
              onClick={playPause}
              className='play/pause bg-gray-300/50 p-2 rounded-full text-lg'
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>

            <button
              onClick={muteUnmute}
              className='mute bg-gray-300/50 p-2 rounded-full text-lg'
            >
              {isMute ? <Mute /> : <Unmute />}
            </button>
          </div>
        </div>

        <div className='sidetxt w-[61%] flex flex-col items-center gap-10'>
          <span className='uppercase font-[gucci-book] text-3xl overflow-hidden'>
            Gucci is a Feeling
          </span>

          <span className='flex flex-col gap-2 items-center font-[gucci-light] tracking-tighter'>
            <p>Global Brand Ambassador Jannik Sinner embodies the</p>
            <p>House’s heritage ties to the world of tennis in a new</p>
            <p>campaign.</p>
          </span>

          <span className='uppercase font-[gucci-bold] tracking-tighter text-[.8vw]'>
            Discover the campaign
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
