import React, { useState } from "react";
import TableCell_test from "./TableCell_test";
import ExpandedRowDetails_test from "./ExpandedRowDetails_test";

const TableRow_test = ({ data }) => {
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
  // let cellClass = "warehouse-table-body-td";
  // if (isFirst) cellClass += " warehouse-table-body-td-first";
  // if (isLast) cellClass += " warehouse-table-body-td-last";
  return (
    <tbody id="plant-table-body">
      {data.map((row) => (
        <React.Fragment key={row.sku_id}>
          <tr className="trbodystyles">
            <TableCell_test
              style={{
                borderLeft: "0px",
              }}
              cName="warehouse-table-body-td-first"
            >
              <input
                type="checkbox"
                checked={expandedRows[row.sku_id] === true}
                onChange={() => toggleRow(row.sku_id)}
              />
              {row.sku_id}
            </TableCell_test>
            <TableCell_test
              style={{
                border: "0px",
                backgroundColor:
                  row.days_of_service < "2" && row.days_of_service !== null
                    ? "#E23F44"
                    : row.days_of_service > "0" && row.days_of_service < "3"
                    ? "yellow"
                    : "transparent",
              }}
              cName="warehouse-table-body-td"
            >
              {row.days_of_service ?? "N/A"}
            </TableCell_test>
            <TableCell_test cName="warehouse-table-body-td">
              {row.pallets ?? "N/A"}
            </TableCell_test>
            <TableCell_test cName="warehouse-table-body-td">
              {row.weight_lbs ?? "N/A"}
            </TableCell_test>
            <TableCell_test
              style={{ borderRight: "2px solid #e0e0e0" }}
              cName="warehouse-table-body-td"
            >
              {row.remortgage_gallons ?? "N/A"}
            </TableCell_test>
            <TableCell_test
              style={{
                border: "0px",
                backgroundColor:
                  row.alert_type === "Low days of service"
                    ? "#E23F44"
                    : row.alert_type === "Urgent SKU"
                    ? "yellow"
                    : "transparent",
              }}
              cName="warehouse-table-body-td"
            >
              {row.alert_type ?? "N/A"}
            </TableCell_test>
            <TableCell_test cName="warehouse-table-body-td">
              {row.staging_lane ?? "N/A"}
            </TableCell_test>
            <TableCell_test cName="warehouse-table-body-td-last">
              {row.destination ?? "N/A"}
            </TableCell_test>
          </tr>
          {expandedRows[row.sku_id] && (
            <ExpandedRowDetails_test
              row={row}
              camelCaseToTitle={camelCaseToTitle}
            />
          )}
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default TableRow_test;
