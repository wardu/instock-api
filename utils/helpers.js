const fs = require("fs");

const getInventories = () => {
  const fileContent = fs.readFileSync("./data/inventories.json");
  return JSON.parse(fileContent);
};

const getWarehouses = () => {
  const fileContent = fs.readFileSync("./data/warehouses.json");
  return JSON.parse(fileContent);
};

module.exports = { getWarehouses, getInventories };
