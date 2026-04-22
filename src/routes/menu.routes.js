const express = require("express");
const router = express.Router();

const {
  createMenuItem,
  getMenuByRestaurant
} = require("../controllers/menu.controller");

// Create menu item
router.post("/", createMenuItem);

// Get menu by restaurant
router.get("/:restaurantId", getMenuByRestaurant);

module.exports = router;