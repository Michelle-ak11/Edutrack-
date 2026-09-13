import React from 'react';
import StudentsForm from '../Components/StudentsForm';
import { useState } from 'react';
import { useEffect } from 'react';



function DashboardPage() {

    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState("");
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => { //fetch students from backend
        fetch("http://localhost:5000/Students")
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(err => console.log("Error ", err));
          
    }, []);

    //add student to the list
    const handleAddStudent = (newStudent) => {
        setStudents((prev)=> [...prev, newStudent]);
    };
    const handleShowStudents = () => {
        fetch("http://localhost:5000/Students")
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(err => console.log("Error ", err));

            setMessage("Students Added");
            setShowDetails(true);

            setTimeout(() => setMessage(""), 3000);

    }





    return (
      <div className="page">
        <div className="dashboard">
            <h1>Teachers Dashboard</h1>
       
          <StudentsForm  onAddStudent={handleAddStudent}/>

        
          
           
            {students.length >0 ?(
              <details className='show-student'>
             <summary onClick={handleShowStudents}>Show Students</summary>  
            {students.map((student, i) => (
              <div key={i} className="student-list">
                <p> <strong>Name:</strong> {student.name}</p>
                <p> <strong>Age:</strong> {student.age}</p>
                <p> <strong>Course:</strong> {student.Course}</p>
                <p> <strong>Registration Number:</strong> {student.regNo}</p>
              </div> 
            ))}
           
          </details> 
          )
         
       :(
        <p>no students yet</p>
       )
}</div>
</div> )
     
}  

export default DashboardPage;