import React, { useState } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartTotalAmount,
} from "../../Features/Cart/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("cartTab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="shoppingCartSection">
        <h2>Cart</h2>

        <div className="shoppingCartTabsContainer">
          <div className={`shoppingCartTabs ${activeTab}`}>
            <button
              className={activeTab === "cartTab1" ? "active" : ""}
              onClick={() => handleTabClick("cartTab1")}
            >
              <div className="shoppingCartTabsNumber">
                <h3>01</h3>
                <div className="shoppingCartTabsHeading">
                  <h3>Shopping Bag</h3>
                  <p>Manage Your Items List</p>
                </div>
              </div>
            </button>
            <button
              className={activeTab === "cartTab2" ? "active" : ""}
              onClick={() => handleTabClick("cartTab2")}
            >
              <div className="shoppingCartTabsNumber">
                <h3>02</h3>
                <div className="shoppingCartTabsHeading">
                  <h3>Shipping and Checkout</h3>
                  <p>Checkout Your Items List</p>
                </div>
              </div>
            </button>
            <button
              className={activeTab === "cartTab3" ? "active" : ""}
              onClick={() => handleTabClick("cartTab3")}
            >
              <div className="shoppingCartTabsNumber">
                <h3>03</h3>
                <div className="shoppingCartTabsHeading">
                  <h3>Confirmation</h3>
                  <p>Review And Submit Your Order</p>
                </div>
              </div>
            </button>
          </div>
          <div className="shoppingCartTabsContent">
            {/* tab1 */}
            {activeTab === "cartTab1" && (
              <div>
                {cartItems.map((item) => (
                  <div>
                    <h4>{item.productName}</h4>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.productID));
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* tab2 */}
            {activeTab === "cartTab2" && <div>2</div>}

            {/* tab3 */}
            {activeTab === "cartTab3" && <div>3</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
