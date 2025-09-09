import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <Dashboard />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
