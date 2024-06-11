import React, { useState } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartTotalAmount,
} from "../../Features/Cart/cartSlice";

import { MdOutlineClose } from "react-icons/md";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("cartTab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1 && quantity <= 20) {
      dispatch(updateQuantity({ productID: productId, quantity: quantity }));
    }
  };

  const totalPrice = useSelector(selectCartTotalAmount);

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
              <div className="shoppingBagSection">
                <div className="shoppingBagTableSection">
                  <table className="shoppingBagTable">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.productID}>
                          <td>
                            <div className="shoppingBagTableImg">
                              <img src={item.frontImg} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className="shoppingBagTableProductDetail">
                              <h4>{item.productName}</h4>
                              <p>{item.productReviews}</p>
                            </div>
                          </td>
                          <td
                            style={{
                              textAlign: "center",
                            }}
                          >
                            ${item.productPrice}
                          </td>
                          <td>
                            <div className="ShoppingBagTableQuantity">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productID,
                                    item.quantity - 1
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="text"
                                min="1"
                                max="20"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item.productID,
                                    parseInt(e.target.value)
                                  )
                                }
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productID,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <p
                              style={{
                                textAlign: "center",
                              }}
                            >
                              ${item.quantity * item.productPrice}
                            </p>
                          </td>
                          <td>
                            <MdOutlineClose
                              onClick={() =>
                                dispatch(removeFromCart(item.productID))
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="shoppingBagTotal">
                  {/* <h3>Cart Total</h3>
                  <table className="shoppingBagTotalTable">
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td>${totalPrice.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>
                          Total Price: $
                          {(totalPrice === 0 ? 0 : totalPrice + 12).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
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
