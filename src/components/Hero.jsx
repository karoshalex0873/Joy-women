import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/img.jpg'
import Dashboard from './Dashbord';

const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <Dashboard />

      <nav className="bg-orange-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">Joy Women Banking</h1>
        <ul className="flex flex-1 justify-center space-x-8">
          <li>
            <a href="#home" className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Home</a>
          </li>
          <li>
            <a href="#features" className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Features</a>
          </li>
          <li>
            <a href="#success" className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium">Success Stories</a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-white text-orange-600 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 text-lg font-medium">Login</Link>
          <Link to="/register" className="bg-white text-orange-600 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 text-lg font-medium">Register</Link>
        </div>
      </div>
    </nav>

      <div className="bg-gray-100 min-h-screen flex flex-col justify-center" id="home">
        <div className="container py-8 px-6 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-orange-600">Joy Women Banking</h1>
            <p className="text-2xl text-orange-400 mt-4">Empowering Women to Achieve Financial Success</p>
          </div>

          {/* Main Section */}
          <div className="flex flex-col md:flex-row justify-evenly items-center text-black font-medium mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl mb-4">Welcome Back!</h2>
              <p className="text-lg mb-4">We’re here to support you on your financial journey. Explore our tools and resources designed specifically for women.</p>
              <button className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={hero}
                alt="Happy Woman with Money"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>

          {/* Featured Benefits Section */}
          <div className="bg-white py-12 rounded-lg shadow-lg mb-12" id="features">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Why Choose Us?</h3>
            <div className="flex flex-wrap justify-evenly">
              <div className="flex flex-col items-center text-center px-4 mb-6">
                <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l1 11h8l1-11h4M12 5v2m-6 2h12M9 10v6m6-6v6"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Comprehensive Tools</h4>
                <p className="text-gray-600">Access a wide range of financial tools tailored to women’s needs.</p>
              </div>
              <div className="flex flex-col items-center text-center px-4 mb-6">
                <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l1 11h8l1-11h4M12 5v2m-6 2h12M9 10v6m6-6v6"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Personalized Advice</h4>
                <p className="text-gray-600">Get personalized financial advice to help you reach your goals.</p>
              </div>
              <div className="flex flex-col items-center text-center px-4 mb-6">
                <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2M6 6v6l4 2"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Community Support</h4>
                <p className="text-gray-600">Join a community of empowered women supporting each other.</p>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="text-center mb-12" id="success">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Success Stories</h3>
            <p className="text-lg text-gray-600 mb-6">See how other women have transformed their lives with our financial tools and marketing strategies.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src="https://image.shutterstock.com/image-photo/happy-young-african-woman-holding-money-2068177967"
                alt="Success Story 1"
                className="rounded-lg shadow-lg w-64 h-40 object-cover"
              />
              <img
                src="https://image.shutterstock.com/image-photo/happy-young-african-woman-holding-money-2068177967"
                alt="Success Story 2"
                className="rounded-lg shadow-lg w-64 h-40 object-cover"
              />
              <img
                src="https://image.shutterstock.com/image-photo/happy-young-african-woman-holding-money-2068177967"
                alt="Success Story 3"
                className="rounded-lg shadow-lg w-64 h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
