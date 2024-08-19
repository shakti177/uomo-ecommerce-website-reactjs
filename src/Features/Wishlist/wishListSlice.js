import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearWishList: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
