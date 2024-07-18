import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  count: 10,
  product: [
    { id: 1, name: "product1", price: 100 },
    { id: 2, name: "product2", price: 200 },
    { id: 3, name: "product3", price: 300 },
  ],
  name: "superman",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.count += 10;
    },
    decrement: (state) => {
      state.value -= 1;
      state.count -= 10;
    },
    incrementBy100: (state) => {
      state.value += 100;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, incrementBy100 } =
  counterSlice.actions;

export default counterSlice.reducer;
