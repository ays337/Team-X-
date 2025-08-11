import React from "react";
import MenuHeadersSort from "./MenuHeadersTestSort";

const AlertsPage = ({ sortedmock }) => {
  const alertRows = sortedmock?.filter(
    (row) =>
      row.days_of_service < 0 ||
      row.alert_type === "Low days of service" ||
      row.remortgage_gallons > 1100
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "250px",
        backgroundColor: "#e6f4ff",
        padding: "16px 16px 16px 20px",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        Notifications Panel
      </div>
      {alertRows.map((row, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
            padding: "12px",
            borderRadius: "6px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Alert for ID {row.sku_id}: <br />
          Potential causes of error in these fields: <br />
          {row.alert_type && (
            <>
              Alert message: {row.alert_type} <br />
            </>
          )}
          {row.days_of_service != null && row.days_of_service < 4 && (
            <>
              DOS: {row.days_of_service} <br />
            </>
          )}
          {row.remortgage_gallons > 1100 && (
            <>
              Remortgage Gallons: {row.remortgage_gallons} <br />
            </>
          )}
        </div>
      ))}
      {alertRows.length === 0 && <div>No alerts found.</div>}
    </div>
  );
};

export default AlertsPage;
