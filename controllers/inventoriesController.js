const fs = require("fs");
const inventoriesModel = require("../models/inventoriesModel");
const helpers = require("../utils/helpers");

const deleteInventoryItem = (req, res) => {
  if (!req.param) {
    res.status(400).json("Error, you must provide a valid item ID");
  }

  const inventories = inventoriesModel.deleteInventoryItem(req.params);
  res.status(204).json(inventories);
};

module.exports = { deleteInventoryItem };
