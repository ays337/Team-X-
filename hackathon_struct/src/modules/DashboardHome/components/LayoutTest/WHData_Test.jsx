import React from "react";
import AlertsPage from "../Alerts/AlertsPage";
import AlertPopup from "../Alerts/AlertPopup";
import { useSelector } from "react-redux";
import "common/styles.css";
import "../LayoutTest/base_generated.css"; // Importing the base styles for layout
import TableHeader_test from "./TableTest/TableHeader_test";
import TableRow_test from "./TableTest/TableRow_test";
import FilterHeader_test from "./TableTest/FilterHeader_test";
import { getFilteredMock } from "store/selectors/dashboardHomeSelectors";

const WHData_Test = () => {
  const filteredMock = useSelector(getFilteredMock);

  return (
    <>
      <div className="base-wrapper">
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "260px", // adjust as needed for your banner height
          }}
          className="section-top-banner"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
            }}
          >
            <h1
              style={{
                fontSize: "6.0rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "#fff",
                fontFamily: "'Google Sans Code', sans-serif",
              }}
            >
              WH Dashboard
            </h1>
          </div>
        </section>
        <section className="section-surface-1">
          <div className="container-grid-1">
            <div className="table-toolbar-outline">
              <FilterHeader_test />
            </div>
            <div className="table-separator"></div>
            <table id="warehouse-table" className="warehouse-table">
              <TableHeader_test />
              <TableRow_test data={filteredMock} />
            </table>
          </div>
        </section>
        <AlertsPage sortedMock={filteredMock} />
        <AlertPopup data={filteredMock} />
      </div>
    </>
  );
};

export default WHData_Test;
