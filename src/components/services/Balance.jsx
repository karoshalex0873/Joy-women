import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaCalendarAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Balance = ({ totalBalance = 0, history = [] }) => {
  const [showBalance, setShowBalance] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  const recentTransactions = history.slice(0, 3); // Display the most recent 3 transactions

  return (
    <div className="shadow-2xl p-6 bg-white rounded-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Balance</h2>
      <p className="mb-4">Check your current balance and recent activity here.</p>
      <button
        onClick={() => setShowBalance(!showBalance)}
        className="text-xl text-orange-500 mb-4 flex items-center"
      >
        {showBalance ? <FaEyeSlash /> : <FaEye />} 
        <span className="ml-2">{showBalance ? 'Hide Balance' : 'Show Balance'}</span>
      </button>
      {showBalance && (
        <p className="text-xl text-gray-700">{`KES ${Number(totalBalance).toLocaleString()}`}</p>
      )}
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="text-xl text-orange-500 mt-4 flex items-center"
      >
        {showHistory ? <FaArrowUp /> : <FaArrowDown />}
        <span className="ml-2">{showHistory ? 'Hide History' : 'Show History'}</span>
      </button>
      {showHistory && (
        <div className="w-full mt-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Recent Transactions</h3>
          <ul className="space-y-4">
            {recentTransactions.map((entry, index) => (
              <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-gray-500 text-xl" />
                  <span className="text-gray-700">{entry.date}</span>
                </div>
                <span className="text-gray-800">{`KES ${entry.amount.toLocaleString()}`}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Balance;
