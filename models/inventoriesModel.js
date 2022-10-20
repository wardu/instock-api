const { request } = require("express");
const helpers = require("../utils/helpers");
const crypto = require("crypto");
const fs = require("fs");

const getAllInventories = () => {
  const inventories = helpers.getInventories();
  return inventories;
};

module.exports = {
  getAllInventories,
};
