import React, { useRef } from 'react';
import './HowWeMet.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMusic } from 'react-icons/fa';

const HowWeMet = () => {
  const audioRef = useRef(null);
  
    const handlePlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Playback error:', error);
        });
      }
    };

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      document.getElementById('uploaded-image').src = imageUrl;
    }
  };

  return (
    <div className="how-we-met-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <h1 className="page-title">How We Met</h1>

      <div className="main-container">
        <div className="photo-upload-section">
          <div className="photo-box">
            <img
              id="uploaded-image"
              src="https://i.imgur.com/8Km9tLL.png"
              alt="placeholder"
            />
            <p>Upload a photo of us</p>
            <button className="choose-photo" onClick={handleChooseFile}>Choose Photo</button>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <div className="story-box">
            <p>
              I'll never forget the day I met you Aashu. It was so random yet the first impression that you left on me is still printed in my head...
              <br /><br />
              Even though I didnt talk much , but the "thank you" which I said to you is still in my head , the way you came in your shorts bringing the bottle, all beautiful and cute is still in my head.
              <br /><br />
              All the moments after that from playing badminton , to eating momos and what not , and see , now here we are , 18 months in . Meeting you has been the most beautiful surprise in my life.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-controls">
        <button className="song-btn" onClick={handlePlay}>
          <FaMusic /> Our Song
        </button>
        <audio ref={audioRef}>
        <source src="./Perfect.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => navigate(-1)}>
            ← Previous
          </button>
          <button className="nav-btn" onClick={() => navigate('/best-memories')}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeMet;
