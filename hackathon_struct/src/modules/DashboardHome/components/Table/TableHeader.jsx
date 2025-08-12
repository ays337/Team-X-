import React, { useState, useEffect } from "react";

const TableHeader = ({ data, onSortChange }) => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      } else {
        return {
          key,
          direction: "desc",
        };
      }
    });
  };

  const sortedArray = data.slice().sort((a, b) => {
    const aVal = a[sortConfig.key] ?? "";
    const bVal = b[sortConfig.key] ?? "";
    if (typeof aVal === "number" || !isNaN(Number(aVal))) {
      return sortConfig.direction === "asc"
        ? Number(aVal) - Number(bVal)
        : Number(bVal) - Number(aVal);
    }
    return sortConfig.direction === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  useEffect(() => {
    onSortChange(sortedArray);
  }, [sortedArray, onSortChange]);

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <thead className="theadstyles">
      <tr className="trheadstyles">
        <th className="thheadstyles" onClick={() => handleSort("sku_id")}>
          ID {getSortArrow("sku_id")}
        </th>
        <th
          className="thheadstyles"
          onClick={() => handleSort("days_of_service")}
        >
          DOS {getSortArrow("days_of_service")}
        </th>
        <th className="thheadstyles" onClick={() => handleSort("pallets")}>
          Pallets {getSortArrow("pallets")}
        </th>
        <th className="thheadstyles" onClick={() => handleSort("weight_lbs")}>
          Weight {getSortArrow("weight_lbs")}
        </th>
        <th
          className="thheadstyles"
          onClick={() => handleSort("remortgage_gallons")}
        >
          Remortgage Gallons {getSortArrow("remortgage_gallons")}
        </th>
        <th className="thheadstyles" onClick={() => handleSort("alert_type")}>
          Alert Type {getSortArrow("alert_type")}
        </th>
        <th className="thheadstyles" onClick={() => handleSort("staging_lane")}>
          Staging Lane {getSortArrow("staging_lane")}
        </th>
        <th className="thheadstyles" onClick={() => handleSort("destination")}>
          Destination {getSortArrow("destination")}
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
