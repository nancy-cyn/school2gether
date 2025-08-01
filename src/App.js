import React from 'react';
import StudentDirectory from './Pages/studirectory'; // ✅ correct
import './App.css'; // optional if you want styles here too
import Dashboard from "./Pages/Dashboard";
import SchedulePage from "./Pages/Schedule";
import AnalyticsSummary from "./Pages/AnalyticsPage";

function App() {
  return (
    <div>
      {/*<StudentDirectory />*/}
       {/*<Dashboard />*/}
      {/*  <SchedulePage/>*/}
        <AnalyticsSummary/>
    </div>
  );
}

export default App;
