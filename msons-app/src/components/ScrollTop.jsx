import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scrolltop" style={{ display: visible ? 'block' : 'none' }}>
      <button onClick={scrollToTop} className="scroll-top-button" aria-label="Scroll to top">
        <FaChevronUp />
      </button>
    </div>
  );
}

export default ScrollTop;
