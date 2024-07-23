import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/login', { email, password });
      // Handle success (e.g., redirect to dashboard or show success message)
      console.log(response.data);
      // Redirect or update state here
    } catch (err) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/back.jpg)', filter: 'blur(8px)' }}
      />
      <div className="relative flex justify-center items-center min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full z-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login</h3>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className={`bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-center mt-4 text-sm">
              <Link to="/register" className="text-orange-500 hover:underline">Don't have an account? Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
