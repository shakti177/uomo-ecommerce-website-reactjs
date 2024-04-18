import React from "react";
import Filter from "../Filters/Filter";

import "./ShopDetails.css";

const ShopDetails = () => {
  return (
    <div>
      <div className="shopDetails">
        <div className="shopDetailMain">
          <div className="shopDetails__left">
            <Filter />
          </div>
          <div className="shopDetails__right">Products List</div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
