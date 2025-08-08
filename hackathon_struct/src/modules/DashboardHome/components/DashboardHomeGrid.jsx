import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "common/styles.css";

const DashboardHomeGrid = () => {
  const dispatch = useDispatch();

  return (
    <div className="home-grid">
      <h1 className="home-title">Warehouse Dashboard</h1>
      <div className="button-grid three-btn">
        <div className="button-with-label"></div>
      </div>
    </div>
  );
};

export default DashboardHomeGrid;
