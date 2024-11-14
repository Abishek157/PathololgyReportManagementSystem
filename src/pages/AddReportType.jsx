import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import addReportTypeCall from "../containers/addReportTypesCall";

const AddReportTypes = () => {
  const [reportType, setReportType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Report Type Submitted:", reportType);
    const payload = { name: reportType };
    const result = await addReportTypeCall(payload);
    alert(result.message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Enter the name of report type"
          placeholder="Report type name"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default AddReportTypes;
