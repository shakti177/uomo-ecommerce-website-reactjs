import React, { useState } from "react";
import "./AdditionalInfo.css";

const AdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("aiTab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="productAdditionalInfo">
      <div className="productAdditonalInfoContainer">
        <div className="productAdditionalInfoTabs">
          <div className="aiTabs">
            <p
              onClick={() => handleTabClick("aiTab1")}
              className={activeTab === "aiTab1" ? "aiActive" : ""}
            >
              Description
            </p>
            <p
              onClick={() => handleTabClick("aiTab2")}
              className={activeTab === "aiTab2" ? "aiActive" : ""}
            >
              Additional Information
            </p>
            <p
              onClick={() => handleTabClick("aiTab3")}
              className={activeTab === "aiTab3" ? "aiActive" : ""}
            >
              Reviews (2)
            </p>
          </div>
        </div>
        <div className="productAdditionalInfoContent">
          {/* Tab1 */}

          {activeTab === "aiTab1" && (
            <div className="aiTabDescription">
              <div className="descriptionPara">
                <h3>Sed do eiusmod tempor incididunt ut labore</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
              <div className="descriptionParaGrid">
                <div className="descriptionPara">
                  <h3>Why choose product?</h3>
                  <p>
                    <ul>
                      <li>Creat by cotton fibric with soft and smooth</li>
                      <li>
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </li>
                      <li>Downloadable/Digital Products, Virtual Products</li>
                    </ul>
                  </p>
                </div>
                <div className="descriptionPara">
                  <h3>Sample Number List</h3>
                  <p>
                    <ol>
                      <li>Creat by cotton fibric with soft and smooth</li>
                      <li>
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </li>
                      <li>Downloadable/Digital Products, Virtual Products</li>
                    </ol>
                  </p>
                </div>
              </div>
              <div className="descriptionPara">
                <h3>Lining</h3>
                <p style={{ marginTop: "-10px" }}>
                  100% Polyester, Main: 100% Polyester.
                </p>
              </div>
            </div>
          )}

          {/* Tab2 */}

          {activeTab === "aiTab2" && (
            <div className="aiTabAdditionalInfo">
              <div className="additionalInfoContainer">
                <h6>Weight</h6>
                <p> 1.25 kg</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Dimensions</h6>
                <p> 90 x 60 x 90 cm</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Size</h6>
                <p> XS, S, M, L, XL</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Color</h6>
                <p> Black, Orange, White</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Storage</h6>
                <p> Relaxed fit shirt-style dress with a rugged</p>
              </div>
            </div>
          )}

          {/* Tab3 */}

          {activeTab === "aiTab3" && <div className="aiTabReview"></div>}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
