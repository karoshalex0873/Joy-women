import React, { useState } from 'react';

const Loans = () => {
  const [showForm, setShowForm] = useState(false);
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleLoanTypeChange = (type) => {
    setLoanType(type);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitting:', { loanType, loanAmount, reason });
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setShowForm(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Loan Type Selection */}
      <section className="mb-8 p-6 bg-gradient-to-r from-orange-100 to-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose Your Loan Type</h2>
        <p className="text-lg mb-6 text-gray-600">
          Select the loan that best fits your needs and start your journey towards financial freedom.
          Whether you're looking for long-term stability or short-term flexibility, we have the right option for you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            className="bg-orange-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleLoanTypeChange('Long-Term')}
          >
            Long-Term Loan
          </button>
          <button
            className="bg-orange-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleLoanTypeChange('Short-Term')}
          >
            Short-Term Loan
          </button>
        </div>
      </section>

      {/* Grid Container for Loan Application and Payment Method */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Loan Application Form Popup */}
        {showForm && (
          <div
            className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleClickOutside}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-semibold mb-4">Loan Application Form</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Membership Number</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your membership number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Age</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your age"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Loan Amount</label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder={`Enter amount for ${loanType}`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Reason for Application</label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows="4"
                    placeholder="Explain why you are applying for this loan"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Loan Payment */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Loan Payment</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-105 flex-1">
              M-Pesa
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transform transition-transform duration-300 hover:scale-105 flex-1">
              Bank Transfer
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transform transition-transform duration-300 hover:scale-105 flex-1">
              Credit Card
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Loans;
