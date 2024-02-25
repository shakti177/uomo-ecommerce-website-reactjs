import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Pagination } from "swiper/modules";
import "./Slider.css";
import sliderbg from "../../Assets/slideshow-pattern.png";
import character from "../../Assets/slideshow-character1.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[EffectFade, Pagination]}
        spaceBetween={50}
        effect={"fade"}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        className="SliderMain"
      >
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideshow-bg">
              <img src={sliderbg} alt="" />
            </div>
            <div className="slideimg">
              <img src={character} alt="" />
            </div>
            <div className="slidetext">
              <h6>Summer 2020</h6>
              <h1>Discover More</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideshow-bg">
              <img src={sliderbg} alt="" />
            </div>
            <div className="slideimg"></div>
            <div className="slidetext">
              <h1>Explore the World of Coding</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
