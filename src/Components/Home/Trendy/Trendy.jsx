import React, { useState } from "react";
import "./Trendy.css";

const Trendy = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              <div className="productContainer">
                <h4>Add to Card</h4>
              </div>
            )}
            {activeTab === "tab2" && <div>Tab 2</div>}
            {activeTab === "tab3" && <div>Tab 3</div>}
            {activeTab === "tab4" && <div>Tab 4</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendy;
