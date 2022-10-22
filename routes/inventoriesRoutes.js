const router = require("express").Router();
const warehousesData = require("../data/inventories.json");
const fs = require("fs");
const {
  getAllInventories,
  editInventoryDetails,
  getSingleItem,
  deleteInventoryItem,
} = require("../controllers/inventoriesController");

router.get("/", getAllInventories);
router.get("/:itemId", getSingleItem);
router.delete("/:itemId", deleteInventoryItem);
router.put("/:inventoryId", editInventoryDetails);
// router.post("/");

module.exports = router;
