import React, { useState, useEffect } from "react";

const FilterHeader = ({ data, onFilteredChange }) => {
  const [alertFilter, setAlertFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [stagingFilter, setStagingFilter] = useState("");

  const filtered = data.filter((row) => {
    const alertMatch = alertFilter ? row.alert_type === alertFilter : true;
    const destinationMatch = destinationFilter
      ? row.destination === destinationFilter
      : true;
    const stagingMatch = stagingFilter
      ? row.staging_lane === stagingFilter
      : true;
    return alertMatch && destinationMatch && stagingMatch;
  });

  useEffect(() => {
    onFilteredChange(filtered);
  }, [filtered, onFilteredChange]);

  return (
    <thead className="theadstyles">
      <tr className="trheadstyles">
        <th style={{ border: "none" }} colSpan={4}>
          {" "}
          <div className="filter-group">
            <div className="filter-label">Filter by Alert</div>
            <select
              value={alertFilter}
              onChange={(e) => setAlertFilter(e.target.value)}
              onMouseEnter={() => {}}
            >
              <option value="">All</option>
              <option value="Low days of service">Low days of service</option>
              <option value="Urgent SKU">Urgent SKU</option>
            </select>
          </div>
        </th>
        <th style={{ border: "none" }} colSpan={2}>
          <div className="filter-group">
            <div className="filter-label">Filter by Destination</div>
            <select
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
              onMouseEnter={() => {}}
            >
              <option value="">All</option>
              <option value="Warehouse X">Warehouse X</option>
              <option value="Warehouse Y">Warehouse Y</option>
            </select>
          </div>
        </th>
        <th style={{ border: "none" }} colSpan={2}>
          <div className="filter-group">
            <div className="filter-label">Filter by Staging</div>
            <select
              value={stagingFilter}
              onChange={(e) => setStagingFilter(e.target.value)}
              onMouseEnter={() => {}}
            >
              <option value="">All</option>
              <option value="Lane A">Lane A</option>
              <option value="Lane B">Lane B</option>
            </select>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default FilterHeader;
