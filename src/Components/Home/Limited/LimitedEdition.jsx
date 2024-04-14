import React, { useState } from "react";
import "./LimitedEdition.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import StoreData from "../../../Data/StoreData";

import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LimitedEdition = () => {
  const [wishList, setWishList] = useState({});

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  return (
    <div>
      <div className="limitedProductSection">
        <h2>
          Limited <span>Edition</span>
        </h2>
        <div className="limitedProductSlider">
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
            }}
          >
            {StoreData.slice(8, 13).map((product) => {
              return (
                <SwiperSlide key={product.productID}>
                  <div className="lpContainer">
                    <div className="lpImageContainer">
                      <img
                        src={product.frontImg}
                        alt={product.productName}
                        className="lpImage"
                      />
                      <h4>Add to Cart</h4>
                    </div>

                    <div className="limitedProductInfo">
                      <div className="lpCategoryWishlist">
                        <p>Dresses</p>
                        <FiHeart
                          onClick={() => handleWishlistClick(product.productID)}
                          style={{
                            color: wishList[product.productID]
                              ? "red"
                              : "#767676",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div className="productNameInfo">
                        <h5>{product.productName}</h5>
                        <p>{product.productPrice}</p>
                        <div className="productRatingReviews">
                          <div className="productRatingStar">
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                            <FaStar color="#FEC78A" size={10} />
                          </div>

                          <span>{product.productReviews}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LimitedEdition;
