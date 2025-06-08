import React, { useRef, useState } from 'react';
import './FutureDreams.css';
import { FaHome, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineImage } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const FutureDreams = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // 🔹 Ref to file input
  const [selectedImage, setSelectedImage] = useState(null); // 🔹 To show preview

  const handleImageUpload = () => {
    fileInputRef.current.click(); // 🔹 Triggers file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // 🔹 Show preview
    }
  };

  return (
    <div className="future-dreams-container">
      <div className="future-dreams-content">
        <div className="future-dreams-left">
          <h1>Future Dreams</h1>
          <img 
            src="./future.jpg"
            alt="Future Dream Visual"
            className="future-image"
          />

          <div className="future-section">
            <h2>Our Future Together</h2>

            <div className="future-item">
              <FaHome className="icon" />
              <div>
                <h3>Our Home</h3>
                <p>
                  A big bunglow or a mansion with many billus , doggos and one horse haina? also our personalized rooms and our crazy fantasies !!
                </p>
              </div>
            </div>

            <div className="future-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Travel Adventures</h3>
                <p>
                  Oh how can we forget about our travel dreams, we will go to different places and foreign trips and enjoy many adventures !!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="future-dreams-right">
          <h2>Visualize Our Dream</h2>
          <div className="upload-section">
            <MdOutlineImage className="upload-icon" />
            <p>Upload an image that represents our future together</p>
            <span>
              This could be a dream home, a travel destination, or anything that symbolizes our
              future
            </span>
            <button className="upload-btn" onClick={handleImageUpload}>Choose Image</button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />

            {/* Optional: Image Preview */}
            {selectedImage && (
              <div className="image-preview">
                <img src={selectedImage} alt="Selected Dream" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="love-nav future-nav">
        <button className="nav-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Previous
        </button>
        <button className="nav-btn" onClick={() => navigate('/thank-you')}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FutureDreams;
