import React from "react";
import compare1 from "../assets/images/compare1.png";
import compare2 from "../assets/images/compare2.png";
import perfume1 from "../assets/images/perfume1.jpg";
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
import blackberryDeodorant from "../assets/images/St. Louis/31.jpg";
import blackcodeDeodorant from "../assets/images/St. Louis/32.jpg";
import maninblackDeodorant from "../assets/images/St. Louis/33.jpg";
import maninblueDeodorant from "../assets/images/St. Louis/34.jpg";
import blueberryDeodorant from "../assets/images/St. Louis/35.jpg";
import originalmuskDeodorant from "../assets/images/St. Louis/36.jpg";
import louisautographDeodorant from "../assets/images/St. Louis/37.jpg";
import pinkberryDeodorant from "../assets/images/St. Louis/38.jpg";
import purewhitemuskDeodorant from "../assets/images/St. Louis/39.jpg";
import machomanpourhommeDeodorant from "../assets/images/St. Louis/40.jpg";
import whitelondonDeodorant from "../assets/images/St. Louis/41.jpg";
import sexinthecityDeodorant from "../assets/images/St. Louis/42.jpg";
import blackberry10ml from "../assets/images/St. Louis/43.jpg";
import bapple10ml from "../assets/images/St. Louis/44.jpg";
import whitelondon10ml from "../assets/images/St. Louis/45.jpg";
import atoz10ml from "../assets/images/St. Louis/46.jpg";
import purerose from "../assets/images/St. Louis/47.jpg";
import puresandal from "../assets/images/St. Louis/48.jpg";
import purejasmine from "../assets/images/St. Louis/49.jpg";
import pureroseRS from "../assets/images/St. Louis/50.jpg";
import purejasmineRS from "../assets/images/St. Louis/51.jpg";
import puresandalRS from "../assets/images/St. Louis/52.jpg";
import lavenderRS from "../assets/images/St. Louis/53.jpg";
import bouquetRS from "../assets/images/St. Louis/54.jpg";
import attarful from "../assets/images/St. Louis/55.jpg";
import jasmine from "../assets/images/St. Louis/56.jpg";
import sandal from "../assets/images/St. Louis/57.jpg";
import rose from "../assets/images/St. Louis/58.jpg";
import lavender from "../assets/images/St. Louis/59.jpg";

import { BsChevronDown } from "react-icons/bs";
function Products({ category }) {
  const stLouisProducts  = [
    {
      image: blackberry10ml,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 10ml",
      mrp: "₹ 60",
    },
    {
      image: blackberry,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: blackberry,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: blackberry,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 10ml",
      mrp: "₹ 60",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: bapple10ml,
      name: "Bapple",
      model: "EAU DE PARFUM",
      quantity: "Available in: 10ml",
      mrp: "₹ 60",
    },
    {
      image: bapple,
      name: "Bapple",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: bapple,
      name: "Bapple",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: bapple,
      name: "Bapple",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      quantity: "Available in: 10ml",
      mrp: "₹ 60",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: whitelondon10ml,
      name: "White London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 10ml",
      mrp: "₹ 60",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: atoz10ml,
      name: "A to Z",
      model: "EAU DE PARFUM",
      quantity: "Available in: 10ml",
      mrp: "₹ 60",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: bornking,
      name: "Born King",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: bornking,
      name: "Born King",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: bornking,
      name: "Born King",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: blackberryDeodorant,
      name: "BlackBerry",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: blackcodeDeodorant,
      name: "Black Code",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: maninblackDeodorant,
      name: "Man in Black",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: maninblueDeodorant,
      name: "Man in Blue",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: blueberryDeodorant,
      name: "BlueBerry",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: originalmuskDeodorant,
      name: "Original Musk",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: louisautographDeodorant,
      name: "Louis Autograph",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: pinkberryDeodorant,
      name: "PinkBerry",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: purewhitemuskDeodorant,
      name: "Pure White Musk",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: machomanpourhommeDeodorant,
      name: "Macho Man Pour Homme",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: whitelondonDeodorant,
      name: "White London",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: sexinthecityDeodorant,
      name: "Sex in the City",
      model: "Deodorant Body Spray",
      quantity: "Available in: 200ml",
      mrp: "₹ 279",
    },
    {
      image: purerose,
      name: "Pure Rose",
      model: "Deodorant Body Spray",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: purerose,
      name: "Pure Rose",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: purerose,
      name: "Pure Rose",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: puresandal,
      name: "Pure Sandal",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: puresandal,
      name: "Pure Sandal",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: puresandal,
      name: "Pure Sandal",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: purejasmine,
      name: "Pure Jasmine",
      model: "EAU DE PARFUM",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: purejasmine,
      name: "Pure Jasmine",
      model: "EAU DE PARFUM",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: purejasmine,
      name: "Pure Jasmine",
      model: "EAU DE PARFUM",
      quantity: "Available in: 100ml",
      mrp: "₹ 417",
    },
    {
      image: bluelondon,
      name: "Blue London Perfume",
      model: "",
      quantity: "Available in: 30ml",
      mrp: "₹ 189",
    },
    {
      image: bluelondon,
      name: "Blue London Perfume",
      model: "",
      quantity: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: pureroseRS,
      name: "Pure Rose",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: purejasmineRS,
      name: "Pure Jasmine",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: puresandalRS,
      name: "Pure Sandal",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: lavenderRS,
      name: "Lavender",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: bouquetRS,
      name: "Bouquet",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
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
    {
      image: attarful,
      name: "Attarful",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: jasmine,
      name: "Jasmine",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: sandal,
      name: "Sandal",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: rose,
      name: "Rose",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
    },
    {
      image: lavender,
      name: "Lavender",
      model: "Room Freshner",
      quantity: "Available in: 250ml",
      mrp: "₹ 198",
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
