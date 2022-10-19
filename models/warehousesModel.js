const { request } = require('express');
const helpers = require('../utils/helpers');
const crypto = require('crypto');
const fs = require('fs');

const getAllWarehouses = () => {
  const warehouses = helpers.getWarehouses();
  return warehouses;
};

const editWarehouseDetails = (params, body) => {
  const warehouses = helpers.getWarehouses();
  const id = params.warehouseID;

  let selectedWarehouseIndex = warehouses.findIndex(
    (warehouse) => warehouse.id === id
  );

  warehouses[selectedWarehouseIndex] = {
    id: id,
    name: body.name,
    address: body.address,
    city: body.city,
    country: body.country,
    contact: {
      name: body.contact.name,
      position: body.contact.position,
      phone: body.contact.phone,
      email: body.contact.email,
    },
  };

  fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
  return warehouses;
};

module.exports = { getAllWarehouses, editWarehouseDetails };
