const { request } = require("express");
const helpers = require("../utils/helpers");
const crypto = require("crypto");
const fs = require("fs");

const getAllInventories = () => {
  const inventories = helpers.getInventories();
  return inventories;
};

// const getInventoryItem = (id) => {
//   const inventories = helpers.getSelectedInventory(id);
//   return inventories;
// };

const editInventoryDetails = (params, body) => {
  const inventories = helpers.getInventories();
  const warehouses = helpers.getWarehouses();
  const id = params.inventoryId;
  const selectedInventoryIndex = helpers.getSelectedInventory(id);
  const selectedWarehouse = warehouses.find((warehouse) => {
    return warehouse.name === body.warehouseName;
  });

  console.log(selectedWarehouse);

  console.log(selectedWarehouse.name);

  if (selectedInventoryIndex >= 0) {
    inventories[selectedInventoryIndex] = {
      id: id,
      warehouseName: selectedWarehouse.name,
      warehouseID: selectedWarehouse.id,
      itemName: body.itemName,
      description: body.description,
      category: body.category,
      status: body.status,
      quantity: body.quantity,
    };

    console.log(inventories[selectedInventoryIndex]);

    fs.writeFileSync("./data/inventories.json", JSON.stringify(inventories));

    return inventories[selectedInventoryIndex];
  } else {
    // We couldn't find the inventory item in the JSON file
    return false;
  }
};

module.exports = {
  getAllInventories,
  editInventoryDetails,
};
