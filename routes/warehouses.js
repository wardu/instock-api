const router = require("express").Router();
const warehouseData = require("../data/warehouses.json");
const fs = require("fs");

router.get("/warehouses", (req, res) => {
  console.log("/warehouses is working");
  res.status(200).json("/warehouses is active");
});
