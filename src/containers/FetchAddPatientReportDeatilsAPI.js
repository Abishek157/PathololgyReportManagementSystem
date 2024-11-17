import toast from "react-hot-toast";
import fetchAPIHelper from "../utlis/fetchAPIHelper";

const FetchAddPatientReportDeatilsAPI = async (payload) => {
  const url = "http://localhost:3000/addPatientReportDetail";
  const method = "POST";
  const result = await fetchAPIHelper(url, method, payload);
  if (result.success) {
    toast.success(result.data.message);
  } else {
    toast.error(result.data.message);
  }
  return result;
};

export default FetchAddPatientReportDeatilsAPI;
