import React from "react";
import Filter from "../Filters/Filter";

import { Link } from "react-router-dom";

import "./ShopDetails.css";
import StoreData from "../../../Data/StoreData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ShopDetails = () => {
  return (
    <div>
      <div className="shopDetails">
        <div className="shopDetailMain">
          <div className="shopDetails__left">
            <Filter />
          </div>
          <div className="shopDetails__right">
            <div className="shopDetailsSorting">
              <div className="shopDetailsBreadcrumbLink">
                <Link to="/">Home</Link>&nbsp;/&nbsp;
                <Link to="/shop">The Shop</Link>
              </div>
              <div className="shopDetailsSort">
                <select name="sort" id="sort">
                  <option value="default">Default Sorting</option>
                  <option value="Featured">Featured</option>
                  <option value="bestSelling">Best Selling</option>
                  <option value="a-z">Alphabetically, A-Z</option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="lowToHigh">Price, Low to high</option>
                  <option value="highToLow">Price, high to low</option>
                  <option value="oldToNew">Date, old to new</option>
                  <option value="newToOld">Date, new to old</option>
                </select>
              </div>
            </div>
            <div className="shopDetailsProducts">
              {StoreData.map((product) => (
                <div className="shopDetailsProduct" key={product.id}>
                  <Swiper navigation={true} modules={[Navigation]} loop={true}>
                    <SwiperSlide>
                      <img src={product.frontImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.backImg} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              ))}
            </div>
            <div className="shopDetailsPagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
