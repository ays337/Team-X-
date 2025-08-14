export const getSortedMock = (state) => {
  const { wHData, sortConfig } = state.dashboardHome;
  if (!sortConfig?.key) return wHData;
  return wHData.slice().sort((a, b) => {
    const aVal = a[sortConfig.key] ?? "N/A";
    const bVal = b[sortConfig.key] ?? "N/A";

    // Move "N/A" to the end
    if (aVal === "N/A" && bVal !== "N/A") return 1;
    if (bVal === "N/A" && aVal !== "N/A") return -1;
    if (aVal === "N/A" && bVal === "N/A") return 0;

    if (typeof aVal === "number" || !isNaN(Number(aVal))) {
      return sortConfig.direction === "asc"
        ? Number(aVal) - Number(bVal)
        : Number(bVal) - Number(aVal);
    }
    return sortConfig.direction === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });
};

export const getFilteredMock = (state) => {
  const sortedMock = getSortedMock(state);
  const { alertFilter, destinationFilter, stagingFilter } = state.dashboardHome;
  return sortedMock.filter((row) => {
    const alertMatch = alertFilter ? row.alert_type === alertFilter : true;
    const destinationMatch = destinationFilter
      ? row.destination === destinationFilter
      : true;
    const stagingMatch = stagingFilter
      ? row.staging_lane === stagingFilter
      : true;
    return alertMatch && destinationMatch && stagingMatch;
  });
};
