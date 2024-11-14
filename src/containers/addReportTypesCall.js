const addReportTypeCall = async (payload) => {
  try {
    const response = await fetch("http://localhost:3000/addReportType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
export default addReportTypeCall;
