import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/*ProtectedRoute will check for the authentication and the redirect to dashboard  */}
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
};

export default App;
