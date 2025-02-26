import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/service/:id" element={<ServicePage />} />
    </Routes>
  );
};

export default App;
