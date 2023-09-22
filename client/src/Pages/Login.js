import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      navigate('/admin');
    }

    
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        console.log("successful login");
        navigate('/');
      } else {
        console.error('Login failed:', response.statusText);
        // You can provide feedback to the user that login failed
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors as needed
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="flex items-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="flex items-start text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
