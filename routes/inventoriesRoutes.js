const router = require("express").Router();
const fs = require("fs");
const { getSingleItem } = require("../controllers/inventoriesController");
const { deleteInventoryItem } = require("../controllers/inventoriesController");

// router.get("/", getAllInventory);
router.get("/:itemId", getSingleItem);

// router.put("/:itemId");
router.delete("/:itemId", deleteInventoryItem);
// router.post("/");

module.exports = router;
