import React from 'react'
import { colorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar"
import SideBar from "./scenes/global/SideBar";
import Dashboard from './scenes/dashboard/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Team from "./scenes/team/Team"
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts"
import Form from "./scenes/form/Form";
import Calendar from "./scenes/calendar/Calendar";
import FAQ from "./scenes/faq/FAQ"
import Bar from './scenes/bar/Bar';
import Pie from './scenes/pie/Pie';
import Line from "./scenes/line/Line"
import Geography from "./scenes/geography/Geography"

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <div className='app'>
          <SideBar/>
        <main className='content'>
            <Topbar />
            <Routes >
              <Route path="/" element={<Dashboard />}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/faq" element={<FAQ/>}/> 
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/geography" element={<Geography/>}/>
            
            </Routes>
        </main>
      </div>
      </ThemeProvider>
  </colorModeContext.Provider> 
    
  )
}
