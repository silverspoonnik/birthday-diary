// src/components/MusicPlayer.jsx
import React, { useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Playback error:', error);
      });
    }
  };

  return (
    <div>
      <button className="btn play-btn" onClick={handlePlay}>
        ▶ Play Birthday Melody
      </button>

      <audio ref={audioRef}>
        <source src="/converted_audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
