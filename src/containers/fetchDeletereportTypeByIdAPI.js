async function fetchDeleteReportTypeByIdAPI(reportTypeId) {
  try {
    const response = await fetch(
      `http://localhost:3000/removeReportType?reportTypeId=${reportTypeId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to delete report type:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export default fetchDeleteReportTypeByIdAPI;
