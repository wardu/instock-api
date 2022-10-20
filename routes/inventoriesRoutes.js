const router = require("express").Router();
const fs = require("fs");
const { deleteInventoryItem } = require("../controllers/inventoriesController");

// router.get("/", getAllInventory);
// router.get("/:itemId");

// router.put("/:itemId");
router.delete("/:itemId", deleteInventoryItem);
// router.post("/");

module.exports = router;
