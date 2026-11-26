import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/auth/SignupPage";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/auth/SigninPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
