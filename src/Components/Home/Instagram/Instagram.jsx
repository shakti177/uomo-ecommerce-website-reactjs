import React from "react";
import "./Instagram.css";
import insta1 from "../../../Assets/Instagram/insta1.jpg";
import insta2 from "../../../Assets/Instagram/insta2.jpg";
import insta3 from "../../../Assets/Instagram/insta3.jpg";
import insta4 from "../../../Assets/Instagram/insta4.jpg";
import insta5 from "../../../Assets/Instagram/insta5.jpg";
import insta6 from "../../../Assets/Instagram/insta6.jpg";
import insta7 from "../../../Assets/Instagram/insta7.jpg";
import insta8 from "../../../Assets/Instagram/insta8.jpg";
import insta9 from "../../../Assets/Instagram/insta9.jpg";
import insta10 from "../../../Assets/Instagram/insta10.jpg";
import insta11 from "../../../Assets/Instagram/insta11.jpg";
import insta12 from "../../../Assets/Instagram/insta12.jpg";

const Instagram = () => {
  return (
    <>
      <div className="instagram">
        <h2>@UOMO</h2>
        <div className="instagramTiles">
          <div className="instagramtile">
            <img src={insta1} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta2} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta3} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta4} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta5} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta6} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta7} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta8} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta9} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta10} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta11} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta12} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;
