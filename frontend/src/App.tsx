import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ComingSoon from "../pages/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
