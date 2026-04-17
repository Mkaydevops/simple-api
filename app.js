const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Mkpoikana Udoekong",
    email: "mekpenyong32@gmail.com",
    github: "https://github.com/Mkaydevops"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
