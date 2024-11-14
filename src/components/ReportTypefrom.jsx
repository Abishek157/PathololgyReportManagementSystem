import React from "react";
import { TextInput } from "@mantine/core";

const ReportTypefrom = ({ reportType, setReportType }) => {
  return (
    <>
      <form>
        <TextInput
          label="Enter the name of report Type"
          placeholder="Report type name"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        />
      </form>
    </>
  );
};

export default ReportTypefrom;
