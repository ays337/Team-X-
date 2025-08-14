import React from "react";

const ExpandedRowDetails_test = ({ row, camelCaseToTitle }) => (
  <tr className="warehouse-table-row expanded-row-details">
    <td className="warehouse-table-body-td" colSpan={9}>
      <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
        <strong>Expanded Data:</strong>
        <ul style={{ marginTop: "5px" }}>
          {Object.entries(row.additional_details).map(([key, value]) => (
            <li key={`${row.sku_id}-${key}`}>
              <strong>{camelCaseToTitle(key)}:</strong>{" "}
              {value instanceof Date ? value.toLocaleString() : value}
            </li>
          ))}
        </ul>
      </div>
    </td>
  </tr>
);

export default ExpandedRowDetails_test;
