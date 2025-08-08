import { createAsyncThunk } from "@reduxjs/toolkit";
import * as dashboardHomeApi from "api/dashboardhome";
import { dashboardHomeActions } from "store/slices/dashboardhome-slice";

export const getWHDataThunk = createAsyncThunk(
  "dashboardhome/getTime",
  async (_, { dispatch }) => {
    try {
      const response = await dashboardHomeApi.getWHData();
      dispatch(dashboardHomeActions.loadWHData(response.data.data));
    } catch (error) {
      console.error("Error retrieving Warehouse Data:", error);
    }
  }
);
