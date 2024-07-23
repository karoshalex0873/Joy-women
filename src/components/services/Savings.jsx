import React, { useState } from "react";
import { CircularProgress, Box, TextField, Button, Grid, Typography, Paper, Card, CardContent, CardActions } from "@mui/material";

// Circular Progress Component
const CircularProgressComponent = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        maxWidth: "150px", // Adjust as needed
        mx: "auto",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        sx={{
          width: { xs: 30, sm: 40, md: 50 }, // Responsive sizes
          height: { xs: 30, sm: 40, md: 50 },
          color: "#4caf50", // Green color for progress
          borderRadius: "50%",
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
      />
    </Box>
  );
};

// Savings Page Component
const Savings = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const [monthlySavings, setMonthlySavings] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });
  const [totalSavings, setTotalSavings] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const[selectedTerget, setSelectedTerget] = useState('')

  const handleInputChange = (event) => {
    setInputAmount(event.target.value);
  };

  const handleSaveClick = () => {
    const newAmount = Number(inputAmount);
    if (!isNaN(newAmount) && newAmount > 0) {
      setMonthlySavings((prev) => ({
        ...prev,
        [selectedMonth]: prev[selectedMonth] + newAmount,
      }));
      setTotalSavings((prev) => prev + newAmount);
      setInputAmount(0);
    }
  };
  const handleTerget = (event) =>{
 setSelectedTerget(event.target.value)
  }

  const handleHistoryClick = (month) => {
    setSelectedHistory({
      month,
      amount: monthlySavings[month],
    });
  };

  const savingsValue = (totalSavings / 12000) * 100; // Example total goal of 12000 for the year

  return (
    <div className="p-4">
      <Typography variant="h4" component="h2" gutterBottom color="#1976d2">
        Savings
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Manage your savings accounts and view interest rates here.
      </Typography>

      {/* Flex Container for Savings and History */}
      <div className="flex flex-col md:flex-row gap-4 spa">
        {/* Savings Input Section */}
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 2, backgroundColor: "#f5f5f5" }}
          className="flex-1 mb-4 md:mb-0"
        >
          <TextField
            label="Amount to Save"
            type="number"
            value={inputAmount}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Select Month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          >
            {Object.keys(monthlySavings).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </TextField>
          <Button
            onClick={handleSaveClick}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ bgcolor: "#F57C00", '&:hover': { bgcolor: "#F67E30" } }}
          >
            Save
          </Button>
        </Paper>

        {/* History Section */}
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 2, backgroundColor: "#f5f5f5", maxHeight: "300px", overflowY: "auto" }}
          className="flex-1"
        >
          <div className="flex flex-col items-center">
            <Typography variant="h6" component="h3" gutterBottom color="#1976d2">
              Monthly Savings Progress
            </Typography>
            <CircularProgressComponent value={savingsValue} />
            <Typography variant="body2" color="textSecondary" className="mt-2">
              ${totalSavings.toFixed(2)} saved out of 
            </Typography>
          </div>

          {/* Savings History Grid */}
          <div className="mt-8">
            <Typography variant="h6" component="h4" gutterBottom color="#1976d2">
              Savings History
            </Typography>
            <Grid container spacing={2} variant="h4">
                 {Object.keys(monthlySavings).map((month) => (
                <Grid item xs={12} sm={6} md={3} key={month}>
                  <Card
                    variant="outlined"
                    sx={{
                      className:"block md:flex lg:flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      textAlign: "center",
                      maxWidth: 100, // Maximum width for each grid item
                      minWidth:80,
                      width: "100%",
                      mx: "auto",
                      backgroundColor: "#e3f2fd", // Light blue background for items
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                      '&:hover': {
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => handleHistoryClick(month)}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" color="#0d47a1">
                        {month}
                      </Typography>
                      <CircularProgressComponent
                        value={(monthlySavings[month] / 1000) * 100} // Example max value of 1000
                      />
                      <Typography variant="body2" className="mt-2" color="#424242">
                        ksh.{monthlySavings[month].toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Paper>
      </div>
      {/* Selected History Details */}
      {selectedHistory && (
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 2, backgroundColor: "#e8f5e9", mt: 4 }}
        >
          <Typography variant="h6" component="h4" gutterBottom color="#388e3c">
            Details for {selectedHistory.month}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Amount Saved: ksh{selectedHistory.amount.toFixed(2)}
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Savings;
