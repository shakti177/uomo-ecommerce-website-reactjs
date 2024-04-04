import React from "react";
import Product from "../Components/Product/ProductMain/Product";
import RelatedProducts from "../Components/Product/RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  return (
    <>
      <Product />
      <RelatedProducts autoplayed="false" />
    </>
  );
};

export default ProductDetails;
