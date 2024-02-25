import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Sliderfade.css";

import imgcharacter from "../../Assets/slideshow-character1.png";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Sliderfade() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="main">
            <div className="slideContent">
              <div className="sectionleft">
                <p>Discover More</p>
                <h2>Get Latest Fashion Cloths</h2>
                <h4>Buy Now</h4>
              </div>
              <div className="sectionright">
                <img src={imgcharacter} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <div className="slideContent">
              <div className="sectionleft">
                <p>Latest Fashion</p>
                <h2>
                  Unlimied Styles with <br />
                  Various Designs
                </h2>
                <h4>Discover</h4>
              </div>
              <div className="sectionright">
                <img src={imgcharacter} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
