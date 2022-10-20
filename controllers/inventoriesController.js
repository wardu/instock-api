const fs = require("fs");
const inventoriesModel = require("../models/inventoriesModel");
const helpers = require("../utils/helpers");

//get list of all inventory
const getAllInventories = (req, res) => {
  const inventories = inventoriesModel.getAllInventories();
  res.status(200).json(inventories);
};

module.exports = {
  getAllInventories,
};
