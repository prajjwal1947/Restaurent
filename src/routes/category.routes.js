const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategoriesByRestaurant
} = require("../controllers/category.controller");

// Create category
router.post("/", createCategory);

// Get categories of a restaurant
router.get("/:restaurantId", getCategoriesByRestaurant);

module.exports = router;