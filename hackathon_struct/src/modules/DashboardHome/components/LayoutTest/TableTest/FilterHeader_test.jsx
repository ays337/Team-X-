import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dashboardHomeActions } from "../../../../../store/slices/dashboardhome-slice";

const ALERT_OPTIONS = [
  { value: "", label: "All Alerts" },
  { value: "Low days of service", label: "Low days of service" },
  { value: "Urgent SKU", label: "Urgent SKU" },
];
const DESTINATION_OPTIONS = [
  { value: "", label: "All Destinations" },
  { value: "Warehouse X", label: "Warehouse X" },
  { value: "Warehouse Y", label: "Warehouse Y" },
];
const STAGING_OPTIONS = [
  { value: "", label: "All Staging" },
  { value: "Lane A", label: "Lane A" },
  { value: "Lane B", label: "Lane B" },
];

const FilterHeader_test = () => {
  const dispatch = useDispatch();
  const alertFilter = useSelector((state) => state.dashboardHome.alertFilter);
  const destinationFilter = useSelector(
    (state) => state.dashboardHome.destinationFilter
  );
  const stagingFilter = useSelector(
    (state) => state.dashboardHome.stagingFilter
  );

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleClear = () => {
    dispatch(dashboardHomeActions.setAlertFilter(""));
    dispatch(dashboardHomeActions.setDestinationFilter(""));
    dispatch(dashboardHomeActions.setStagingFilter(""));
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        className="toolbar-btn"
        id="toolbar-filter-button"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          background: "none",
          border: "none",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          padding: "8px 16px",
          borderRadius: "6px",
        }}
        aria-label="Open Filter Dropdown"
      >
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path d="M200 128a8 8 0 0 1-8 8H64a8 8 0 1 1 0-16h128a8 8 0 0 1 8 8zm40-48a8 8 0 0 1-8 8H24a8 8 0 1 1 0-16h208a8 8 0 0 1 8 8zm-80 96a8 8 0 0 1-8 8h-48a8 8 0 1 1 0-16h48a8 8 0 0 1 8 8z"></path>
          </svg>
          Filter
        </span>
      </button>
      {open && (
        <div
          ref={dropdownRef}
          className="filter-dropdown"
          style={{
            position: "absolute",
            top: "56px",
            left: "0px",
            zIndex: 30,
            minWidth: "260px",
            maxHeight: "413px",
            background: "#fff",
            border: "2px solid #2F2F30",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            borderRadius: "8px",
            padding: "16px",
            overflow: "auto",
          }}
        >
          <label style={{ display: "block", marginBottom: "12px" }}>
            <span
              style={{ fontWeight: 500, marginBottom: "4px", display: "block" }}
            >
              Alert
            </span>
            <select
              style={{
                marginTop: "4px",
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #dde1e8",
                fontSize: "1rem",
              }}
              value={alertFilter}
              onChange={(e) =>
                dispatch(dashboardHomeActions.setAlertFilter(e.target.value))
              }
            >
              {ALERT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label style={{ display: "block", marginBottom: "12px" }}>
            <span
              style={{ fontWeight: 500, marginBottom: "4px", display: "block" }}
            >
              Destination
            </span>
            <select
              style={{
                marginTop: "4px",
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #dde1e8",
                fontSize: "1rem",
              }}
              value={destinationFilter}
              onChange={(e) =>
                dispatch(
                  dashboardHomeActions.setDestinationFilter(e.target.value)
                )
              }
            >
              {DESTINATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label style={{ display: "block", marginBottom: "12px" }}>
            <span
              style={{ fontWeight: 500, marginBottom: "4px", display: "block" }}
            >
              Staging
            </span>
            <select
              style={{
                marginTop: "4px",
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #dde1e8",
                fontSize: "1rem",
              }}
              value={stagingFilter}
              onChange={(e) =>
                dispatch(dashboardHomeActions.setStagingFilter(e.target.value))
              }
            >
              {STAGING_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <div
            style={{
              marginTop: "12px",
              display: "grid",
              gridAutoFlow: "column",
              gap: "8px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "#107cca",
                fontWeight: 600,
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
              onClick={handleClear}
              type="button"
            >
              Clear Filters
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 256 256"
              >
                <path d="M165.66 101.66 139.31 128l26.35 26.34a8.004 8.004 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8.004 8.004 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8.004 8.004 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8.004 8.004 0 0 1 11.32 11.32zM232 128c0 57.438-46.562 104-104 104S24 185.438 24 128 70.562 24 128 24c57.412.06 103.94 46.588 104 104zm-16 0c0-48.601-39.399-88-88-88s-88 39.399-88 88 39.399 88 88 88c48.578-.055 87.945-39.422 88-88z"></path>
              </svg>
            </button>
            <button
              style={{
                background: "#107cca",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "4px",
              }}
              type="button"
              onClick={() => setOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterHeader_test;
