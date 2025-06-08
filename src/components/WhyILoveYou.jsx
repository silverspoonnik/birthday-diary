import React, { useState, useRef } from 'react';
import './WhyILoveYou.css';
import { FaHeart, FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const reasons = [
  'Your beautiful smile is just uffff',
  'You understand me like no one else',
  'You are the most cutu looking creature on earth , and yet hot at the same time (Yeh cute birthday diary hai nahi toh aapke hot waist and sexy body ke bare mei toh 2 3 page lag jate baddie)',
  'The way you make me laugh',
  'Being with a head eating creature like me even after so many fights !!',
  'How you always say strong and motivate me to do better.'
];

const WhyILoveYou = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const audioRef = useRef(null);  // 🔊 Step 1: audio reference

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const playSong = () => {
    audioRef.current?.play();  // 🔊 Step 2: play the audio
  };

  return (
    <div className="why-love-container">
      <div className="why-love-left">
        <h1>Why I Love You</h1>
        <img
          src="./happy.jpg"
          alt="us"
          className="love-image"
        />
        <button className="love-song-btn" onClick={playSong}>
          <FaPlay className="icon" /> Love Song
        </button>
        <audio ref={audioRef}>
          <source src="./glyou.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="why-love-right">
        <h2>All The Reasons</h2>
        <div className="reasons-list">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`reason-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <FaHeart className="heart-icon" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="love-nav">
        <button className="nav-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Previous
        </button>
        <button className="nav-btn" onClick={() => navigate('/open-when-sad')}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WhyILoveYou;
