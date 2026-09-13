import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import VerificationPage from './pages/VerificationPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';

function App() {
    useEffect(() => {
        fetch("http://localhost:5000/students")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/verification" element={<VerificationPage />} />
                 <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
}

export default App;
