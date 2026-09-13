import React, { useState } from "react";

function StudentsForm({ onAddStudent }) {
    const [form, setForm] = useState({
        Name: "",
        Age: "",
        Grade: "",
        Course: "",
        RegNo: "",
        // Gender:"",
    });

    //handle input change
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    //send form data to backend
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/Students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        const newStudent = await response.json();
        console.log("Student added", response.status);
        console.log("No student data", newStudent);
          setForm({ Name: "", Age: "", Grade: "", Course: "", RegNo: ""});//reset form
        // setForm({ Name: "", Age: "", Grade: "", Course: "", RegNo: "", Gender:"" });//reset form
        if (onAddStudent) {
            onAddStudent(newStudent);
        }
    };

 return (
    <form onSubmit={handleSubmit} className="studentform">
         <input className="form" type="text" name="Name" value={form.Name} onChange={handleChange} placeholder="Name" required />
         <input  className="form" type="number" name="Age" value={form.Age} onChange={handleChange} placeholder="Age" required />
         <input className="form"  type="text" name="Course" value={form.Course} onChange={handleChange} placeholder="Course" required />
         <input className="form" type="number" name="RegNo" value={form.RegNo} onChange={handleChange} placeholder="Registration Number" required />
         {/* <input className="form" type="text" name="Gender" value={form.Gender} onChange={handleChange} placeholder="Gender"/> */}
        <button type="submit">Add Student</button>
        </form>
    );
}

export default StudentsForm;
