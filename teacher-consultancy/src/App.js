import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn'; // Correct path to SignIn component
import SignUp from './pages/SignUp'; // Correct path to SignUp component
import TeacherRegistration from './pages/TeacherRegistration'; // Correct path to TeacherRegistration
import AdminDashboard from './pages/AdminDashboard'; // Correct path to AdminDashboard
import UserProfile from './pages/UserProfile'; // Correct path to UserProfile
import ProtectedRoute from './components/ProtectedRoute'; // Correct path to ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<TeacherRegistration />} />

        {/* Protected Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
