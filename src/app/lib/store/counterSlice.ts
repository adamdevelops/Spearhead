import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounterState: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setCounterState } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
