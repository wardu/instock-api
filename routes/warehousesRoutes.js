const router = require("express").Router();
const warehousesData = require("../data/warehouses.json");
const fs = require("fs");
const { getAllWarehouses } = require("../controllers/warehousesController");

router.get("/", getAllWarehouses);
// router.get("/:warehouseID");
// router.get("/:warehouseID/inventory");

// router.put("/:warehouseID");
// router.delete("/:warehouseID");
// router.post("/:warehouseID");
module.exports = router;
