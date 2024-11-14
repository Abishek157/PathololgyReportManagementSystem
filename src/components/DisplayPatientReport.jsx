import { useEffect, useState } from "react";
import { Button, Table, Loader, Text } from "@mantine/core";
import fetchReportDetailsAPI from "../containers/fetchReportDetailsAPI";
import useRouteStore from "../hooks/useRouteStore";
import useReportStore from "../hooks/useReportStore";

const DisplayPatientReport = () => {
  const { selectedRoute, setSelectedRoute } = useRouteStore();
  const { setReport } = useReportStore();

  const [patientReports, setPatientReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const result = await fetchReportDetailsAPI();
      setPatientReports(result.patientsReport);
    } catch (err) {
      setError("Failed to fetch patient reports.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleOnClick = (report) => {
    setReport(report);
    setSelectedRoute("EditReports");
  };

  const rows = patientReports.map((report) => (
    <Table.Tr key={report.reportDetails.report_id}>
      <Table.Td>{report.reportDetails.report_id}</Table.Td>
      <Table.Td>
        {report.patientDetails.first_name} {report.patientDetails.middle_name}{" "}
        {report.patientDetails.last_name}
      </Table.Td>
      <Table.Td>{report.patientDetails.age}</Table.Td>
      <Table.Td>{report.patientDetails.gender}</Table.Td>
      <Table.Td>{report.reportDetails.status}</Table.Td>
      <Table.Td>
        <Button onClick={(e) => handleOnClick(report)}>View Details</Button>
      </Table.Td>
    </Table.Tr>
  ));

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Text color="red">{error}</Text>
      </div>
    );
  }

  if (patientReports.length === 0) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Text>No patient reports available.</Text>
      </div>
    );
  }

  return (
    <Table.ScrollContainer minWidth={800} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Report ID</Table.Th>
            <Table.Th>Patient Name</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default DisplayPatientReport;
