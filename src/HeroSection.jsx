import React, { useState } from 'react';
import './HeroSection.css';
import { useSpring, animated } from 'react-spring';


function HeroSection() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 550,
  });

  return (
    <div className="hero-section">
      <animated.div style={props}>
        <h1 className="test">Welcome to Black Clover Republic</h1>
      </animated.div>

      <video src="/videos/Black.mp4" autoPlay loop muted />


    </div>
  );
}

export default HeroSection;