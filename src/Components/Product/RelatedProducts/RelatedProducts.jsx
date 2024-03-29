import React from "react";
import "./RelatedProducts.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import relatedProductData from "../../../Data/RelatedProducts";

import { FiHeart } from "react-icons/fi";

const RelatedProducts = () => {
  // const [wishList, setWishList] = useState(false);

  return (
    <div>
      <div className="relatedProductSection">
        <div className="relatedProductContainer">
          <h2>
            RELATED <span>PRODUCTS</span>
          </h2>

          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
            }}
          >
            {relatedProductData.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="rpContainer">
                    <div className="rpImages">
                      <img
                        src={product.frontImg}
                        alt={product.name}
                        className="rpFrontImg"
                      />
                      <img
                        src={product.backImg}
                        className="rpBackImg"
                        alt={product.name}
                      />
                      <h4>Add to Cart</h4>
                    </div>

                    <div className="relatedProductInfo">
                      <div className="rpCategoryWishlist">
                        <p>Dresses</p>
                        <FiHeart />
                      </div>
                      <div className="productNameInfo">
                        <h6>{product.productName}</h6>
                        <p>{product.productPrice}</p>
                        <span>{product.productReviews}</span>
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

export default RelatedProducts;
