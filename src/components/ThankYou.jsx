import React, { useState, useRef } from 'react';
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa';
import './ThankYou.css';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleHugClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="thankyou-container">
      {/* Overlay Video */}
      {showVideo && (
        <div className="video-overlay">
          <video
            ref={videoRef}
            className="hug-video"
            onEnded={handleVideoEnd}
            controls={true}
          >
            <source src="./end.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Main Content */}
      {!showVideo && (
        <>
          <div className="thankyou-left">
            <h1>Thank You</h1>
            <img src="./thanks.jpg" alt="Thank You" className="thankyou-img" />

            <button className="hug-button pop" onClick={handleHugClick}>
              <FaHeart /> Send Virtual Hug
            </button>

            <button className="song-button" onClick={toggleAudio}>
              {isPlaying ? <FaPause /> : <FaPlay />} Our Special Song
            </button>

            {/* Audio Element */}
            <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
              <source src="./thankyou.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>

            <div className="nav-buttons">
              <button onClick={() => navigate('/future-dreams')} className="nav-button">
                ← Previous
              </button>
              <button onClick={() => navigate('/cover')} className="nav-button">
                Back to Cover →
              </button>
            </div>
          </div>

          <div className="thankyou-right">
            <div className="message-box">
              <div className="heart-corner">❤️</div>
              <h2>Thank You for Being You</h2>
              <p>
                My Aashu, thank you for being the most amazing , hot ,beautiful and caring person in my life. Your
                kindness, your smile, your love - they all make my world brighter every single day and make me feel so happy and loved.
              </p>
              <p>
                I know mai bohot ganda hu , parshan karta hu and make you sad and feel bad and i am really sorry for it . But  you settled for less by being with me. You deserve so much happiness in this world. I miss you and I am sorry i make you sad and make you cry.
              </p>
              <p>
                But i want to say that I love you a lot and I promise I dont do it intentionally. I never like online for our relo but still i want to be with you always isliye jo bhi ho I will always be there to say sorry and keep you happy.
              </p>
              <p>
                Now only 1 and a half months to meet , being with you in this online long distance was so easy as time is flying so fast and now I am so excited to meet you on 21st , I love you my baby my Aashu my cutu, My favourite and only mine , only mine.
              </p>
              <p>
                <strong>Happy Birthday, my love!</strong>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
