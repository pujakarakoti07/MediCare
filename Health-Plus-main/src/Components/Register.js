import React from 'react'
import Navbar from './Navbar'
import { TextField, Button, Paper, Container } from '@mui/material'

function Register() {
  return (
    
      <div>
        <Navbar/>
        <Container className='p-3'>
            <h1 className='text-4xl align-middle font-extrabold mt-8'>Register Form</h1>
        <Paper elevation={3} className='mt-8'>
        <form noValidate autoComplete='off'>
        <TextField className='m-2' id="outlined-basic" label="First Name" variant="outlined" fullWidth/>
        <TextField className='m-2' id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
      <TextField className='m-5' id="outlined-basic" label="Username" variant="outlined" fullWidth/>
      <TextField className='m-2' id="outlined-basic" label="Password" variant="outlined" fullWidth/>
      <TextField className='m-2' id="outlined-basic" label="Address" variant="outlined" fullWidth/>
      <TextField className='m-2' id="outlined-basic" label="Phone no" variant="outlined" fullWidth/>
      <TextField className='m-2' id="outlined-basic" label="Age" variant="outlined" fullWidth/>
      <TextField className='m-2' id="outlined-basic" label="Gender" variant="outlined" fullWidth/>
      <div className='p-3 -ml-6x'><Button variant="contained">Submit</Button></div>
      </form>
        </Paper>
        </Container>
        
       
    </div>
    
  )
}

export default Register
