import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Error from "./components/Error";
import Redirect from "./components/Redirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/redirect" element={<Redirect />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        {/* Add new Routes Here */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
