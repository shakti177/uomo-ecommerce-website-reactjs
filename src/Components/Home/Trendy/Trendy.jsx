import React, { useState } from "react";
import "./Trendy.css";

import { Link } from "react-router-dom";

import StoreData from "../../../Data/StoreData";

import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Trendy = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [wishList, setWishList] = useState({});

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  return (
    <div>
      <div className="trendyProducts">
        <h2>
          Our Trendy <span>Products</span>
        </h2>
        <div className="trendyTabs">
          <div className="tabs">
            <p
              onClick={() => handleTabClick("tab1")}
              className={activeTab === "tab1" ? "active" : ""}
            >
              All
            </p>
            <p
              onClick={() => handleTabClick("tab2")}
              className={activeTab === "tab2" ? "active" : ""}
            >
              New Arrivals
            </p>
            <p
              onClick={() => handleTabClick("tab3")}
              className={activeTab === "tab3" ? "active" : ""}
            >
              Best Seller
            </p>
            <p
              onClick={() => handleTabClick("tab4")}
              className={activeTab === "tab4" ? "active" : ""}
            >
              Top Rated
            </p>
          </div>
          <div className="trendyTabContent">
            {activeTab === "tab1" && (
              <div className="trendyMainContainer">
                {StoreData.slice(0, 8).map((product) => {
                  return (
                    <div className="trendyProductContainer">
                      <div className="trendyProductImages">
                        <img
                          src={product.frontImg}
                          alt=""
                          className="trendyProduct_front"
                        />
                        <img
                          src={product.backImg}
                          alt=""
                          className="trendyProduct_back"
                        />
                        <h4>Add to Cart</h4>
                      </div>
                      <div className="trendyProductInfo">
                        <div className="trendyProductCategoryWishlist">
                          <p>Dresses</p>
                          <FiHeart
                            onClick={() =>
                              handleWishlistClick(product.productID)
                            }
                            style={{
                              color: wishList[product.productID]
                                ? "red"
                                : "#767676",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div className="trendyProductNameInfo">
                          <Link to="product">
                            <h5>{product.productName}</h5>
                          </Link>

                          <p>{product.productPrice}</p>
                          <div className="trendyProductRatingReviews">
                            <div className="trendyProductRatingStar">
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
                  );
                })}
              </div>
            )}
            {activeTab === "tab2" && <div>tab2</div>}
            {activeTab === "tab3" && <div>Tab 3</div>}
            {activeTab === "tab4" && <div>Tab 4</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendy;
