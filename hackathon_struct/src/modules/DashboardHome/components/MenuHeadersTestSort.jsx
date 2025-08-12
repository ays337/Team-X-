import React, { useState } from "react";
import AlertsPage from "./AlertsPage";
import AlertPopup from "./AlertPopup";
import { useSelector } from "react-redux";
import {} from "store/thunks/dashboardhome-thunk";
import {} from "store/thunks/dashboardhome-thunk";
import "common/styles.css";
const MenuHeadersSort = () => {
  const data = useSelector((state) => state.dashboardHome.wHData);

  function camelCaseToTitle(str) {
    return str
      .replace(/_/g, " ") // replace underscores with spaces
      .replace(/([a-z])([A-Z])/g, "$1 $2") // insert space before capital letters
      .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize first letter of each word
  }

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

  const sortedMock = data.slice().sort((a, b) => {
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
    //loop thorugh each row, add the rows that match the fitlering critera
    const alertMatch = alertFilter ? row.alert_type === alertFilter : true;
    //if alertFilter exist (the state is not ""), then compare the current rows alert type to the alert filter. If they match then for that row set alertMatch to true. This row is added to filtered results
    //If alertFilter is empty(no filter selected) alertMatch is true, so that all rows are selected
    const destinationMatch = destinationFilter
      ? row.destination === destinationFilter
      : true;
    const stagingMatch = stagingFilter
      ? row.staging_lane === stagingFilter
      : true;
    return alertMatch && destinationMatch && stagingMatch;
    //If a row passes all 3 criteria, it is included in the filtered results, the default : true for each filter ensures that all rows are selected if no filter is applied(i.e filtering only needs to pass one criteria IF one filter is applied)
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
        return {
          key,
          direction: "desc",
        };
      }
    });
  };

  return (
    <>
      <div>
        <table className="tablestyles">
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
                    <option value="Low days of service">
                      Low days of service
                    </option>
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
          <thead className="theadstyles">
            <tr className="trheadstyles">
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
                onClick={() => handleSort("days_of_service")}
              >
                DOS
                {sortConfig.key === "days_of_service"
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
                Remortgage Gallons
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
              <React.Fragment key={row.sku_id}>
                <tr className="trbodystyles" key={row.sku_id}>
                  <td className="tdbodyleftstyles">
                    <div className="tdcontentwrapper">
                      <span className="tdcontentspan">
                        {" "}
                        <input
                          type="checkbox"
                          checked={expandedRows[row.sku_id] === true}
                          onChange={() => toggleRow(row.sku_id)}
                        />
                        {row.sku_id}
                      </span>
                    </div>
                  </td>
                  <td className="tdbodyleftstyles">
                    <div
                      className="tdcontentwrapper"
                      style={{
                        backgroundColor:
                          row.days_of_service < "2" &&
                          row.days_of_service !== null
                            ? "#E23F44"
                            : row.days_of_service > "0" &&
                              row.days_of_service < "3"
                            ? "yellow"
                            : "transparent",
                      }}
                    >
                      <span className="tdcontentspan">
                        {row.days_of_service ?? "N/A"}
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
                          {Object.entries(row.additional_details).map(
                            ([key, value]) => (
                              <li key={`${row.sku_id}-${key}`}>
                                <strong>{camelCaseToTitle(key)}:</strong>{" "}
                                {value instanceof Date
                                  ? value.toLocaleString()
                                  : value}
                              </li>
                            )
                          )}

                          <span>
                            Dock aging:{" "}
                            {row.dockLast_refresh instanceof Date &&
                            !isNaN(row.dockLast_refresh.getTime())
                              ? (() => {
                                  const days = Math.floor(
                                    (new Date() - row.dockLast_refresh) /
                                      (1000 * 60 * 60 * 24)
                                  );
                                  return `${days} day${
                                    days !== 1 ? "s" : ""
                                  } since last stage`;
                                })()
                              : "N/A"}
                          </span>
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}

                {row.additional_details?.alert_message ===
                  "Low days of service" && (
                  <tr>
                    <td colSpan={8}>
                      <AlertPopup
                        key={`alert-${row.sku_id}`}
                        message={`SKUID: ${row.sku_id} has a low DOS of ${row.days_of_service}`}
                        index={row.sku_id}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <AlertsPage sortedmock={sortedMock} />
      </div>
    </>
  );
};

export default MenuHeadersSort;
