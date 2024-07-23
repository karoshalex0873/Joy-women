import React, { useState } from 'react';
import { HomeIcon, BanknotesIcon, WalletIcon, DocumentTextIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Savings from './services/Savings';
import { Link } from 'react-router-dom';
import Deposit from './services/Deposit';
import Balance from './services/Balance';
import Loans from './services/Loans';
import Offers from './services/Offers';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('savings');

  const renderContent = () => {
    switch (activeSection) {
      case 'savings':
        return <Savings />;
      case 'deposit':
        return <Deposit />;
      case 'balance':
        return <Balance />;
      case 'loans':
        return <Loans />;
      case 'offers':
        return <Offers />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div>
      <button className="bg-orange-500  text-white p-1 rounded-md"><Link to="/">Home</Link></button>
      
       <div className="flex h-screen bg-gray-100 py-3 px-2">
      {/* Sidebar */}
      <div className=" lg:w-64 md:w-30 w-28 bg-white shadow-lg border-r border-gray-200 rounded-3xl" >
        <div className="flex items-center justify-center h-16 bg-orange-500 rounded-xl text-white lg:text-2xl font-bold">
          Dashboard
        </div>
        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            <li>
              <a
                href="#savings"
                onClick={() => setActiveSection('savings')}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 transition duration-300 ease-in-out"
              >
                <HomeIcon className="h-6 w-6 text-orange-500" />
                <span>Savings</span>
              </a>
            </li>
            <li>
              <a
                href="#deposit"
                onClick={() => setActiveSection('deposit')}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 transition duration-300 ease-in-out"
              >
                <WalletIcon className="h-6 w-6 text-orange-500" />
                <span>Deposit</span>
              </a>
            </li>
            <li>
              <a
                href="#balance"
                onClick={() => setActiveSection('balance')}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 transition duration-300 ease-in-out"
              >
                <BanknotesIcon className="h-6 w-6 text-orange-500" />
                <span>Balance</span>
              </a>
            </li>
            <li>
              <a
                href="#loans"
                onClick={() => setActiveSection('loans')}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 transition duration-300 ease-in-out"
              >
                <DocumentTextIcon className="h-6 w-6 text-orange-500" />
                <span>Loans</span>
              </a>
            </li>
            <li>
              <a
                href="#offers"
                onClick={() => setActiveSection('offers')}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 transition duration-300 ease-in-out"
              >
                <BriefcaseIcon className="h-6 w-6 text-orange-500" />
                <span>Offers</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
        <div className="relative">
          <div className="absolute inset-0 bg-white shadow-lg rounded-lg transition-opacity duration-500 ease-in-out opacity-100">
            {renderContent()}
          </div>
          {/* Background animation effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50 transition-opacity duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Dashboard;
