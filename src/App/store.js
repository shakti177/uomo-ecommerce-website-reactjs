import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
