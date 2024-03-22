import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { deleet } from '../API/appAPI';

function Delete() {
    const navigate = useNavigate()
    
    const handleDelete = async () => {
        try {
            const token = sessionStorage.getItem("Token");
  
            if (!token) {
                console.error("Token not found in sessionStorage");
                return;
            }
  
            let headers = { "x-access-token": token }; 
            const response = await deleet(headers);
  
            if (response.status === 200) {
                alert("User deleted successfully");
            } else {
                alert("Deletion failed. Unexpected status code:", response.status);
            }
        } catch (error) {
            alert("Deletion failed:", error);
        }
    }

    const handleNo = () => {
        navigate('/')
    }

    return (
        <div className=' text-center d-flex flex-column justify-content-evenly ' style={{backgroundColor:'whitesmoke',minHeight:'100vh'}} >
            <div>
                <span className='text-danger fs-1'>Do you want to delete this account</span>
            </div>
            <div>
                <button onClick={handleDelete} className='btn-danger btn w-25 mx-4'>Yes</button>
                <button onClick={handleNo} className='btn btn-secondary w-25 mx-4'>No</button>
            </div>
        </div>
    );
}

export default Delete;
