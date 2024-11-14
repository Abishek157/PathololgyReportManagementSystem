const fetchUpdateExaminationAPI = async (payload) => {
  const { exam_id, ...details } = payload;
  console.log(exam_id, details);

  try {
    const response = await fetch(
      ` http://localhost:3000/editExaminationDetails?examinationId=${exam_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
        credentials: "include",
      }
    );
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

export default fetchUpdateExaminationAPI;
