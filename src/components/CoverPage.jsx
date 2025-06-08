import React, { useState } from 'react';
import FloatingElements from './FloatingElements';
import MusicPlayer from './MusicPlayer';
import { useNavigate } from 'react-router-dom';
import './CoverPage.css'; // Make sure you define modal styles here

const CoverPage = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  return (
    <div className="cover-wrapper">
      {!confirmed && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Hey cutie 💖! Ready to open your surprise birthday diary?</h2>
            <p>Here are some rules for viewing this diary:</p>
            <ul className="rules-list">
              <li>🎵 Whenever you open a page that contains music, first play the music and then read the message.</li>
              <li>🖼️ For pages that require you to choose a photo, you have to pick one and send me the screenshot of the page.</li>
              <li>🎂 And finally, read it on your birthday and when you're alone.</li>
            </ul>
            <button className="modal-button" onClick={handleConfirm}>Yes, I'm ready!</button>
          </div>
        </div>
      )}

      {confirmed && (
        <>
          <FloatingElements />
          <div className="container">
            <h2>Cover Page</h2>

            <div className="img-placeholder">
              <img src="./IMG-20240131-WA0006.jpg" alt="" className="cutieimg" />
            </div>

            <h1>
              Happy Birthday My Love <span>🎀</span>
            </h1>
            <p>A special diary just for you</p>

            <MusicPlayer />

            <button className="btn open-btn" onClick={() => navigate('/how-we-met')}>
              Open Diary ➜
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CoverPage;
