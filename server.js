const cors = require("cors");
const express = require("express");
const app = express();
const router = require("express").Router();
const warehouseRoutes = require("./routes/warehouses");

require("dotenv").config();

const port = process.env.PORT;
app.use(express.json());

app.use(cors());

app.use("/warehouses", warehouseRoutes);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
