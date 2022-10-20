const fs = require("fs");
const warehousesModel = require("../models/warehousesModel");
const helpers = require("../utils/helpers");

const getSingleItem = (req, res) => {
  const requestedItemId = req.params.ItemID;
  const items = warehousesModel.getSingleItem(requestedItemId);
  res.status(200).json(items);
};

module.export = {
  getSingleItem,
};
