const router = require("express").Router();
const warehousesData = require("../data/inventories.json");
const fs = require("fs");
const {
  getAllInventories,
  editInventoryDetails,
} = require("../controllers/inventoriesController");

router.get("/", getAllInventories);

// router.get("/:itemId");

router.put("/:inventoryId", editInventoryDetails);
// router.delete("/:itemId");
// router.post("/");

module.exports = router;
