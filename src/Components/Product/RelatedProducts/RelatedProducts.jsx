import React from "react";
import "./RelatedProducts.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import product1 from "../../../Assets/Products/product_1.jpg";
import product1_1 from "../../../Assets/Products/product_1-1.jpg";

const RelatedProducts = () => {
  return (
    <div>
      <div className="relatedProductSection">
        <div className="relatedProductContainer">
          <h2>
            RELATED <span>PRODUCTS</span>
          </h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={4}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="clothContainer">
                <img src={product1} alt="product1" className="cloth_front" />
                <img src={product1_1} className="cloth_back" alt="product2" />
                <h4>Add to Cart</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clothContainer">
                <img src={product1} alt="product1" className="cloth_front" />
                <img src={product1_1} className="cloth_back" alt="product2" />
                <h4>Add to Cart</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clothContainer">
                <img src={product1} alt="product1" className="cloth_front" />
                <img src={product1_1} className="cloth_back" alt="product2" />
                <h4>Add to Cart</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clothContainer">
                <img src={product1} alt="product1" className="cloth_front" />
                <img src={product1_1} className="cloth_back" alt="product2" />
                <h4>Add to Cart</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clothContainer">
                <img src={product1} alt="product1" className="cloth_front" />
                <img src={product1_1} className="cloth_back" alt="product2" />
                <h4>Add to Cart</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clothContainer">
                <img src={product1} alt="product1" className="cloth_front" />
                <img src={product1_1} className="cloth_back" alt="product2" />
                <h4>Add to Cart</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
