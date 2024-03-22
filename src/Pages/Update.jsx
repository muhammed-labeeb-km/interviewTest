import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { update } from '../API/appAPI';
function Update() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("Token");
  
      if (!token) {
        console.error("Token not found in sessionStorage");
        return;
      }
  
      let headers = { "x-access-token": token };
      const response = await update(formData,headers); 
  
      if (response.status === 200) {
        alert("User data updated successfully");
        navigate('/');
      } else {
        alert("Update failed. Unexpected status code:", response.status);
      }
    } catch (error) {
      alert("Update failed:", error);
    }
  };

  return ( 
    <div className='ms-5 d-flex align-items-center justify-content-around text-center' style={{minHeight:'100vh'}}>
    
      <form className='ms-5' style={{width:'500px'}} onSubmit={handleSubmit}>
      <h1 className='fw-bolder text-success' >UPDATE</h1>
        <div className='my-2'>
          <input 

            type="text" 
            placeholder='name'
            className='form-control'
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='my-2'>
          <input 
            type="password" 
            id="password" 
            className='form-control'
            name="password" 
            placeholder='password'
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button className='btn btn-outline-success w-50' type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
