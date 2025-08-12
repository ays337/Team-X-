import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import WHData from "./components/WHData";
import { getWHDataThunk } from "store/thunks/dashboardhome-thunk";
import "common/styles.css";

const DashboardHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWHDataThunk());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="home-grid">
        <h1 className="home-title">Warehouse Dashboard</h1>
        <div className="button-grid three-btn">
          <div className="button-with-label"></div>
        </div>
      </div>
      <WHData />
    </div>
  );
};

export default DashboardHome;
