import React, { useState } from "react";
import {} from "react-redux";
import {} from "store/thunks/dashboardhome-thunk";
import {} from "store/thunks/dashboardhome-thunk";
import "common/styles.css";
const MenuHeaders2 = () => {
  const mock = [
    {
      sku_id: 1,
      daysOfService: 3,
      pallets: 8,
      weight_lbs: 7000,
      remortgage_gallons: 1020,
      alert_type: "Urgent SKU",
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

  return (
    <table className="tablestyles">
      <thead className="theadstyles">
        <tr className="trheadstyles">
          <th className="thheadstyles">sku_id</th>
          <th className="thheadstyles">days_of_service</th>
          <th className="thheadstyles">Pallets</th>
          <th className="thheadstyles">Weight</th>
          <th className="thheadstyles">Remortgage Gallons</th>
          <th className="thheadstyles">Alert Type</th>
          <th className="thheadstyles">Staging Lane</th>
          <th className="thheadstyles">Destination</th>
        </tr>
      </thead>
      <tbody id="plant-table-body">
        {sortedmock.map((row) => (
          <>
            <tr className="trbodystyles" key={row.sku_id}>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper"></div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.sku_id}</span>
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
                  <span className="tdcontentspan">
                    {row.daysOfService ?? "N/A"}
                  </span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">
                    {row.Destination ?? "N/A"}
                  </span>
                </div>
              </td>
              <td className="tdbodyleftstyles">
                <div className="tdcontentwrapper">
                  <span className="tdcontentspan">{row.pallets ?? "N/A"}</span>
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
                <div className="tdcontentwrapper">
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
                <td colSpan={5}>
                  <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
                    <strong>Expanded Data:</strong>
                    <ul style={{ marginTop: "5px" }}>
                      {Object.entries(row.additionalDetails).map(
                        ([key, value]) => (
                          <li key={key}>
                            <strong>{key}:</strong> {value}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default MenuHeaders2;
