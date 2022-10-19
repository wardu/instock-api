const fs = require('fs');
const warehousesModel = require('../models/warehousesModel');
const helpers = require('../utils/helpers');

const getAllWarehouses = (req, res) => {
  const warehouses = warehousesModel.getAllWarehouses();
  console.log('im working');
  res.status(200).json(warehouses);
};

const editWarehouseDetails = (req, res) => {
  const warehouses = warehousesModel.getAllWarehouses();
  const id = req.params.warehouseID;

  let selectedWarehouseIndex = warehouses.findIndex(
    (warehouse) => warehouse.id === id
  );

  warehouses[selectedWarehouseIndex] = {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email,
    },
  };

  fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
  res.status(201).send(warehouses);
};

module.exports = { getAllWarehouses, editWarehouseDetails };
