const router = require('express').Router();
const warehousesData = require('../data/warehouses.json');
const fs = require('fs');
const {
  getAllWarehouses,
  addWarehouse,
  editWarehouseDetails,
} = require('../controllers/warehousesController');

router.get('/', getAllWarehouses);
// router.get("/:warehouseID");
// router.get("/:warehouseID/inventory");

router.put('/:warehouseID', editWarehouseDetails);

// router.delete("/:warehouseID");
router.post('/', addWarehouse);
module.exports = router;
