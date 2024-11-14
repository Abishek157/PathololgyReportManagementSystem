import { BrowserRouter, Route, Routes } from "react-router-dom";
import PathologyLogin from "./pages/PathologyLogin";
import PathologySignup from "./pages/Pathologysignup";
import AddPatientPage from "./pages/AddPatientPage";
import DisplayReportTypes from "./pages/DisplayReportType";
import AddReportTypes from "./pages/AddReportType";
import MainPage from "./pages/MainPage";
import Sidebar from "./pages/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/Dashboard" element={<MainPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/pathology-login" element={<PathologyLogin />} />
      </Routes>
    </BrowserRouter>
  );
  // <BrowserRouter>
  //   <Routes>
  //     <Route
  //       path="/"
  //       element={<div style={{ color: "white" }}>Hello World</div>}
  //     />
  //     <Route path="/pathology-login" element={<PathologyLogin />} />
  //     <Route path="/pathology-signup" element={<PathologySignup />} />
  //     <Route
  //       path="/add-patient-report"
  //       element={<AddPatientPageWrapper />}
  //     />
  //     <Route
  //       path="/add-patient-report-wrapper"
  //       element={<AddPatientPage />}
  //     />
  //     <Route
  //       path="/display-examinations"
  //       element={<DisplayExaminationsDetails />}
  //     />
  //     <Route
  //       path="/display-report-types"
  //       element={<DisplayReportTypes />}
  //     />
  //     <Route path="/add-report-type" element={<AddReportTypes />} />
  //     <Route path="/add-examinations" element={<AddExaminationsPage />} />
  //     <Route path="/dashboard" element={<Sidebar />} />
  //   </Routes>
  // </BrowserRouter>
};
export default App;
