import { Button, Container } from "@mantine/core";
import usePatientData from "../hooks/PatientDataStore";
import DisplaySelectReportType from "../components/DisplaySelectReportType";
import AddPatientReportForm from "../components/AddPatinetReportForm";
import FetchAddPatientReportDeatilsAPI from "../containers/FetchAddPatientReportDeatilsAPI";

const CreateReportPatientPage = () => {
  const { patientData, setPatientData, setExaminationIds } = usePatientData();

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const payload = patientData;
    await FetchAddPatientReportDeatilsAPI(payload);
  };

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <AddPatientReportForm
          patientData={patientData}
          setPatientData={setPatientData}
        />
        <DisplaySelectReportType setExaminationIds={setExaminationIds} />
        <Button onClick={(e) => handleButtonClick(e)}>Submit Report</Button>
      </div>
    </Container>
  );
};

export default CreateReportPatientPage;
