import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography, Box, Grid } from '@mui/material';

// Deposit Page Component
const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDepositClick = () => {
    if (selectedMethod && amount) {
      alert(`Deposited ${amount} using ${selectedMethod}`);
      // Implement deposit logic here
      setAmount('');
      setSelectedMethod('');
    } else {
      alert('Please select a deposit method and enter an amount.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#F57C00' }}>Deposit</h2>
      <p className="text-gray-700 mb-4">Make deposits into your accounts and track your transactions here.</p>

      {/* Deposit Form */}
      <div className="mb-4">
        <TextField
          select
          label="Select Deposit Method"
          value={selectedMethod}
          onChange={handleMethodChange}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        >
          <MenuItem value="Airtel Money">Airtel Money</MenuItem>
          <MenuItem value="MPesa">MPesa</MenuItem>
          <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
        </TextField>
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          onClick={handleDepositClick}
          variant="contained"
          style={{ backgroundColor: '#F57C00' }}
          fullWidth
        >
          Deposit
        </Button>
      </div>

      {/* Deposit History */}
      <div>
        <Typography variant="h6" className="mb-4" style={{ color: '#F57C00' }}>
          Deposit History
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                border: '1px solid #ddd',
                borderRadius: 1,
                textAlign: 'center',
                backgroundColor: '#FFF3E0', // Light orange background
              }}
            >
              <Typography variant="subtitle1">Airtel Money</Typography>
              <Typography variant="body2" className="mt-2">
                $500 deposited
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                border: '1px solid #ddd',
                borderRadius: 1,
                textAlign: 'center',
                backgroundColor: '#FFF3E0', // Light orange background
              }}
            >
              <Typography variant="subtitle1">MPesa</Typography>
              <Typography variant="body2" className="mt-2">
                $300 deposited
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                border: '1px solid #ddd',
                borderRadius: 1,
                textAlign: 'center',
                backgroundColor: '#FFF3E0', // Light orange background
              }}
            >
              <Typography variant="subtitle1">Bank Transfer</Typography>
              <Typography variant="body2" className="mt-2">
                $1000 deposited
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Deposit;
