import React, { useEffect } from 'react';
import { useRef } from 'react';

const PlayAudio = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;
  };

  useEffect(() => {
    playAudio();
  }, []);

  return (
    <div>
      <audio ref={audioRef} className="audio-element">
        <source src="assets/audios/bgAudio.mp3"></source>
      </audio>
    </div>
  );
};

export default PlayAudio;
