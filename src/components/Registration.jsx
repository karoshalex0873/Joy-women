import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Install heroicons

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Password strength checker
  const checkPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length > 8) strength += 1;
    if (/[A-Z]/.test(pwd)) strength += 1;
    if (/[a-z]/.test(pwd)) strength += 1;
    if (/[0-9]/.test(pwd)) strength += 1;
    if (/[@$!%*?&#]/.test(pwd)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setConfirmationMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/register', { name, email, password });
      setConfirmationMessage('Registration successful! Please log in.');
      // Clear fields or redirect here
    } catch (err) {
      setError('Registration failed. Please check your details.');
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
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register</h3>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {confirmationMessage && <p className="text-green-500 text-center mb-4">{confirmationMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkPasswordStrength(e.target.value);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-gray-700 font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                </button>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Password Strength</p>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((strength) => (
                  <div
                    key={strength}
                    className={`h-2 w-1/5 ${strength <= passwordStrength ? 'bg-green-500' : 'bg-gray-300'} rounded`}
                  />
                ))}
              </div>
            </div>
            {/* <div>
              <label htmlFor="confirmation-message" className="block text-gray-700 font-medium">Confirmation Message</label>
              <input
                type="text"
                id="confirmation-message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter confirmation message"
              />
            </div> */}
            <button
              type="submit"
              className={`bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            <p className="text-center mt-4 text-sm">
              <Link to="/login" className="text-orange-500 hover:underline">Already have an account? Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
