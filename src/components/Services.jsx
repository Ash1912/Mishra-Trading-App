import React, { useState, useEffect } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import cosmetics1 from "../assets/images/cosmetics1.jpg";
import cosmetics2 from "../assets/images/cosmetics2.jpg";
import cosmetics3 from "../assets/images/cosmetics3.jpg";
import skincare1 from "../assets/images/skcare1.jpg";
import skincare2 from "../assets/images/skcare2.png";
import skincare3 from "../assets/images/skcare3.jpg";
import skincare4 from "../assets/images/skcare4.jpg";
import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";
import perfume4 from "../assets/images/perfume4.jpg";
import perfume5 from "../assets/images/perfume5.jpg";
import gift1 from "../assets/images/gift1.jpg";
import gift2 from "../assets/images/gift2.jpg";

function Services() {
  const [currentCosmeticImage, setCosmeticImage] = useState(cosmetics1);
  const [currentSkincareImage, setSkincareImage] = useState(skincare1);
  const [currentPerfumeImage, setPerfumeImage] = useState(perfume1);
  const [currentGiftImage, setGiftImage] = useState(gift1);

  useEffect(() => {
    const cosmeticImages = [cosmetics1, cosmetics2, cosmetics3];
    let cosmeticIndex = 0;
    const timerCosmetics = setInterval(() => {
      cosmeticIndex = (cosmeticIndex + 1) % cosmeticImages.length;
      setCosmeticImage(cosmeticImages[cosmeticIndex]);
    }, 3000);

    return () => clearInterval(timerCosmetics);
  }, []);

  useEffect(() => {
    const skincareImages = [skincare1, skincare2, skincare3, skincare4];
    let skincareIndex = 0;
    const timerSkincare = setInterval(() => {
      skincareIndex = (skincareIndex + 1) % skincareImages.length;
      setSkincareImage(skincareImages[skincareIndex]);
    }, 3000);

    return () => clearInterval(timerSkincare);
  }, []);

  useEffect(() => {
    const perfumeImages = [perfume1, perfume2, perfume3, perfume4, perfume5];
    let perfumeIndex = 0;
    const timerPerfume = setInterval(() => {
      perfumeIndex = (perfumeIndex + 1) % perfumeImages.length;
      setPerfumeImage(perfumeImages[perfumeIndex]);
    }, 3000);

    return () => clearInterval(timerPerfume);
  }, []);

  useEffect(() => {
    const giftImages = [gift1, gift2];
    let giftIndex = 0;
    const timerGift = setInterval(() => {
      giftIndex = (giftIndex + 1) % giftImages.length;
      setGiftImage(giftImages[giftIndex]);
    }, 3000);

    return () => clearInterval(timerGift);
  }, []);

  return (
    <div className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
          {/* <p>Weekly Deals</p> */}
          <h4>Cosmetics Products</h4>
          <Link to="categories-container" smooth={true} duration={1000} className="learnMore-link" activeClass="active">
          <button>Learn More</button> 
          </Link>
          <div className="image">
            <img src={currentCosmeticImage} alt="Cosmetic Service" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Skincare Products</h4>
            <Link to="categories-container" smooth={true} duration={1000} className="learnMore-link" activeClass="active">
            <p>
              Learn More <HiArrowSmRight />
            </p>
            </Link>
          </div>
          <div className="image">
            <img src={currentSkincareImage} alt="Skincare Service" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={currentGiftImage} alt="Gift Service" />
          </div>
          <div className="content">
            <h4>Gift Products</h4>
            <Link to="categories-container" smooth={true} duration={1000} className="learnMore-link" activeClass="active">
            <p>
              Learn More <HiArrowSmRight />
            </p>
            </Link>
          </div>
        </div>
        <div className="service four">
          {/* <p>EhyaVersarry Monthly Deals</p> */}
          <h4>Perfume Products</h4>
          <Link to="categories-container" smooth={true} duration={1000} className="learnMore-link" activeClass="active">
            <p>
              Learn More <HiArrowSmRight />
            </p>
            </Link>
          <div className="image">
          <img src={currentPerfumeImage} alt="Perfume Service" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
