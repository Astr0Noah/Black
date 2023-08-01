import React, { useState } from 'react';
import './styles.css';
import { useSpring, animated } from 'react-spring';
import Button from 'react-bootstrap/Button';
import './HeroSection.css';

function About() {
  const [flip, setFlip] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 550,
  });

  const another = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 250,
  });

  // Event handler for the button click
  const handleButtonClick = () => {
    console.log('Button clicked!'); // Log the message to the console
  };

  return (
    <div className="about">
      <h1 className="abttitle">About</h1>
      
        
      

      <animated.div style={another}>
        <h1 className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h1>
      </animated.div>
      <video src="/videos/Stars.mp4" autoPlay loop muted />
    </div>
  );
}

export default About;
