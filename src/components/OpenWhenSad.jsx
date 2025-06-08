import React from 'react';
import './OpenWhenSad.css';
import { FaHeart, FaSmile, FaMusic, FaExclamationCircle } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Navigate, useNavigate } from 'react-router-dom';
const boosters = [
  {
    icon: <FaSmile />,
    title: 'Funny Memories',
    text: 'Remember how we used to walk in the capmus at night doing all the goofy things without any social anxiety .'
  },
  {
    icon: <FaHeart />,
    title: 'Love Notes',
    text: 'Love notes ka toh pata nahi but still i remember all those cute love letters and creative gifts you gave me on my birthdays and dates . YOU ARE JUST AWESOME'
  },
  {
    icon: <FaMusic />,
    title: 'Our Playlist',
    text: 'do you remember the playlist we made in the previous summer holiday ? its name was "i miss u " with a pfp of us together , and i still hear some songs from it.'
  },
  {
    icon: <FaExclamationCircle />,
    title: 'Future Plans',
    text: "Well even you know my future plans with you are to marry you and live happily with you forever in our own house with pets and our family. I just hope and pray to god that all of this comes out to be true. Amen and touchwood."
  },
];

const OpenWhenSad = () => {
    const navigate=useNavigate();
  return (
    <div className="open-sad-container">
      <div className="open-sad-left">
        <h1>Open When You're Sad</h1>
        <img
          src="./hug.jpg"
          alt="hug"
          className="sad-img"
        />
        <div className="hug-message">
          <div className="hug-heart">
            <FaHeart color="hotpink" />
          </div>
          <h2>A Hug From Me To You</h2>
          <p>
            Why are you sad my sunshine? Miss me ? yelo mere side se yeh cutu hug , remember this date where we took so many photos and then the chaos while returning back to campus . I love you so much.
          </p>
          <p>
            Never be sad because of me because i know you are so strong and beautiful and a girl like you doesnt desreve being sad , keep smiling and make me proud as you always do , baaki mai toh bohot pareshan karta hu , but ill also take care of my cutu princess.
          </p>
        </div>
      </div>
      <div className="open-sad-right">
        <h2>Mood Boosters</h2>
        <div className="boosters-grid">
          {boosters.map((booster, idx) => (
            <div className="booster-card" key={idx}>
              <div className="booster-icon">{booster.icon}</div>
              <h3>{booster.title}</h3>
              <p>{booster.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sad-nav">
        <button className="nav-btn" onClick={()=>navigate(-1)}>
          <FiArrowLeft />
          Previous
        </button>
        <button className="nav-btn" onClick={()=> navigate('/future-dreams')}>
          Next
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OpenWhenSad;
