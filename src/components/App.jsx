import React from "react";
import "../styles/App.css";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Fast Cash</h1>
      </div>
      <div className="app-body">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
