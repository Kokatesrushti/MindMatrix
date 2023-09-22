import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    organization_code: '', // Update the field name to match the backend
  });

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.age <= 0) {
      alert('Age must be greater than 0');
      return;
    }

     try {
    const response = await fetch('http://localhost:5000/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Registration successful:', data);

      const token = data.token;

      localStorage.setItem('token', token);


      window.location.href = '/login';
    } else {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.error('Registration failed:', data.error);
      } else {
        console.error('Registration failed with non-JSON response');
      }
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="flex items-start text-gray-700 font-semibold">Name *</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="flex items-start text-gray-700 font-semibold">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="flex items-start text-gray-700 font-semibold">Age *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="flex items-start text-gray-700 font-semibold">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="org_code" className="flex items-start text-gray-700 font-semibold">Organization Code</label>
            <input
              type="text"
              id="organization_code" // Update the id to match the field name
              name="organization_code" // Update the name to match the backend field name
              value={formData.organization_code} // Update the value to match the field name
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
