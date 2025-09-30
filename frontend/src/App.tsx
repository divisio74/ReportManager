import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Analyse from "./pages/Analyse";
import Collect from "./pages/Collect";
import Report from "./pages/Report";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login accessible sans authentification */}
        <Route path="/login" element={<Login />} />

        {/* Pages protégées */}
        <Route
          path="/Analyse"
          element={
            <ProtectedRoute>
              <Analyse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Collect"
          element={
            <ProtectedRoute>
              <Collect />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
