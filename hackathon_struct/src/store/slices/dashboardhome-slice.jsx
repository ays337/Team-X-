import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dashboardHomeSlice = createSlice({
  name: "dashboardHome",
  initialState: {
    wHData: [],
    sortConfig: { key: "", direction: "" },
    alertFilter: "",
    destinationFilter: "",
    stagingFilter: "",
  },
  reducers: {
    setSortConfig(state, action) {
      state.sortConfig = action.payload;
    },
    setAlertFilter(state, action) {
      state.alertFilter = action.payload;
    },
    setDestinationFilter(state, action) {
      state.destinationFilter = action.payload;
    },
    setStagingFilter(state, action) {
      state.stagingFilter = action.payload;
    },
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
