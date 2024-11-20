import { useEffect, useState } from "react";
import { Button, Table, Loader, Text, Input } from "@mantine/core";
import fetchReportDetailsAPI from "../containers/fetchReportDetailsAPI";
import useRouteStore from "../hooks/useRouteStore";
import useReportStore from "../hooks/useReportStore";
import { mergeSort, comparator } from "../utlis/Algorithm/mergeSort";
import binarySearch from "../utlis/Algorithm/binarySearch";

const DisplayPatientReport = () => {
  const { selectedRoute, setSelectedRoute } = useRouteStore();
  const [dataLength, setDataLength] = useState(0);
  const { setReport } = useReportStore();
  const [patientReports, setPatientReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetch = async (page = 1) => {
    setLoading(true);
    try {
      const result = await fetchReportDetailsAPI(page);
      const report = result.patientsReport;
      setDataLength(Number(result.pagination.total));
      setTotalPages(Math.ceil(result.pagination.total / 5));
      const sortedReport = mergeSort(report, comparator);
      setPatientReports(sortedReport);
    } catch (err) {
      setError("Failed to fetch patient reports.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(currentPage);
  }, [currentPage]);

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
        <Button onClick={() => handleOnClick(report)}>View Details</Button>
      </Table.Td>
    </Table.Tr>
  ));

  const handleSearch = async () => {
    let found = false;
    // Search across pages until found or all pages are searched
    for (let page = currentPage; page <= totalPages; page++) {
      await fetch(page);
      const result = binarySearch(patientReports, searchQuery);
      if (result) {
        console.log("Found report:", result);
        setPatientReports([result]);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("Report not found");
      setError("No matching report found.");
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => {
          if (e.target.value === "") {
            fetch(currentPage);
          }
          setSearchQuery(e.target.value);
        }}
      />
      <Button onClick={handleSearch}>Search</Button>
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
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Loader />
        </div>
      )}
      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Text color="red">{error}</Text>
        </div>
      )}
    </>
  );
};

export default DisplayPatientReport;
