import { useState, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from "./scenes/Payments";
import Reports from "./scenes/reports";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import ConsentForm from "./scenes/consentform";
import AccountDetail from "./scenes/accountverification/Session";
import AccountVerification from "./scenes/accountverification/Sessions";
import DocumentList from "./scenes/accountverification/DocumentList";
import VerificationDoc from "./scenes/accountverification/verificationdocs";

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
                <Route path="/Login" element={<Login />} />
                <Route path="/IntakeForm" element={<IntakeForm />} />
                <Route
                  path="/StudentBookingForm"
                  element={<StudentBookingForm />}
                />
                <Route path="/Termination" element={<Termination />} />
                <Route path="/ConsentForm" element={<ConsentForm />} />
                <Route
                  path="/CounsellingRecord"
                  element={<CounselingRecord />}
                />
                <Route path="/ongoingrecord" element={<OnGoingCounseling />} />

                <Route
                  path="/ClientIntakeForm"
                  element={<ClientIntakeForm />}
                />
                <Route
                  path="/safetycontract"
                  element={<SafetyContractForm />}
                />
              </Routes>
            </Fragment>
          ) : (
            <>
              <Sidebar isSidebar={isSidebar} />

              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />

                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Clients" element={<Team />} />
                  <Route path="/Documents" element={<Team />} />
                  <Route path="/login" element={<Login />} />

                  <Route path="/sessions" element={<AccountVerification />} />
                  <Route path="/session/:id" element={<AccountDetail />} />
                  <Route
                    path="/accounts/account/:id/documents"
                    element={<DocumentList />}
                  />
                  <Route
                    path="/accounts/account/:id/documents/verification"
                    element={<VerificationDoc />}
                  />

                  <Route path="/reports" element={<Reports />} />
                  <Route
                    path="/ClientIntakeForm"
                    element={<ClientIntakeForm />}
                  />
                  <Route path="/form" element={<Form />} />

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
