import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import home1 from "../assets/images/home1.jpg";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";

const images = [home1, home2, home3];

function Home() {
  const [currentImage, setCurrentImage] = useState(home1);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term as the user types
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    console.log("Searching for:", searchTerm); // For now, just log the search term to the console
    // Here you would typically trigger a search in your application
  };

  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Explore More Products for Your Needs</h2>
          <form onSubmit={handleSearchSubmit} className="input-container">
            <input 
              type="text" 
              placeholder="Looking for something specific?" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className="icon">
              <BiSearch />
            </button>
          </form>
        </div>
        <div className="extra-image">
          <img src={currentImage} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
