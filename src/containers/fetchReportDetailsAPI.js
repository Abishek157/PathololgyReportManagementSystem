import fetchAPIHelper from "../utlis/fetchAPIHelper";

const fetchReportDetailsAPI = async () => {
  const url = " http://localhost:3000/getPatientReportDetails";
  const method = "GET";
  const result = await fetchAPIHelper(url, method);
  return result;
};

export default fetchReportDetailsAPI;
