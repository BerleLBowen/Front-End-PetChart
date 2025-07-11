import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContent.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import Home from './Components/Home.jsx';
import LoginPage from './Components/LoginPage.jsx';
import Register from './Components/Register.jsx';
import PetParentRegister from './Components/PetParentRegister.jsx';
import VetRegister from './Components/VetRegister.jsx';
import PetParentDashboard from './Components/PetParentDashboard.jsx';
import VeterinarianDashboard from './Components/VetDashboard.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/pet-parent" element={<PetParentRegister />} />
          <Route path="/register/veterinarian" element={<VetRegister />} />
          
          {/* Protected routes */}
          <Route path="/dashboard/pet-parent/*" element={
            <ProtectedRoute allowedUserTypes={['pet-parent']}>
              <PetParentDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/dashboard/veterinarian/*" element={
            <ProtectedRoute allowedUserTypes={['veterinarian']}>
              <VeterinarianDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;