import React from "react";
import "./MainSlider.css";
import characterimg1 from "../../Assets/slideshow-character1.png";

const MainSlider = () => {
  return (
    <>
      <div className="sliderMain">
        <div className="SliderContent">
          <div className="sectionleft">
            <p>New Trend</p>
            <h1>Summer Sale Stylish</h1>
            <h2>Womens</h2>
            <h5>Discover More</h5>
          </div>
          <div className="sectionright">
            <img src={characterimg1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
