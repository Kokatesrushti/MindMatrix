import React,{useState} from 'react'

function Login() {
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="flex items-start text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
                <label className="flex items-start text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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

export default Login