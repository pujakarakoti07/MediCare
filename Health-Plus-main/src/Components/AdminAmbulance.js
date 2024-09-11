import React, { useState, useEffect } from 'react';

function AdminAmbulance() {
  const [data, setData] = useState([]);  // State to store fetched data
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [error, setError] = useState(null);  // State to manage errors

  useEffect(() => {
    // Fetch data from an API
    fetch('http://localhost:8080/ambulance/data')  // Replace with your API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Convert response to JSON
      })
      .then(data => {
        setData(data);  // Store data in state
        setLoading(false);  // Set loading to false
      })
      .catch(error => {
        setError(error);  // Set error if fetch fails
        setLoading(false);  // Set loading to false
      });
  }, []);  // Empty dependency array to run effect once when component mounts

  // Conditional rendering based on the state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const dataa  = JSON.stringify(data)
  const id = dataa[0];
  console.log(dataa)
  console.log(dataa[0])
  return (
    <div>
      <h1>Fetched Data{dataa}</h1>
      <h1>{id}</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminAmbulance;
