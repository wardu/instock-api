const fs = require("fs");
const inventoriesModel = require("../models/inventoriesModel");
const helpers = require("../utils/helpers");

//get list of all inventory
const getAllInventories = (req, res) => {
  const inventories = inventoriesModel.getAllInventories();
  res.status(200).json(inventories);
};

// PUT/EDIT an Inventory Item

const editInventoryDetails = (req, res) => {
  if (!req.body) {
    res.status(400).json("Error, fill in the form");
  }
  if (!req.params) {
    res.status(400).json("Error, please provide an ID");
  }

  const inventory = inventoriesModel.editInventoryDetails(req.params, req.body);

  if (inventory) {
    res.status(201).json(inventory);
  } else {
    res.status(404).json({
      message: `Couldn't find inventory with ID ${req.params.inventoryId}`,
    });
  }
};

module.exports = {
  getAllInventories,
  editInventoryDetails,
};
