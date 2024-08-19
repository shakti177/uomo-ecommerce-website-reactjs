import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/Cart/cartSlice";
import wishListSlice from "../Features/Wishlist/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishListSlice,
  },
});

export default store;
