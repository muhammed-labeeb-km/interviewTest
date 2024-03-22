import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../API/appAPI';
function Home() {
    const navigate = useNavigate()
    const [myData, setMyData] = useState({
        email: "",
        password: ""
      });
    
      const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
      });
    
      const handleSignIn = async(e) => {
        const {email,password}=myData
        e.preventDefault(); 
        if(email && password){
            try {
                const response = await login(myData)
                console.log("Login successful. Token:", response.data.token);
                if(response.data.token){
                    alert("Login Successfull")
                    sessionStorage.setItem("Token",response.data.token)
                    navigate('/decide')
                }
              } catch (error) {
                console.error("Login failed:", error);
              }
        }
        else{
          alert("Complet the Login form")
        }
      };
    
      const handleSignUpSubmit = async(e) => {
        e.preventDefault(); 
        const {email,password,name}=signUpData
        if(email && password && name){
            try {
              const result = await register(signUpData)
                console.log("Token:", result.data.token);
                if(result.data.token){
                    alert("successfully registered")
                }
              } catch (error) {
                console.error("Registration failed:", error);
              }
        }
        else{
          alert("Complet the Register form")
        }
        
      };
  return (
    <div className='d-flex align-items-center justify-content-around ' style={{minHeight:"100vh"}}>
    <div className='' > 
    <div className='text-center d-flex  p-5' style={{borderRadius:"15px"}}>
      <Row >
      
        <h1 className='text-primary fw-bold'>LOGIN</h1>
        <form onSubmit={handleSignIn} className=''>
          <input
            type="email"
            value={myData.email}
            onChange={e => setMyData({ ...myData, email: e.target.value })}
            className='form-control my-2'
            placeholder='email'
          />
          <input
            type="password"
            value={myData.password}
            onChange={e => setMyData({ ...myData, password: e.target.value })}
            className='form-control my-2'
            placeholder='password'
          />
          <button type="submit" className='btn btn-outline-primary my-2 w-50'>Sign In</button>
        </form>
      </Row>
    </div>
   <hr />
    <div className='text-center d-flex  p-5' style={{borderRadius:"15px"}}>
      <Row >
      
        <h1 className='text-warning fw-bold'>REGISTER</h1>
        <form onSubmit={handleSignUpSubmit} className=''>
        <input
            type="text"
            value={signUpData.name}
            onChange={e => setSignUpData({ ...signUpData, name: e.target.value })}
            className='form-control my-2'
            placeholder='name'
          />
          <input
            type="email"
            value={signUpData.email}
            onChange={e => setSignUpData({ ...signUpData, email: e.target.value })}
            className='form-control my-2'
            placeholder='email'
          />
          <input
            type="password"
            value={signUpData.password}
            onChange={e => setSignUpData({ ...signUpData, password: e.target.value })}
            className='form-control my-2'
            placeholder='password'
          />
          <button type="submit" className='btn btn-outline-warning my-2 w-50'>Sign Up</button>
        </form>
      </Row>
    </div>
    </div>
    </div>
  )
}

export default Home
