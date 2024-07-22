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

import blackberry from "../assets/images/St. Louis/1.jpg";
import blueberry from "../assets/images/St. Louis/2.jpg";
import pinkberry from "../assets/images/St. Louis/3.jpg";
import bapple from "../assets/images/St. Louis/4.jpg";
import blackcode from "../assets/images/St. Louis/5.jpg";
import whitelondon from "../assets/images/St. Louis/6.jpg";
import blacklondon from "../assets/images/St. Louis/7.jpg";
import bluelondon from "../assets/images/St. Louis/8.jpg";
import maninblack from "../assets/images/St. Louis/9.jpg";
import originalmusk from "../assets/images/St. Louis/10.jpg";
import purewhitemusk from "../assets/images/St. Louis/11.jpg";
import misterlomani from "../assets/images/St. Louis/12.jpg";
import bluewater from "../assets/images/St. Louis/13.jpg";
import steffinei from "../assets/images/St. Louis/14.jpg";
import lepolo from "../assets/images/St. Louis/15.jpg";
import royalairforce from "../assets/images/St. Louis/16.jpg";
import sexinthecity from "../assets/images/St. Louis/17.jpg";
import atoz from "../assets/images/St. Louis/18.jpg";
import leopolice from "../assets/images/St. Louis/19.jpg";
import machomanpourhomme from "../assets/images/St. Louis/20.jpg";
import maninblue from "../assets/images/St. Louis/21.jpg";
import cabret from "../assets/images/St. Louis/22.jpg";
import smithkele from "../assets/images/St. Louis/23.jpg";
import goldenheart from "../assets/images/St. Louis/24.jpg";
import toimpress from "../assets/images/St. Louis/25.jpg";
import redberry from "../assets/images/St. Louis/26.jpg";
import kennedysmith from "../assets/images/St. Louis/27.jpg";
import bornking from "../assets/images/St. Louis/28.jpg";
import louisautograph from "../assets/images/St. Louis/29.jpg";
import doubleshot from "../assets/images/St. Louis/30.jpg";

import { BsChevronDown } from "react-icons/bs";
function Products({ category }) {
  const stLouisProducts  = [
    {
      image: blackberry,
      name: "Blackberry",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: bapple,
      name: "Bapple",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: blackcode,
      name: "Blackcode",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: bornking,
      name: "Born King",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "",
      quantity: "Available in: 10ml, 30ml, 50ml, 100ml",
      mrp: "",
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
