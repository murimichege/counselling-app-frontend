import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from "./scenes/Payments";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import AccountDetail from "./scenes/accountverification/account";
import AccountVerification from "./scenes/accountverification";
import DocumentList from "./scenes/accountverification/DocumentList";
import VerificationDoc from "./scenes/accountverification/verificationdocs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/auth/Login";
import IntroPage from './scenes/auth/intro'
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isPrivate, setisPrivate] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isPrivate ? (
            <>
			<Routes>
			<Route path="/Login" element={<Login />} />
			<Route path="/IntroPage" element={<IntroPage />} />

			
			</Routes>
            </>
          ) : (
            <>

<Sidebar isSidebar={isSidebar} />

<main className="content">
  <Topbar setIsSidebar={setIsSidebar} />
  <Routes>
 
	 
		<Route path="/" element={<Dashboard />} />

<Route path="/Users" element={<Team />} />
<Route path="/Documents" element={<Team />} />
<Route path="/ogin" element={<Login />} />

<Route
path="/AccountVerification"
element={<AccountVerification />}
/>
<Route
path="/accounts/account/:id"
element={<AccountDetail />}
/>
<Route
path="/accounts/account/:id/documents"
element={<DocumentList />}
/>
<Route
path="/accounts/account/:id/documents/verification"
element={<VerificationDoc />}
/>
<Route path="/contacts" element={<Contacts />} />
{/* <Route path="/Sales" element={<Invoices />} /> */}
<Route path="/form" element={<Form />} />
<Route path="/bar" element={<Bar />} />
<Route path="/pie" element={<Pie />} />
<Route path="/line" element={<Line />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/calendar" element={<Calendar />} />
<Route path="/geography" element={<Geography />} />
   
  </Routes>
</main>


			</>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
