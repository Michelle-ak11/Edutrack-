import React, { useState, useEffect } from 'react';



function VerificationForm() {
const [formData, setFormData] = useState({
    Classname:'',
    Password:'',
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};
const handleSubmit = async (e) => {}







    return (
        <form>
            {/* Form fields go here */}
        </form>
    );
}

export default VerificationForm;