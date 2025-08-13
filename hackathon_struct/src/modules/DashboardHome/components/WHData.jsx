import React, { useState } from "react";
import AlertsPage from "./Alerts/AlertsPage";
import AlertPopup from "./Alerts/AlertPopup";
import { useSelector } from "react-redux";
// import "common/styles.css";
import "../components/LayoutTest/base.css"; // Importing the base styles for layout
import FilterHeader from "./Table/FilterHeader";
import TableHeader from "./Table/TableHeader";
import TableRow from "./Table/TableRow";

const WHData = () => {
  const data = useSelector((state) => state.dashboardHome.wHData);
  const [sortedMock, setSortedMock] = useState(data);
  const [filteredMock, setFilteredMock] = useState(sortedMock);

  return (
    <>
      <div>
        <FilterHeader data={sortedMock} onFilteredChange={setFilteredMock} />
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
