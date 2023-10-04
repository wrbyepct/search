// npm install the following
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

// Allowed domain 
app.use(cors({ origin: "http://127.0.0.1:5500" }));

const apiKey = process.env.GOOGLE_SEARCH_API;
const cx = process.env.CX;

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
