import React, { useState, useCallback } from "react";
import AlertsPage from "./Alerts/AlertsPage";
import AlertPopup from "./Alerts/AlertPopup";
import { useSelector } from "react-redux";
// import "../components/LayoutTest/base.css"; // Importing the base styles for layout
import "../components/LayoutTest/base_generated.css";
import FilterHeader from "./Table/FilterHeader";
import TableHeader from "./Table/TableHeader";
import TableRow from "./Table/TableRow";

const WHData = () => {
  const data = useSelector((state) => state.dashboardHome.wHData);
  const [sortedMock, setSortedMock] = useState(data);
  const [filteredMock, setFilteredMock] = useState(sortedMock);

  const onFilteredChange = useCallback((filtered) => {
    setFilteredMock(filtered);
  }, []);

  return (
    <>
      <div>
        <FilterHeader data={sortedMock} onFilteredChange={onFilteredChange} />
        <table className="tablestyles">
          <TableHeader data={data} onSortChange={setSortedMock} />
          <TableRow data={filteredMock} />
        </table>
      </div>
      <AlertsPage sortedMock={sortedMock} />
      <AlertPopup data={data} />
    </>
  );
};

export default WHData;
