import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
