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
import mrpimage from "../assets/images/mrp.jpg";
import quantityimage from "../assets/images/quantity.png";
import { BsChevronDown } from "react-icons/bs";
function Products({ category }) {
  const stLouisProducts  = [
    {
      image: perfume1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      quantity: "Intel&reg; Core&trade; i3 7100U Processor",
      mrp: "Windows 10 Pro for business",
    },
    {
      image: perfume2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      quantity: "Intel&reg; Core&trade; i7 9100U Processor",
      mrp: "Windows 10 Pro for Enterprise",
    },
    {
      image: perfume3,
      name: "Acer Swift Air",
      model: "SF-313 51",
      quantity: "Intel&reg; Core&trade; i3 7100X Processor",
      mrp: "Windows 10 Pro for business",
    },
    {
      image: perfume4,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      quantity: "Intel&reg; Core&trade; i5 8000C Processor",
      mrp: "Windows 10 Pro for business",
    },
    {
      image: perfume5,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      quantity: "Intel&reg; Core&trade; i5 8000C Processor",
      mrp: "Windows 10 Pro for business",
    },
  ];
  const colorQueenProducts = [
    {
      image: cosmetics1,
      name: "Lenovo Notebook",
      model: "RN-730 LX",
      quantity: "Intel® Core™ i5 8300H Processor",
      mrp: "Windows 11 Home",
    },
    {
      image: cosmetics2,
      name: "Gaming Rig",
      model: "RG-2022",
      quantity: "AMD Ryzen 5 3600",
      mrp: "Windows 11 Pro",
    },
    {
      image: cosmetics3,
      name: "Gaming Rig",
      model: "RG-2022",
      quantity: "AMD Ryzen 5 3600",
      mrp: "Windows 11 Pro",
    },
  ];
  const defaultProducts  = [
    {
      image: perfume1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      quantity: "Intel&reg; Core&trade; i3 7100U Processor",
      mrp: "Windows 10 Pro for business",
    },
    {
      image: cosmetics2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      quantity: "Intel&reg; Core&trade; i7 9100U Processor",
      mrp: "Windows 10 Pro for Enterprise",
    },
    {
      image: compare1,
      name: "Acer Swift Air",
      model: "SF-313 51",
      quantity: "Intel&reg; Core&trade; i3 7100X Processor",
      mrp: "Windows 10 Pro for business",
    },
    {
      image: compare2,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      quantity: "Intel&reg; Core&trade; i5 8000C Processor",
      mrp: "Windows 10 Pro for business",
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
          {products.map(({ image, name, model, quantity, mrp }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>{name}</h4>
                <h4>{model}</h4>
                <hr />
                <div className="quantity">
                  <img src={quantityimage} alt="quantity" />
                  <h4>Quantity</h4>
                  <p>{quantity}</p>
                </div>
                <div className="mrp">
                  <img src={mrpimage} alt="mrp" />
                  <h4>MRP</h4>
                  <p>{mrp}</p>
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
