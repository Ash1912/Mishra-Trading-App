import React, { useState } from "react";
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import category4 from "../assets/images/category4.png";
import category5 from "../assets/images/category5.png";
import category6 from "../assets/images/category6.png";
import category7 from "../assets/images/category7.png";
import category8 from "../assets/images/category8.png";
import Products from "./Products"; // Assuming Products component is in the same folder

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    {
      image: category1,
      title: "St. Louis",
      description: "290K Items",
    },
    {
      image: category2,
      title: "Color Queen",
      description: "3M Items",
    },
    {
      image: category3,
      title: "Laptop",
      description: "1.2M Items",
    },
    {
      image: category4,
      title: "Music",
      description: "751K Items",
    },
    {
      image: category5,
      title: "Photography",
      description: "1.0M Items",
    },
    {
      image: category6,
      title: "Furniture",
      description: "88K Items",
    },
    {
      image: category7,
      title: "Health",
      description: "761K Items",
    },
    {
      image: category8,
      title: "Sports",
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
