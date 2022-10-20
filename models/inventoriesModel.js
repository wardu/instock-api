const { request } = require("express");
const helpers = require("../utils/helpers");
const crypto = require("crypto");
const fs = require("fs");

const deleteInventoryItem = (params) => {
  const inventoryItems = helpers.getInventories();

  const updatedInventory = inventoryItems.filter(
    (item) => params.itemId !== item.id
  );

  fs.writeFileSync("./data/inventories.json", JSON.stringify(updatedInventory));
  return updatedInventory;
};

module.exports = { deleteInventoryItem };
