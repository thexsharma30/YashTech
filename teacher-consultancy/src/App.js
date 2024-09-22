// src/App.js
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherRegistration from './pages/TeacherRegistration';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; // Import SignUp component
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
        <Route path="/register" element={<TeacherRegistration />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
