import fetchAPIHelper from "../utlis/fetchAPIHelper";

const fetchEditReportAPI = async (id) => {
  const url = ` http://localhost:3000/editPatientReportDetails?PatientReportDetailId=${id}`;
  const method = "PUT";
  const result = await fetchAPIHelper(url, method);
  console.log(result);
  return result;
};

export default fetchEditReportAPI;
