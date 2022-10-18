const cors = require('cors');
const express = require('express');
const fs = require('fs');
const router = require('express').Router();

const warehousesRoutes = require('./routes/warehousesRoutes');
const inventoryRoutes = require('./routes/inventoriesRoutes');

const app = express();
require('dotenv').config();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use('/warehouses', warehousesRoutes);
app.use('/inventory', inventoryRoutes);

app.put('/warehouses/:id/edit', (req, res) => {
  const id = req.params.id;

  const data = fs.readFileSync('./data/warehouses.json');
  const warehouseData = JSON.parse(data);

  let selectedWarehouse = warehouseData.find(
    (warehouse) => warehouse.id === req.params.id
  );
  let selectedWarehouseIndex = warehouseData.findIndex(
    (warehouse) => warehouse.id === req.params.id
  );

  selectedWarehouse = {
    name: req.query.name,
    address: req.query.address,
    city: req.query.city,
    country: req.query.country,
  };

  warehouseData[id]['name'] = req.query.name;
  warehouseData[id]['address'] = req.query.address;
  warehouseData[id]['city'] = req.query.city;
  warehouseData[id]['country'] = req.query.country;

  //contacts are nested within the data structure

  warehouseData[id]['contact']['name'] = req.query.contactName;
  warehouseData[id]['contact']['position'] = req.query.contactPosition;
  warehouseData[id]['contact']['phone'] = req.query.contactPhone;
  warehouseData[id]['contact']['email'] = req.query.contactEmail;

  fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouseData));
  res.status(201).send(warehouseData);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
