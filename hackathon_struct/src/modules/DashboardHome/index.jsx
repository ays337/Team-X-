import DashboardHomeGrid from "../../modules/DashboardHome/components/DashboardHomeGrid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuHeaders2 from "./components/MenuHeadersTest";
import MenuHeadersSort from "./components/MenuHeadersTestSort";
import { getWHDataThunk } from "store/thunks/dashboardhome-thunk";
import "common/styles.css";

const DashboardHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWHDataThunk());
  }, [dispatch]);

  return (
    <div className="home-container">
      <DashboardHomeGrid />
      <MenuHeadersSort />
    </div>
  );
};

export default DashboardHome;
