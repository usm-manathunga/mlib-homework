import React, { useState } from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { Results } from "./Results";
export const Home = () => {
  const [text, setText] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState([]);
  const name = "Manathunga M.M.U.S";

  const genreData = [
    { id: 0, value: 40, label: "Horror" },
    { id: 1, value: 30, label: "Sci-Fi" },
    { id: 2, value: 20, label: "Fantasy" },
    { id: 3, value: 10, label: "Mystery" },
  ];

  const handlePredict = async () => {
    console.log("Predicting genre for:", text);
    setShowChart(true);

    // try {
    //   const response = await fetch("https://api.example.com/predict", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ text }),
    //   });

    //   const data = await response.json();
    //   setChartData(data.chartData);
    //   setShowChart(true);
    // } catch (error) {
    //   console.error("Error fetching prediction:", error);
    // }
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f5f5f5"
      >
        <Paper elevation={3} sx={{ p: 4, width: 500, textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold">
            MLlib and Visualization Homework
          </Typography>
          <Typography variant="h6" mt={1}>
            Genre Prediction
          </Typography>
          <TextField
            multiline
            rows={5}
            fullWidth
            variant="outlined"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setShowChart(false);
            }}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePredict}
            sx={{ mt: 2 }}
          >
            Get Prediction
          </Button>
          <Typography variant="body2" mt={3}>
            {name}
          </Typography>
          {showChart && (
            <Box mt={4}>
              <Results data={genreData} />
            </Box>
          )}
        </Paper>
      </Box>
    </>
  );
};
