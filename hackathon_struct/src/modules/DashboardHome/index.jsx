import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import WHData from "./components/WHData";
import Base from "./components/LayoutTest/Base";
import { getWHDataThunk } from "store/thunks/dashboardhome-thunk";
// import "common/styles.css";
import "./components/LayoutTest/base.css"; // Assuming this is the correct path for the CSS file

const DashboardHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWHDataThunk());
  }, [dispatch]);

  // return (
  //   <div className="home-container">
  //     <div className="home-grid">
  //       <h1 className="home-title">Warehouse Dashboard</h1>
  //       <div className="button-grid three-btn">
  //         <div className="button-with-label"></div>
  //       </div>
  //     </div>
  //     <WHData />
  //   </div>
  // );

  // return (
  //   <div className="base-wrapper">
  //     <section className="section-top-banner">
  //       <h1>Welcome to the Dashboard</h1>
  //     </section>
  //     <section className="section-surface-1">
  //       <Base />
  //     </section>
  //   </div>
  // );

  return (
    <>
      <Base />
    </>
  );
};

export default DashboardHome;
