import React from 'react'
import Navbar from './Navbar'
import ambulence from "../Assets/ambulence-removebg-preview (1).png";
import "../Styles/Hero.css";
function Emergency() {
  return (
    <div className='back'>
      
      <div>
        <Navbar/>
      <form style={{display:'flex'}} className='bg-blue-600 text-white mt-3 ml-40 mr-40 rounded-xl'>
        <table className='justify-center border-red-600 m-9 ml-72 p-6' style={{alignContent:'center'}} >
        <td><h1 className='justify-center flex text-4xl font-bold mt-2 p-2'>Book Your Ambulence </h1></td><img className='ambulence' src={ambulence}></img>
        <tr ><label className='font-bold text-2xl'>Patient's name: </label><input className='m-3 rounded-md p-2' style={{width:400}} type='text' placeholder='Enter patients name'></input></tr>
        <tr><label className='font-bold text-2xl'>Phone no: </label><input className='m-3 rounded-md p-2' style={{width:400}} type='text' name='phone' placeholder='Enter Phone no'></input></tr>
        <tr><label className='font-bold text-2xl'>Address: </label><input className='m-3 rounded-md p-3 w-80' style={{width:400}} type='text' name='Address' max={23}  placeholder='Enter your Address'></input></tr>
        <tr><label className='font-bold text-2xl'>Nearby Hospital: </label><input style={{width:400}} className='m-3 rounded-md p-3 w-80' type='text' name='Address' max={23}  placeholder='Enter your Nearby Hospital'></input></tr>
        </table>
      </form>
      
      </div>
    </div>
  )
}

export default Emergency
