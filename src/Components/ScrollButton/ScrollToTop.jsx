import React, { useEffect, useState } from "react";

import "./ScrollToTop.css";

import { GoChevronUp } from "react-icons/go";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <div className="iconStyle" onClick={goToTop}>
          <GoChevronUp color="black" size={23} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
