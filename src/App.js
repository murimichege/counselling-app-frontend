import { useState, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/clientmanagement/Clients";
// import Invoices from "./scenes/Payments";
import Bar from "./scenes/bar";
import NewSession from "./scenes/forms/NewSession";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
import ConsentForm from "./scenes/consentform";
import Sessions from "./scenes/sessionmanagement/Sessions";
import SessionItem from "./scenes/sessionmanagement/SessionItem";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/auth/Login";
import IntroPage from "./scenes/auth/intro";
import IntakeForm from "./scenes/client/ReceptionForm";
import ClientIntakeForm from "./scenes/client/clientIntakeForm";
import StudentBookingForm from "./scenes/student/index";
import Termination from "./scenes/Termination/Termination";
import SafetyContractForm from "./scenes/safetycontract";
import CounselingRecord from "./scenes/counsellingrecord/CounselingRecord";
import OnGoingCounseling from "./scenes/ongoingcounselling/OngoingCounselingRecord";
import ExaminationForm from "./scenes/examinationform/Examinationform";
import ClientItem from "./scenes/clientmanagement/ClientItem";
import ReportTabs from "./scenes/reports/tabs";
import ReportBuilder from "./scenes/reports/reportBuilder";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isPrivate, setisPrivate] = useState(false);

  return (
    // <ErrorBoundary>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isPrivate ? (
            <Fragment>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/IntakeForm" element={<IntakeForm />} />
                <Route
                  path="/StudentBookingForm"
                  element={<StudentBookingForm />}
                />
                <Route path="/Termination" element={<Termination />} />
                <Route path="/ConsentForm" element={<ConsentForm />} />
                <Route
                  path="/counsellingRecord"
                  element={<CounselingRecord />}
                />
                <Route path="/ongoingrecord" element={<OnGoingCounseling />} />
                <Route
                  path="/clientintakeForm"
                  element={<ClientIntakeForm />}
                />
                <Route
                  path="/safetycontract"
                  element={<SafetyContractForm />}
                />
                <Route path="/examinationform" element={<ExaminationForm />} />
              </Routes>
            </Fragment>
          ) : (
            <>
              <Sidebar isSidebar={isSidebar} />

              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/clients" element={<Team />} />
                  <Route path="/clients/:id" element={<ClientItem />} />
                  <Route path="/Documents" element={<Team />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/sessions" element={<Sessions />} />
                  <Route path="/session/:id" element={<SessionItem />} />
                  <Route path="/reports" element={<ReportTabs />} />
                  <Route
                    path="/clientIntakeForm"
                    element={<ClientIntakeForm />}
                  />
                  <Route path="/newsession" element={<NewSession />} />

                  <Route path="/bar" element={<Bar />} />
                  {/* <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} /> */}
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </main>
            </>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    // </ErrorBoundary>
  );
}

export default App;
