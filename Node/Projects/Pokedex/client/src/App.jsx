import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/saved" element={<Saved />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>

      </Router>
    </div>
  )
}

export default App