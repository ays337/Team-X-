import React, { useState } from "react";
import AlertsPage from "./Alerts/AlertsPage";
import AlertPopup from "./Alerts/AlertPopup";
import { useSelector } from "react-redux";
import "common/styles.css";
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
        <table className="tablestyles">
          <FilterHeader data={sortedMock} onFilteredChange={setFilteredMock} />
          <TableHeader data={data} onSortChange={setSortedMock} />
          <TableRow data={filteredMock} />
        </table>
        <AlertsPage sortedMock={sortedMock} />
        <AlertPopup data={data} />
      </div>
    </>
  );
};

export default WHData;
