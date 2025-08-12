import React, { useState } from "react";
import TableCell from "./TableCell";
import ExpandedRowDetails from "./ExpandedRowDetails";

// Reusable table cell component

const TableRow = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState({});
  //Create a state to toggle on or off expaded view (Use an object so we can link the rowID with true/false  {rowID:t/f, rowID:t/f ..})

  const toggleRow = (sku_id) => {
    setExpandedRows((prev) => ({
      //pass in the expanded rows object as prev
      ...prev, //spread the expandedRowsobject
      [sku_id]: !prev[sku_id],
      // use computed object literal noation([]: []) to "add" (more of an update) a row ID key and set the value which is prev[id](object[key] = value) to the negation of itself
      // So essentially spread the state, update the key to the negation
    }));
  };
  function camelCaseToTitle(str) {
    return str
      .replace(/_/g, " ") // replace underscores with spaces
      .replace(/([a-z])([A-Z])/g, "$1 $2") // insert space before capital letters
      .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize first letter of each word
  }

  return (
    <tbody id="plant-table-body">
      {data.map((row) => (
        <React.Fragment key={row.sku_id}>
          <tr className="trbodystyles">
            <TableCell>
              <input
                type="checkbox"
                checked={expandedRows[row.sku_id] === true}
                onChange={() => toggleRow(row.sku_id)}
              />
              {row.sku_id}
            </TableCell>
            <TableCell
              style={{
                backgroundColor:
                  row.days_of_service < "2" && row.days_of_service !== null
                    ? "#E23F44"
                    : row.days_of_service > "0" && row.days_of_service < "3"
                    ? "yellow"
                    : "transparent",
              }}
            >
              {row.days_of_service ?? "N/A"}
            </TableCell>
            <TableCell>{row.pallets ?? "N/A"}</TableCell>
            <TableCell>{row.weight_lbs ?? "N/A"}</TableCell>
            <TableCell>{row.remortgage_gallons ?? "N/A"}</TableCell>
            <TableCell
              style={{
                backgroundColor:
                  row.alert_type === "Low days of service"
                    ? "#E23F44"
                    : row.alert_type === "Urgent SKU"
                    ? "yellow"
                    : "transparent",
              }}
            >
              {row.alert_type ?? "N/A"}
            </TableCell>
            <TableCell>{row.staging_lane ?? "N/A"}</TableCell>
            <TableCell>{row.destination ?? "N/A"}</TableCell>
          </tr>
          {expandedRows[row.sku_id] && (
            <ExpandedRowDetails row={row} camelCaseToTitle={camelCaseToTitle} />
          )}
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default TableRow;
