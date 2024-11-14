const addExaminationAPI = async (payload) => {
  console.log(payload);

  try {
    const response = await fetch(" http://localhost:3000/addExamination", {
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
      alert(data.message);
      return data;
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
export default addExaminationAPI;
