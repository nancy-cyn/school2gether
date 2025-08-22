import React from 'react';
import StudentDirectory from './Pages/studirectory'; // ✅ correct
import './App.css'; // optional if you want styles here too
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import SchedulePage from "./Pages/Schedule";
import AnalyticsSummary from "./Pages/AnalyticsPage";
import CheckoutForm from "./Pages/Payment";
import InvoicesPage from "./Pages/Billing-center";
import SessionUsage from "./Pages/SessionUsage";

function App() {
  return (
    <div>
      {/*<StudentDirectory />*/}
       {/*<Dashboard />*/}
      {/*  <SchedulePage/>*/}
        {/* <AnalyticsSummary/> */}
      {/*<CheckoutForm/>*/}
        <BrowserRouter>

            <Routes>
                <Route path="/Checkout" element={<CheckoutForm />} />
                <Route path="/BillingStation" element={<InvoicesPage />} />
                <Route path="/SessionUsage" element={<SessionUsage />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
