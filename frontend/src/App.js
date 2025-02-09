import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddData from "./components/AddData";
import ViewAll from "./components/ViewAll";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/view-all" element={<ViewAll />} />
          {/* Add additional routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
