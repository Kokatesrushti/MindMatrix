
import React, { useState,useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OrganizationCard from '../components/OrganizationCard';

function AdminPanel ({ loggedIn }) {
  const [organizations, setOrganizations] = useState([]);
  const [orgi_name, setName] = useState('');
  const [orgi_email, setEmail] = useState('');
  const [orgi_code, setCode] = useState('');
  const navigate = useNavigate();



  const handleRegister = async () => {
    // const newOrganization = { name, email, code };
    // setOrganizations([...organizations, newOrganization]);
    try {
      const authtoken = localStorage.getItem('authtoken');
      console.log(authtoken)
      const response = await fetch('http://localhost:5000/admin/createorg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authtoken}`
        },
        body: JSON.stringify({ orgi_name, orgi_email}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        console.log("successfully Created");
        navigate('/admin');
      } else {
        console.error('Registration failed:', response.statusText);
    
      }
    } catch (error) {
      console.error('Error during Creation :', error);

    }
  };

 
  

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl mb-4">Admin Panel</h1>
      <div className="mb-4">
        <h2 className="text-xl">Register Organization</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Name"
            value={orgi_name}
            onChange={(e) => setName(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={orgi_email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          />
          <input
            type="text"
            placeholder="Code"
            value={orgi_code}
            onChange={(e) => setCode(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          />
          <button onClick={handleRegister} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Register
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl">Registered Organizations</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {organizations.map((org, index) => (
      <OrganizationCard key={index} org={org} />
    ))}
  </div>
      </div>
      <div className="mt-4">
        <Link to="/login" className="text-blue-500">Logout</Link>
      </div>
    </div>
  );
};

export default AdminPanel;
