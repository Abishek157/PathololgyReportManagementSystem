import { Button, Input, TextInput } from "@mantine/core";
import React, { useState } from "react";
import fetchUpdateReportResultAPI from "../containers/fetchUpdateReportResultAPI";

const EditPatientReportResultFrom = ({ examination, onClose }) => {
  const [resultValue, setResultValue] = useState(examination.resultValue);
  console.log(examination);
  const handleResultChange = (event) => {
    setResultValue(event.target.value);
  };
  const handleSetResultOnClick = async (examination_id, result_value) => {
    const result = await fetchUpdateReportResultAPI(
      examination_id,
      result_value
    );
    onClose();
  };
  return (
    <>
      <TextInput
        label={examination?.name}
        placeholder="Enter result value"
        value={resultValue}
        onChange={(e) => handleResultChange(e)}
      />
      <Button
        onClick={() => handleSetResultOnClick(examination?.id, resultValue)}
      >
        Set Result
      </Button>
    </>
  );
};

export default EditPatientReportResultFrom;
