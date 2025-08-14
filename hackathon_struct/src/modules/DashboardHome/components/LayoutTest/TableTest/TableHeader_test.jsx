import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dashboardHomeActions } from "../../../../../store/slices/dashboardhome-slice";

const TableHeader_test = () => {
  const sortConfig = useSelector((state) => state.dashboardHome.sortConfig);
  const dispatch = useDispatch();

  const handleSort = (key) => {
    dispatch(
      dashboardHomeActions.setSortConfig({
        key,
        direction:
          sortConfig.key === key && sortConfig.direction === "asc"
            ? "desc"
            : "asc",
      })
    );
  };

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <thead className="warehouse-table-thead" style={{ top: "106px" }}>
      <tr className="warehouse-table-tr">
        <th
          className="warehouse-table-header-th warehouse-table-header-th-first"
          onClick={() => handleSort("sku_id")}
        >
          ID {getSortArrow("sku_id")}
        </th>
        <th
          className="warehouse-table-header-th"
          onClick={() => handleSort("days_of_service")}
        >
          DOS {getSortArrow("days_of_service")}
        </th>
        <th
          className="warehouse-table-header-th"
          onClick={() => handleSort("pallets")}
        >
          Pallets {getSortArrow("pallets")}
        </th>
        <th
          className="warehouse-table-header-th"
          onClick={() => handleSort("weight_lbs")}
        >
          Weight {getSortArrow("weight_lbs")}
        </th>
        <th
          className="warehouse-table-header-th"
          onClick={() => handleSort("remortgage_gallons")}
        >
          Remortgage Gallons {getSortArrow("remortgage_gallons")}
        </th>
        <th
          className="warehouse-table-header-th"
          onClick={() => handleSort("alert_type")}
        >
          Alert Type {getSortArrow("alert_type")}
        </th>
        <th
          className="warehouse-table-header-th"
          onClick={() => handleSort("staging_lane")}
        >
          Staging Lane {getSortArrow("staging_lane")}
        </th>
        <th
          className="warehouse-table-header-th warehouse-table-header-th-last"
          onClick={() => handleSort("destination")}
        >
          Destination {getSortArrow("destination")}
        </th>
      </tr>
    </thead>
  );
};
export default TableHeader_test;
