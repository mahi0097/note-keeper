import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Navigate , Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import  ProtectRoute from './components/ProtectRoute'




function Logout() {
  localStorage.clear()
  return <Navigate to="/login"/>
}

function RegisterAndLogin(){
  localStorage.clear()
  return <Register/>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Home route */}
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<RegisterAndLogin />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
