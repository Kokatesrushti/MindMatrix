import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dateOfBirth: '',
    password: '',
    organizationCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.age <= 0) {
        alert('Age must be greater than 0');
        return; 
      }
    console.log(formData);
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
              id="name"
              name="name"
              value={formData.name}
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
            <label htmlFor="dateOfBirth" className="flex items-start text-gray-700 font-semibold">Date of Birth *</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
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
            <label htmlFor="organizationCode" className="flex items-start text-gray-700 font-semibold">Organization Code</label>
            <input
              type="text"
              id="organizationCode"
              name="organizationCode"
              value={formData.organizationCode}
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
