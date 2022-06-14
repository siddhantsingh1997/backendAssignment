const express = require("express");

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Route Imports
const product = require("./routes/productRoutes");



app.use("/api/v1", product);



module.exports = app
