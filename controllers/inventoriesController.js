const fs = require("fs");
const inventoriesModel = require("../models/inventoriesModel");
const helpers = require("../utils/helpers");

const getSingleItem = (req, res) => {
  console.log(req.params.itemId);
  const requestedItemId = req.params.itemId;
  const items = inventoriesModel.getSingleItem(requestedItemId);
  res.status(200).json(items);
};

const deleteInventoryItem = (req, res) => {
  if (!req.param) {
    res.status(400).json("Error, you must provide a valid item ID");
  }

  const inventories = inventoriesModel.deleteInventoryItem(req.params);
  res.status(204).json(inventories);
};

module.exports = { deleteInventoryItem, getSingleItem };
