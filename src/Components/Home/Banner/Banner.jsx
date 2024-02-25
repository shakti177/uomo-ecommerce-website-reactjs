import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="bannerLeft">
          <h6 className="bannerh6">Starting At $19</h6>
          <h3 className="bannerh3">Women's T-shirts</h3>
          <h5 className="bannerh5">Shop Now</h5>
        </div>
        <div className="bannerRight">
          <h6 className="bannerh6" style={{ color: "black" }}>
            Starting At $39
          </h6>
          <h3 className="bannerh3" style={{ color: "black" }}>
            Men's Sportswear
          </h3>
          <h5 className="bannerh5" style={{ color: "black" }}>
            Shop Now
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
