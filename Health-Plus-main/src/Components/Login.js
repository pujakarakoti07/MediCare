import React, { useState } from 'react'
import { TextField, Button, Paper, Container } from '@mui/material'

import Navbar from './Navbar';
import { Link } from 'react-router-dom';


function Login() {
    const [password, setpassword]=useState("");
    const [username, setusername]=useState("");    
    const handleclick  = (e) =>{
 
        const user={username, password}
        console.log(user)
        
        
        fetch("http://localhost:8080/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
    }
  return (
    
    <div>
      <Navbar/>
      <div>
      <Container className='p-3'>
            <h1 className='text-4xl align-middle font-extrabold mt-8'>Login Form</h1>
        <Paper elevation={3} className='mt-8'>
        <form noValidate autoComplete='off'>
      <TextField className='m-5' id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e)=>{setusername(e.target.value)}} fullWidth/>
      <TextField className='m-2' id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>{setpassword(e.target.value)}}fullWidth/>
      <div className='p-3 -ml-6x'><Button variant="contained" onClick={handleclick}>Submit</Button></div>
      <div className='p-3'><Link to='/register' className='mb-3'><Button  variant="contained">Register if not login</Button></Link></div>
      </form>
        </Paper>
        </Container>
        </div>
        
        
        
    </div>
    
  )
}

export default Login
