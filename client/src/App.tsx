import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import RegisterLoginPage from './pages/auth/RegisterLoginPage';
import DashboardPage from './pages/dashboard';
import LandingPage from './pages/landing';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}>
          {/* Nested routes */}
        </Route>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/register' element={<RegisterLoginPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App