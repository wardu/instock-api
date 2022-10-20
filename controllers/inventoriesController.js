const fs = require("fs");
const inventoriesModel = require("../models/inventoriesModel");
const helpers = require("../utils/helpers");

const getSingleItem = (req, res) => {
  console.log(req.params.itemId);
  const requestedItemId = req.params.itemId;
  const items = inventoriesModel.getSingleItem(requestedItemId);
  res.status(200).json(items);
};

module.exports = {
  getSingleItem,
};
