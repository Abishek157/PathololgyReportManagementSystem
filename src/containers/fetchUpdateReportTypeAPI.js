import React from "react";
import fetchAPIHelper from "../utlis/fetchAPIHelper";

const fetchUpdateReportTypeAPI = async (data) => {
  const payload = {
    name: data.name,
  };
  const url = ` http://localhost:3000/editReportTypeDetails?reportTypeId=${data.id}`;
  const method = "PUT";
  const result = await fetchAPIHelper(url, method, payload);

  return result;
};

export default fetchUpdateReportTypeAPI;
