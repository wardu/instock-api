const fs = require("fs");
const warehousesModel = require("../models/warehousesModel");
const helpers = require("../utils/helpers");

const getAllWarehouses = (req, res) => {
  const warehouses = warehousesModel.getAllWarehouses();
  console.log("im working");
  res.status(200).json(warehouses);
};

module.exports = { getAllWarehouses };
