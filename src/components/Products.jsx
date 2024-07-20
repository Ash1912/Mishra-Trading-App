import React from "react";
import compare1 from "../assets/images/compare1.png";
import compare2 from "../assets/images/compare2.png";
import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";
import perfume4 from "../assets/images/perfume4.jpg";
import perfume5 from "../assets/images/perfume5.jpg";
import cosmetics1 from "../assets/images/cosmetics1.jpg";
import cosmetics2 from "../assets/images/cosmetics2.jpg";
import cosmetics3 from "../assets/images/cosmetics3.jpg";
import osimage from "../assets/images/os.png";
import processorimage from "../assets/images/processor.png";
import { BsChevronDown } from "react-icons/bs";
function Products({ category }) {
  const stLouisProducts  = [
    {
      image: perfume1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      processor: "Intel&reg; Core&trade; i3 7100U Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: perfume2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      processor: "Intel&reg; Core&trade; i7 9100U Processor",
      os: "Windows 10 Pro for Enterprise",
    },
    {
      image: perfume3,
      name: "Acer Swift Air",
      model: "SF-313 51",
      processor: "Intel&reg; Core&trade; i3 7100X Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: perfume4,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      processor: "Intel&reg; Core&trade; i5 8000C Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: perfume5,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      processor: "Intel&reg; Core&trade; i5 8000C Processor",
      os: "Windows 10 Pro for business",
    },
  ];
  const colorQueenProducts = [
    {
      image: cosmetics1,
      name: "Lenovo Notebook",
      model: "RN-730 LX",
      processor: "Intel® Core™ i5 8300H Processor",
      os: "Windows 11 Home",
    },
    {
      image: cosmetics2,
      name: "Gaming Rig",
      model: "RG-2022",
      processor: "AMD Ryzen 5 3600",
      os: "Windows 11 Pro",
    },
    {
      image: cosmetics3,
      name: "Gaming Rig",
      model: "RG-2022",
      processor: "AMD Ryzen 5 3600",
      os: "Windows 11 Pro",
    },
  ];
  const defaultProducts  = [
    {
      image: perfume1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      processor: "Intel&reg; Core&trade; i3 7100U Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: cosmetics2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      processor: "Intel&reg; Core&trade; i7 9100U Processor",
      os: "Windows 10 Pro for Enterprise",
    },
    {
      image: compare1,
      name: "Acer Swift Air",
      model: "SF-313 51",
      processor: "Intel&reg; Core&trade; i3 7100X Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: compare2,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      processor: "Intel&reg; Core&trade; i5 8000C Processor",
      os: "Windows 10 Pro for business",
    },
  ];

  // Determine which products to display
  let products;
  if (category === 'St. Louis') {
    products = stLouisProducts;
  } else if (category === 'Color Queen') {
    products = colorQueenProducts;
  } else {
    products = defaultProducts; // Default products if no category is selected
  }

  // const products = category === 'St. Louis' ? stLouisProducts : colorQueenProducts;
  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
        <h2>{category ? `${category} Products` : "Featured Products"}</h2>
          <button>Show All</button>
        </div>
        <div className="products">
          {products.map(({ image, name, model, processor, os }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>{name}</h4>
                <h4>{model}</h4>
                <hr />
                <div className="processor">
                  <img src={processorimage} alt="processor" />
                  <h4>Processor</h4>
                  <p>{processor}</p>
                </div>
                <div className="os">
                  <img src={osimage} alt="os" />
                  <h4>Operating System</h4>
                  <p>{os}</p>
                </div>
                <BsChevronDown />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
