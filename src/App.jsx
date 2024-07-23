import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashbord';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element= {<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
