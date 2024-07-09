import React, { useState } from "react";
import "./Trendy.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";

import { Link } from "react-router-dom";

import StoreData from "../../../Data/StoreData";

import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const Trendy = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [wishList, setWishList] = useState({});

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const sortByPrice = (a, b) => {
    return a.productPrice - b.productPrice;
  };

  const sortByReviews = (a, b) => {
    const reviewsA = parseInt(
      a.productReviews.replace("k+ reviews", "").replace(",", "")
    );
    const reviewsB = parseInt(
      b.productReviews.replace("k+ reviews", "").replace(",", "")
    );
    return reviewsB - reviewsA;
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
            {/* Tab 1 */}

            {activeTab === "tab1" && (
              <div className="trendyMainContainer">
                {StoreData.slice(0, 8).map((product) => {
                  return (
                    <div className="trendyProductContainer" key={product.id}>
                      <div className="trendyProductImages">
                        <Link to="/Product" onClick={scrollToTop}>
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
                        </Link>
                        <h4 onClick={() => dispatch(addToCart(product))}>
                          Add to Cart
                        </h4>
                      </div>
                      <div
                        className="trendyProductImagesCart"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        <FaCartPlus />
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
                          <Link to="product" onClick={scrollToTop}>
                            <h5>{product.productName}</h5>
                          </Link>

                          <p>${product.productPrice}</p>
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

            {/* Tab 2 */}

            {activeTab === "tab2" && (
              <div className="trendyMainContainer">
                {StoreData.slice(0, 8)
                  .reverse()
                  .map((product) => {
                    return (
                      <div className="trendyProductContainer">
                        <div className="trendyProductImages">
                          <Link to="/Product" onClick={scrollToTop}>
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
                          </Link>
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
                            <Link to="product" onClick={scrollToTop}>
                              <h5>{product.productName}</h5>
                            </Link>

                            <p>${product.productPrice}</p>
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

            {/* Tab 3 */}

            {activeTab === "tab3" && (
              <div className="trendyMainContainer">
                {StoreData.slice(0, 8)
                  .sort(sortByReviews)
                  .map((product) => {
                    return (
                      <div className="trendyProductContainer">
                        <div className="trendyProductImages">
                          <Link to="/Product" onClick={scrollToTop}>
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
                          </Link>
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
                            <Link to="product" onClick={scrollToTop}>
                              <h5>{product.productName}</h5>
                            </Link>

                            <p>${product.productPrice}</p>
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

            {/* Tab 4 */}

            {activeTab === "tab4" && (
              <div className="trendyMainContainer">
                {StoreData.slice(0, 8)
                  .sort(sortByPrice)
                  .map((product) => {
                    return (
                      <div className="trendyProductContainer">
                        <div className="trendyProductImages">
                          <Link to="/Product">
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
                          </Link>
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
                            <Link to="/product" onClick={scrollToTop}>
                              <h5>{product.productName}</h5>
                            </Link>

                            <p>${product.productPrice}</p>
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
          </div>
        </div>
        <div className="discoverMore">
          <Link to="/shop" onClick={scrollToTop}>
            <p>Discover More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trendy;
