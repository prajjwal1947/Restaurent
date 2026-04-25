const Category = require("../models/category.model");
const Restaurant = require("../models/restaurant.model");

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const { name, restaurant } = req.body;

    // ✅ Validation
    if (!name || !restaurant) {
      return res.status(400).json({
        message: "Category name and restaurant are required"
      });
    }

    // ✅ Check restaurant exists
    const existingRestaurant = await Restaurant.findById(restaurant);
    if (!existingRestaurant) {
      return res.status(404).json({
        message: "Restaurant not found"
      });
    }

    // ✅ Create category
    const category = await Category.create({
      name,
      restaurant
    });

    res.status(201).json({
      message: "Category created successfully",
      category
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Categories by Restaurant
exports.getCategoriesByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    const categories = await Category.find({
      restaurant: restaurantId
    });

    res.json(categories);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};