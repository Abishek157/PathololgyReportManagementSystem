import React, { useState } from "react";
import ReportTypefrom from "./ReportTypefrom";
import { Button } from "@mantine/core";
import fetchUpdateReportTypeAPI from "../containers/fetchUpdateReportTypeAPI";

const UpdateReportTypePage = ({ data, onUpdateSuccess }) => {
  const [reportType, setReportType] = useState(data.name);

  const handleSubmit = async () => {
    const payload = {
      id: data.reportTypeId,
      name: reportType,
    };
    await fetchUpdateReportTypeAPI(payload);
    onUpdateSuccess();
  };

  return (
    <>
      <ReportTypefrom reportType={reportType} setReportType={setReportType} />
      <Button onClick={handleSubmit}>Update</Button>
    </>
  );
};

export default UpdateReportTypePage;
