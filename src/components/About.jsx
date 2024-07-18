import React, { useState, useEffect } from 'react';
import team1 from '../assets/images/cosmetics1.jpg'; // Adjust the path as necessary
import team2 from '../assets/images/cosmetics2.jpg';
import team3 from '../assets/images/cosmetics3.jpg';

function About() {
  const [imageSrc, setImageSrc] = useState(team1);

  useEffect(() => {
    const images = [team1, team2, team3];
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % images.length;
      setImageSrc(images[index]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about">
      <div className="container mx-3 py-3">
        <div className="text-content">
          <h2>About Our Company</h2>
          <p>Learn more about our values, our journey, and how we strive to provide outstanding solutions for our customers.</p>
        </div>
        <div className="image-content">
          <img src={imageSrc} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default About;
