import React from 'react'
import Navbar from './Navbar';
import "../Styles/Hero.css";

import app from "../Assets/app.png";
import ambulance from "../Assets/ambulence-removebg-preview (1).png";
import { Link } from 'react-router-dom';
function Admin() {
  return (
    <div>
      <>
      <Navbar/>
      <div style={{display:'flex'}}>
        <Link>
        <div className='bg-slate-400 text-black m-9 Card border-pink-100 h-80 w-72' style={{border:1}}>
          <h1 className='mt-5 font-serif text-xl' style={{textAlign:'center'}}>Apppointment Booking Information</h1>
          <img src={app} className='appointment'></img>
        </div>
        </Link>
        <Link>
        <div className='bg-slate-400 text-black m-9 Card border-pink-100 h-80 w-72' style={{border:1}}>
          <h1 className='mt-5 font-serif text-xl' style={{textAlign:'center'}}>Ambulence booking Information</h1>
          <img src={ambulance} className='appointment'></img>
        </div>
        </Link>
        <Link>
        <div className='bg-slate-400 text-black m-9 Card border-pink-100 h-80 w-72' style={{border:1}}>
          <h1 className='mt-5 font-serif text-xl' style={{textAlign:'center'}}>Patient Data Information</h1>
          <img src={ambulance} className='appointment'></img>
        </div>
        </Link>
        <Link>
        <div className='bg-slate-400 text-black m-9 Card border-pink-100 h-80 w-72' style={{border:1}}>
          <h1 className='mt-5 font-serif text-xl' style={{textAlign:'center'}}>Patient Login Information</h1>
          <img src={ambulance} className='appointment'></img>
        </div>
        </Link>
        
      </div>
        
      </>
    </div>
  )
}

export default Admin
