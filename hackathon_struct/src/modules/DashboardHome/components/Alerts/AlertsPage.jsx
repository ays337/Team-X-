import React from "react";
import "../LayoutTest/base_generated.css";

const AlertsPage = ({ sortedMock }) => {
  const alertRows = sortedMock?.filter(
    (row) =>
      row.days_of_service < 0 ||
      row.alert_type === "Low days of service" ||
      row.remortgage_gallons > 1100
  );

  return (
    <div className="alerts-panel-left">
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "0.75rem",
          fontFamily: "'Google Sans Code', sans-serif",
        }}
      >
        Notifications Panel
      </div>
      {alertRows.map((row, index) => (
        <div key={index} className="notif-card" style={{}}>
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
