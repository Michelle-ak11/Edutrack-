import React from 'react';
import { Link }  from 'react-router-dom';
import { FaChartBar, FaGraduationCap } from 'react-icons/fa';
import { FaCloud, FaShield, FaUserGroup } from 'react-icons/fa6';




function LandingPage() {
    return (
       
        <div className='home'>
             <header>
               <div className="logo">
                <FaGraduationCap className='icon'/> <h4>EDUTRACK</h4></div>
        <ul className="nav-links">
            <li><a href="#Features">Features</a></li>
            <li><a href="#About"> About Us</a></li>
            <li><a href="Contact">Contact</a></li>
            </ul>
     <Link to="/dashboard" >
            <button className='btn1'>Get Started</button></Link>
              </header>

        <div className="welcome-page">
            <h1>EDUTRACK</h1>
            <h4>A Mordern Solution to manage students information efficiently; Add. view, update and organize students records with ease.</h4>
            <Link to="/verification">
            <div className='btn'>
                <button >Get Started</button>
                <button className='btn2'>Learn more</button>
                 </div>
            </Link>

            <div className='cards'>
            <div className='card'>
                    <FaUserGroup className='icon'/>
                    <h4>Manage Shortcut</h4>
                </div>

                <div className='card'>
                    <FaChartBar className='icon'/>
                    <h4>Report & Stats</h4>
                </div>

                <div className='card'>
                    <FaShield className='icon'/>
                    <h4>Secure Data</h4>
                </div>
                <div className='card'>
                    <FaCloud className='icon'/>
                    <h4>Cloud Ready</h4>
                </div>
             </div>
        </div>
        </div>
    );
}

export default LandingPage;