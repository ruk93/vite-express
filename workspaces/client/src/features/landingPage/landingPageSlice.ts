import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../library/store";

type LandingPageState = {
  count: number;
};

const initialState: LandingPageState = {
  count: window.appEnv.initialCount,
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
});
export const landingPageActions = landingPageSlice.actions;
export const landingPageSelectors = {
  count: (state: RootState) => state.landingPage.count,
};
export const landingPageReducer = landingPageSlice.reducer;
