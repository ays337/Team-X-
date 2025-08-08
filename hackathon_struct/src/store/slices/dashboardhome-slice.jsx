import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dashboardHomeSlice = createSlice({
  name: "dashboardHome",
  initialState: {
    wHData: [],
  },
  reducers: {
    loadWHData(state, action) {
      const wHData = action.payload;
      state.wHData = wHData;
      console.log("Dashboard Home Server Previous Times:", wHData);
    },
  },
});

const localPersistConfig = {
  key: "app",
  storage,
};

export const dashboardHomeActions = dashboardHomeSlice.actions;

const persistedDashboardHomeReducer = persistReducer(
  localPersistConfig,
  dashboardHomeSlice.reducer
);

export default persistedDashboardHomeReducer;
