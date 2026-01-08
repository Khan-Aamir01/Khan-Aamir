import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "../pages/Homepage";
import AdminDashboard from "../pages/AdminDashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />

      {/* Protected admin route */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
