import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import  Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div>
      {/* <Login/>
      <Register/>
      <Navbar/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
