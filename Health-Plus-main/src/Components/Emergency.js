import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import ambulence from "../Assets/ambulence-removebg-preview (1).png";
import "../Styles/Hero.css";
import { toast, ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';

// Put key here
const googleMapsApiKey = "AIzaSyDplEzPbW-VMv4ylEOrgHOxTT9_-nDJrfY";

function Emergency() {
  const [location, setLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [address, setAddress] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.onload = () => {
      initializeMap();
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    if (window.google) {
      const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setLocation({ lat, lng });
  
        // Fetch nearby hospitals
        fetch(`http://localhost:8080/ambulance/nearby-hospitals?latitude=${lat}&longitude=${lng}`)
          .then((res) => res.json())
          .then((data) => setNearbyHospitals(data))
          .catch((err) => console.error(err));
      };
  
      const initializeGoogleMap = (lat, lng) => {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 12,
        });
        map.addListener('click', handleMapClick);
      };
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            initializeGoogleMap(lat, lng);
          },
          (error) => {
            console.error('Error getting location:', error);
            // Fallback to default location
            initializeGoogleMap(28.7041, 77.1025);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        // Fallback to default location
        initializeGoogleMap(28.7041, 77.1025);
      }
    }
  };
  

  const handleHospitalSelect = (event) => {
    setSelectedHospital(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/ambulance/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName,
          patientNumber,
          address,
          selectedHospital,
        }),
      });
      
      if (response.status === 201) {
        toast.success("Booking successful !!! Ambulance on the way");
        setPatientName("");
        setPatientNumber("");
        setAddress("");
        setSelectedHospital("");
      } else {
        toast.error("An error occurred during booking!");
      }
    } catch (error) {
      toast.error("An error occurred during booking!");
    }
  };

  return (
    <div className='back'>
      <div>
        <Navbar />
        <form onSubmit={handleSubmit} style={{ display: 'flex' }} className='bg-blue-200 text-gray-800 mt-3 ml-40 mr-40 rounded-xl'>
          <table className='justify-center border-gray-600 m-9 ml-72 p-6' style={{ alignContent: 'center' }}>
            <tbody>
              <tr>
                <td>
                  <h1 className='justify-center flex text-4xl font-bold mt-2 p-2'>Book Your Ambulance</h1>
                </td>
                <td>
                  <img className='ambulence' src={ambulence} alt="ambulance" />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='font-bold text-2xl'>Patient's Name: </label>
                </td>
                <td>
                  <input
                    className='m-3 rounded-md p-2'
                    style={{ width: 400 }}
                    type='text'
                    placeholder='Enter patient name'
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='font-bold text-2xl'>Phone No: </label>
                </td>
                <td>
                  <input
                    className='m-3 rounded-md p-2'
                    style={{ width: 400 }}
                    type='text'
                    placeholder='Enter phone no'
                    value={patientNumber}
                    onChange={(e) => setPatientNumber(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='font-bold text-2xl'>Address: </label>
                </td>
                <td>
                  <input
                    className='m-3 rounded-md p-3 w-80'
                    style={{ width: 400 }}
                    type='text'
                    placeholder='Enter your address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='font-bold text-2xl'>Select Location: </label>
                </td>
                <td>
                  <div ref={mapRef} style={{ height: "400px", width: "400px" }} />
                </td>
              </tr>
              <tr>
                <td>
                  <label className='font-bold text-2xl'>Select Nearby Hospital: </label>
                </td>
                <td>
                  <select
                    style={{ width: 400 }}
                    className='m-3 rounded-md p-2'
                    value={selectedHospital}
                    onChange={handleHospitalSelect}
                  >
                    <option value="">Select a hospital</option>
                    {nearbyHospitals.length > 0 ? (
                      nearbyHospitals.map((hospital, index) => (
                        <option key={index} value={hospital}>{hospital}</option>
                      ))
                    ) : (
                      <option value="">No hospitals found</option>
                    )}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Button
                    type="submit"
                    variant="contained"
                  >
                    Confirm Ambulance Booking
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          draggable
        />
      </div>
    </div>
  );
}

export default Emergency;
