import React from "react";
// import "common/styles.css";
import "../LayoutTest/base.css";

const AlertsPage = ({ sortedMock }) => {
  const alertRows = sortedMock?.filter(
    (row) =>
      row.days_of_service < 0 ||
      row.alert_type === "Low days of service" ||
      row.remortgage_gallons > 1100
  );

  return (
    <div className="notif-container">
      <div className="noti-title">Notifications Panel</div>
      {alertRows.map((row, index) => (
        <div key={index} className="notif-card">
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
