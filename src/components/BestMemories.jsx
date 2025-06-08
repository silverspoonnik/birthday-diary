// BestMemories.jsx
import React from 'react';
import './BestMemories.css';
import { FaArrowLeft, FaArrowRight, FaPlus, FaPlay } from 'react-icons/fa';
import { LuImage } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const BestMemories = () => {
  const navigate=useNavigate();
  const [images, setImages] = useState([
    './date1.jpg',
    './date2.jpg',
    './date3.jpg'
  ]);
    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="memories-container">
      <h1 className="memories-title">Our Best Memories</h1>

      <div className="memories-content">
        {/* Left: Memory Image Carousel */}
        <div className="carousel-box">
          <button className="carousel-nav left" onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}>
           
           <FaArrowLeft />
          </button>

          <div className="carousel-image">
            <img src={images[currentIndex]} alt="Memory" />
          </div>

          <button className="carousel-nav right"  onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}><FaArrowRight /></button>

          <div className="memory-caption">Our first date</div>

          
        </div>

        {/* Right: Memory Description */}
        <div className="memory-description-box">
          <h2>Memory Description</h2>
          <textarea
            className="memory-textarea"
            readOnly
            value={`Remember our first date at the South City Mall, it was so fun from the book stores to the mirror maze and our cutie photos.

That date was a very special one where you taught me to pose for photos as i was too lame at it , and i remember how we made mirror maze exciting by blindfolding and playing with each other.Its always fun ,being with you .

Even though we have had far more fun and better dates than this , but this being the first date will always hold a special place in our relationship , i love you so much my Aashu , you are my favourite , the combination of hot , beautiful and intelligent.`}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="memories-footer">
        <button className="nav-btn prev " onClick={()=> navigate(-1)}>
          <FaArrowLeft /> Previous
        </button>
        <button className="nav-btn next " onClick={() => navigate('/why-i-love-you')} >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BestMemories;
