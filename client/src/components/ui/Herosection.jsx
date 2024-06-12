import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import video from '../../assets/image.png';
import './Herosection.css';
const Herosection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero-container relative">
      <Parallax
        strength={400}
        className="parallax-container"
      >
        <div className="video-container relative ">
          <img src={video} alt="" />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">Scroll Down to Explore</div>
        </div>
      </Parallax>
      
    </div>
  );
}

export default Herosection;
