import React, { useState } from "react";

const AlertPopup = ({ data }) => {
  const [visibleAlerts, setVisibleAlerts] = useState({});

  const handleClose = (sku_id) => {
    setVisibleAlerts((prev) => ({ ...prev, [sku_id]: false }));
  };

  return (
    <>
      {data.map((row, index) =>
        row.additional_details?.alert_message === "Low days of service" &&
        visibleAlerts[row.sku_id] !== false ? (
          <div
            key={`alert-${row.sku_id}`}
            style={{
              bottom: `${20 + index * 20}px`, // stack alerts vertically
            }}
            className="alert-container"
          >
            <span>
              SKUID: {row.sku_id} has a low DOS of {row.days_of_service}
            </span>
            <button
              onClick={() => handleClose(row.sku_id)}
              className="alert-btn-txt"
            >
              Close
            </button>
          </div>
        ) : null
      )}
    </>
  );
};

export default AlertPopup;
