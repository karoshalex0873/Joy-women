import React, { useState, useEffect } from 'react';
import { FaPiggyBank, FaCalendarAlt } from 'react-icons/fa';
import image from '../../assets/img.jpg';

const fetchSavingsHistory = async () => {
  // Simulate a fetch call to a database
  return [
    { date: '2023-07-01', amount: 10000 },
    { date: '2023-07-15', amount: 15000 },
    { date: '2023-08-01', amount: 20000 },
    { date: '2023-06-01', amount: 8000 },
    { date: '2023-05-01', amount: 5000 },
  ];
};

const Savings = () => {
  const [history, setHistory] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getHistory = async () => {
      const data = await fetchSavingsHistory();
      setHistory(data);
    };

    getHistory();
  }, []);

  const totalSavings = history.reduce((total, entry) => total + entry.amount, 0);

  const displayedHistory = showAll ? history : history.slice(0, 3);

  return (
    <div className="w-full bg-gray-100 text-gray-800 py-6 px-3">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">Savings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="shadow-2xl p-6 bg-white rounded-lg flex flex-col items-center">
            <img src={image} alt="Savings" className="rounded-lg w-full mb-6" />
            <div className="text-center">
              <FaPiggyBank className="text-orange-500 text-5xl mb-4" />
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Total Savings</h2>
              <p className="text-xl text-gray-700">{`KES ${totalSavings.toLocaleString()}`}</p>
            </div>
          </div>
          <div className="shadow-2xl p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">History of Savings</h2>
            <ul className="space-y-4">
              {displayedHistory.map((entry, index) => (
                <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
                  <div className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-gray-500 text-xl" />
                    <span className="text-gray-700">{entry.date}</span>
                  </div>
                  <span className="text-gray-800">{`KES ${entry.amount.toLocaleString()}`}</span>
                </li>
              ))}
            </ul>
            {history.length > 3 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
                >
                  {showAll ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
