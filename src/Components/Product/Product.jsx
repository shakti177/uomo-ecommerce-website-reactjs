import React, { useState } from "react";

import product1 from "../../Assets/ProductDetail/productdetail-1.jpg";
import product2 from "../../Assets/ProductDetail/productdetail-2.jpg";
import product3 from "../../Assets/ProductDetail/productdetail-3.jpg";
import product4 from "../../Assets/ProductDetail/productdetail-4.jpg";

import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import "./Product.css";

const Product = () => {
  const productImg = [product1, product2, product3, product4];
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? productImg.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === productImg.length - 1 ? 0 : currentImg + 1);
  };

  return (
    <div>
      <div className="productSection">
        <div className="productGallery">
          <div className="productThumb">
            <img src={product1} onClick={() => setCurrentImg(0)} alt="" />
            <img src={product2} onClick={() => setCurrentImg(1)} alt="" />
            <img src={product3} onClick={() => setCurrentImg(2)} alt="" />
            <img src={product4} onClick={() => setCurrentImg(3)} alt="" />
          </div>
          <div className="productFullImg">
            <img src={productImg[currentImg]} alt="" />
            <div className="buttonsGroup">
              <button onClick={prevImg} className="directionBtn">
                <GoChevronLeft size={18} />
              </button>
              <button onClick={nextImg} className="directionBtn">
                <GoChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="productDetails"></div>
      </div>
    </div>
  );
};

export default Product;
