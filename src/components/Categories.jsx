import React, { useState } from "react";
import perfumeCategory1 from "../assets/images/perfumeIcon1.png";
import perfumeCategory2 from "../assets/images/perfumeIcon2.png";
import perfumeCategory3 from "../assets/images/perfumeIcon3.png";
import perfumeCategory4 from "../assets/images/perfumeIcon4.png";
import perfumeCategory5 from "../assets/images/perfumeIcon5.png";
import cosmeticsCategory6 from "../assets/images/colorsQueenIcon.jpg";
import cosmeticsCategory7 from "../assets/images/milapCosmticsIcon.jpg";
import cosmeticsCategory8 from "../assets/images/cosmeticsIcon1.png";
import cosmeticsCategory9 from "../assets/images/cosmeticsIcon2.png";
import cosmeticsCategory10 from "../assets/images/cosmeticsIcon3.png";
import Products from "./Products"; // Assuming Products component is in the same folder

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    {
      image: perfumeCategory1,
      title: "St. Louis",
      description: "290K Items",
    },
    {
      image: perfumeCategory2,
      title: "JBJ",
      description: "3M Items",
    },
    {
      image: perfumeCategory3,
      title: "Ramsons",
      description: "1.2M Items",
    },
    {
      image: perfumeCategory4,
      title: "Rian",
      description: "751K Items",
    },
    {
      image: perfumeCategory5,
      title: "Riya",
      description: "1.0M Items",
    },
    {
      image: cosmeticsCategory6,
      title: "Color Queen",
      description: "88K Items",
    },
    {
      image: cosmeticsCategory7,
      title: "Milap",
      description: "761K Items",
    },
    {
      image: cosmeticsCategory8,
      title: "Silvi",
      description: "2.9K Items",
    },
    {
      image: cosmeticsCategory9,
      title: "Neckline",
      description: "2.9K Items",
    },
    {
      image: cosmeticsCategory10,
      title: "Beauty People",
      description: "2.9K Items",
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Ensure the component updates with selected category before scrolling
    setTimeout(() => {
      const productsElement = document.querySelector(".products-container");
      if (productsElement) {
        productsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust timing as needed based on your application's response times
  };

  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Companies</h2>
        </div>
        <div className="categories">
          {categories.map(({ image, title, description }, index) => {
            return (
              <div className="category" key={index} onClick={() => handleCategoryClick(title)}>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
      {selectedCategory && <Products category={selectedCategory} />}
    </div>
  );
}

export default Categories;
