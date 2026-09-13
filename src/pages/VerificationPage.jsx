import React from 'react';
import { Link }  from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import VerificationForm from '../Components/Verificationform';


function VerificationPage(){
    return(
<div>
   <div className="LoginPage">
   <div className='box1'>

    <h1>Welcome Back!</h1>
    <h4>Enter your credentials to access your dashboard</h4> 
     {/* <Link to="/dashboard">
            <div className='btn'>
                <button >Get Started</button>
                <button className='btn2'>Learn more</button> </div>
            </Link> */}
   </div>
   <div className="box2">

    <h2>Sign up!</h2>
    <h4>Join our community of learners and start your journey towards success</h4>
    <VerificationForm />
      { <Link to="/dashboard">
            <div className='btn'>
                <button >Signup!</button>
                <p>Already have an account? <span>Login</span></p>
                
                 </div>
            </Link> }


   </div>
   </div>
</div>
    )

}

    export default VerificationPage;


