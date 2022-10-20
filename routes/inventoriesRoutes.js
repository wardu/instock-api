const router = require("express").Router();
const warehousesData = require("../data/inventories.json");
const fs = require("fs");
const { getAllInventories } = require("../controllers/inventoriesController");

router.get("/", getAllInventories);

// router.get("/:itemId");

// router.put("/:itemId");
// router.delete("/:itemId");
// router.post("/");

module.exports = router;
