const { request } = require("express");
const helpers = require("../utils/helpers");
const crypto = require("crypto");
const fs = require("fs");

const getAllWarehouses = () => {
  const warehouses = helpers.getWarehouses();
  return warehouses;
};

module.exports = { getAllWarehouses };
