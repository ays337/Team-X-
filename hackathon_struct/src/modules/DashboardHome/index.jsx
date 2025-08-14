import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import WHData from "./components/WHData";
import WHData_Test from "./components/LayoutTest/WHData_Test";
import Base from "./components/LayoutTest/Base";
import { getWHDataThunk } from "store/thunks/dashboardhome-thunk";
// import "common/styles.css";

import "./components/LayoutTest/base_generated.css";

const DashboardHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWHDataThunk());
  }, [dispatch]);
  return (
    <>
      <WHData_Test />
    </>
  );
};

export default DashboardHome;
