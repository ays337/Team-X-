import React, { useState, useEffect } from "react";
import AlertsPage from "./AlertsPage";
import AlertPopup from "./AlertPopup";
import {} from "react-redux";
import {} from "store/thunks/dashboardhome-thunk";
import {} from "store/thunks/dashboardhome-thunk";
import "common/styles.css";
const MenuHeadersSort = () => {
  const mock = [
    {
      sku_id: 1,
      daysOfService: -3,
      pallets: 8,
      weight_lbs: 7000,
      remortgage_gallons: 1020,
      alert_type: "Low days of service",
      staging_lane: "Lane A",
      destination: "Warehouse X",
      additionalDetails: {
        product_number: "DA-1001",
        status: "In Production",
        Producation_estimated_completion: new Date(2023, 11, 2, 12, 0, 0),
        dock_location: "Dock 1",
        dockLast_refresh: new Date(2023, 11, 1, 8, 0, 0),
        alert_message: "Low days of service",
        timestampAlert: new Date(2023, 11, 1, 8, 11, 0),
      },
    },
    {
      sku_id: 2,
      daysOfService: 4,
      pallets: 5,
      weight_lbs: 2000,
      remortgage_gallons: 7020,
      alert_type: "Dock Aging",
      staging_lane: "Lane B",
      destination: "Warehouse Y",
      additionalDetails: {
        product_number: "BQ-1007",
        status: "Ready to Ship",
        Producation_estimated_completion: new Date(2023, 11, 3, 12, 0, 0),
        dock_location: "Dock 1",
        dockLast_refresh: new Date(2023, 11, 1, 7, 0, 0),
        alert_message: "SKU has been staged for over 48 hours",
        timestampAlert: new Date(2023, 11, 1, 7, 11, 0),
      },
    },
    {
      sku_id: 3,
      daysOfService: 1,
      pallets: 3,
      weight_lbs: 3000,
      remortgage_gallons: 5020,
      alert_type: "Urgent SKU",
      staging_lane: "Lane C",
      destination: "Warehouse X",
      additionalDetails: {
        product_number: "RJ-1010",
        status: "Backlog",
        Producation_estimated_completion: new Date(2023, 11, 2, 2, 0, 0),
        dock_location: "Dock 1",
        dockLast_refresh: new Date(2023, 11, 1, 5, 0, 0),
        alert_message: "Low days of service",
        timestampAlert: new Date(2023, 11, 1, 5, 11, 0),
      },
    },
  ];

  const sortedmock = mock
    .slice()
    .sort((a, b) => Number(b.sku_id) - Number(a.sku_id));

  console.log(sortedmock);

  const [alertsToShow, setAlertsToShow] = useState([]);

  useEffect(() => {
    const filteredAlerts = mock.filter((row) => row.days_of_service < 0);
    setAlertsToShow(filteredAlerts);
  }, [mock]);

  const [expandedRows, setExpandedRows] = useState({});
  //Create a state to toggle on or off expaded view (Use an object so we can link the rowID with true/false  {rowID:t/f, rowID:t/f ..})

  const toggleRow = (sku_id) => {
    setExpandedRows((prev) => ({
      //pass in the expanded rows object as prev
      ...prev, //spread the expandedRowsobject
      [sku_id]: !prev[sku_id],
      //use computed object literal noation to "add" (more of an update) a row ID key and set the value which is prev[id](object[key] = value) to the negation of itself
      //So essentially spread the state, update the key to the negation
    }));
  };
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const sortedMock = mock.slice().sort((a, b) => {
    const aVal = a[sortConfig.key] ?? "";
    const bVal = b[sortConfig.key] ?? "";

    //sort by number
    if (typeof aVal === "number" || !isNaN(Number(aVal))) {
      return sortConfig.direction === "asc"
        ? Number(aVal) - Number(bVal)
        : Number(bVal) - Number(aVal);
    }
    //sort by string
    return sortConfig.direction === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const [alertFilter, setAlertFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [stagingFilter, setStagingFilter] = useState("");

  const filteredMock = sortedMock.filter((row) => {
    const alertMatch = alertFilter ? row.alert_type === alertFilter : true;
    const destinationMatch = destinationFilter
      ? row.destination === destinationFilter
      : true;
    const stagingMatch = stagingFilter
      ? row.staging_lane === stagingFilter
      : true;
    return alertMatch && destinationMatch && stagingMatch;
  });
  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        // Toggle direction if same key
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      } else {
        // First time clicking this key → start with descending
        return {
          key,
          direction: "desc",
        };
      }
    });
  };

  return (
    <>
      <div className="filter-group">
        <div className="filter-label">Filter by Alert</div>
        <select
          value={alertFilter}
          onChange={(e) => setAlertFilter(e.target.value)}
          onMouseEnter={() => {
            /* optional: show dropdown */
          }}
        >
          <option value="">All</option>
          <option value="Low days of service">Low days of service</option>
          <option value="Urgent SKU">Urgent SKU</option>
        </select>
      </div>
      <div className="filter-group">
        <div className="filter-label">Filter by Destination</div>
        <select
          value={destinationFilter}
          onChange={(e) => setDestinationFilter(e.target.value)}
          onMouseEnter={() => {
            /* optional: show dropdown */
          }}
        >
          <option value="">All</option>
          <option value="Warehouse X">Warehouse X</option>
          <option value="Warehouse Y">Warehouse Y</option>
        </select>
      </div>
      <div className="filter-group">
        <div className="filter-label">Filter by Staging</div>
        <select
          value={stagingFilter}
          onChange={(e) => setStagingFilter(e.target.value)}
          onMouseEnter={() => {
            /* optional: show dropdown */
          }}
        >
          <option value="">All</option>
          <option value="Lane A">Lane A</option>
          <option value="Lane B">Lane B</option>
        </select>
      </div>
      <div>
        <table className="tablestyles">
          <thead className="theadstyles">
            <tr className="trheadstyles">
              <th className="thheadstyles">Select</th>
              <th className="thheadstyles" onClick={() => handleSort("sku_id")}>
                ID
                {sortConfig.key === "sku_id"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("daysOfService")}
              >
                DOS
                {sortConfig.key === "daysOfService"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("pallets")}
              >
                Pallets
                {sortConfig.key === "pallets"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("weight_lbs")}
              >
                Weight
                {sortConfig.key === "weight_lbs"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("remortgage_gallons")}
              >
                Remortgage_gallons
                {sortConfig.key === "remortgage_gallons"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("alert_type")}
              >
                Alert Type
                {sortConfig.key === "alert_type"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("staging_lane")}
              >
                Staging Lane
                {sortConfig.key === "staging_lane"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="thheadstyles"
                onClick={() => handleSort("destination")}
              >
                Destination
                {sortConfig.key === "destination"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody id="plant-table-body">
            {filteredMock.map((row) => (
              <>
                <tr className="trbodystyles" key={row.sku_id}>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        <input
                          type="checkbox"
                          checked={expandedRows[row.sku_id] === true}
                          onChange={() => toggleRow(row.sku_id)}
                        />
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">{row.sku_id}</span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div
                      className="tdcontentwrapper"
                      style={{
                        backgroundColor:
                          row.daysOfService < "0"
                            ? "#E23F44"
                            : row.daysOfService > "0" && row.daysOfService < "7"
                            ? "yellow"
                            : "transparent",
                      }}
                    >
                      <span className="tdcontentspan">
                        {row.daysOfService ?? "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        {row.pallets ?? "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        {row.weight_lbs ?? "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        {row.remortgage_gallons ?? "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div
                      className="tdcontentwrapper"
                      style={{
                        backgroundColor:
                          row.alert_type === "Low days of service"
                            ? "#E23F44"
                            : row.alert_type === "Urgent SKU"
                            ? "yellow"
                            : "transparent",
                      }}
                    >
                      <span className="tdcontentspan">
                        {row.alert_type ?? "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        {row.staging_lane ?? "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        {row.destination ?? "N/A"}
                      </span>
                    </div>
                  </td>
                </tr>
                {expandedRows[row.sku_id] && (
                  <tr>
                    <td colSpan={9}>
                      <div
                        style={{ padding: "10px", backgroundColor: "#f9f9f9" }}
                      >
                        <strong>Expanded Data:</strong>
                        <ul style={{ marginTop: "5px" }}>
                          {Object.entries(row.additionalDetails).map(
                            ([key, value]) => (
                              <li key={key}>
                                <strong>{key}:</strong>
                                {value instanceof Date
                                  ? value.toLocaleString()
                                  : value}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}

                {row.daysOfService < 0 && (
                  <AlertPopup
                    key={`alert-${row.sku_id}`}
                    message={`${row.sku_id} has a low DOS of ${row.daysOfService}`}
                    index={row.sku_id}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>

        <AlertsPage sortedmock={sortedmock} />
      </div>
    </>
  );
};

export default MenuHeadersSort;
