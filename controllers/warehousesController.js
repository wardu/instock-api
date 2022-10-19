const fs = require('fs');
const warehousesModel = require('../models/warehousesModel');
const helpers = require('../utils/helpers');

const getAllWarehouses = (req, res) => {
  const warehouses = warehousesModel.getAllWarehouses();
  console.log('im working');
  res.status(200).json(warehouses);
};

// PUT/EDIT a Warehouse
const editWarehouseDetails = (req, res) => {
  if (!req.body) {
    res.status(400).json('Error, fill in the form');
  }
  if (!req.params) {
    res.status(400).json('Error, please provide an ID');
  }
  const warehouses = warehousesModel.editWarehouseDetails(req.params, req.body);
  res.status(201).send(warehouses);
};

module.exports = { getAllWarehouses, editWarehouseDetails };
