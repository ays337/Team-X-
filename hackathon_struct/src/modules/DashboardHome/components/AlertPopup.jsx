import React, { useState } from "react";

const AlertPopup = ({ message, index }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: `${20 + index * 70}px`, // stack alerts vertically
        right: "20px",
        backgroundColor: "#f44336",
        color: "white",
        padding: "12px 16px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        transition: "opacity 0.3s ease",
      }}
    >
      <span>{message}</span>
      <button
        onClick={() => setVisible(false)}
        style={{
          marginLeft: "12px",
          background: "white",
          color: "#f44336",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default AlertPopup;
