const router = require("express").Router();
const warehouseData = require("../data/warehouses.json");
const fs = require("fs");

router.get("/", (req, res) => {
  console.log("/warehouses is working");
  res.status(200).json("/warehouses is active");
});

router.delete("/:id", (req, res) => {
  console.log("Delete warehouse");
  res.status(200).json("Delete warehouse is working");
});

module.exports = router;
