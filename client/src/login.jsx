import React, { useState } from 'react'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login= () => {
    
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{
            
            email,
            password
        }).then(result=>{console.log(result) 
          if(result.data==="Success"){
            navigate('/home')
          } 
           
        }) 
    }
   
  return (
    
    <div class="card-body p-5">
      <h2 class="text-uppercase text-center mb-5">Create an account</h2>

      <form >

        

        <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="form3Example3cg">Your Email</label>
          <input type="email" id="form3Example3cg" class="form-control form-control-lg" onChange={(e)=>{
            setemail(e.target.value) }}/>
          
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="form3Example4cg">Password</label>
          <input type="password" id="form3Example4cg" class="form-control form-control-lg" 
          onChange={(e)=>{
            setpassword(e.target.value) }}/>
        
        </div>

        
 

        <div class="d-flex justify-content-center">
          <button type="button" onClick={handlesubmit}
            data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
        </div>

       

      </form>
      
       
       
 
    </div>
  )
}

export default Login;