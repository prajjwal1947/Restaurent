const MenuItem = require("../models/menuItem.model");
const Restaurant = require("../models/restaurant.model");
const Category = require("../models/category.model");

// Create Menu Item
exports.createMenuItem = async (req, res) => {
  try {
    const {
      name,
      price,
      restaurant,
      category,
      imageBase64,
      contentType,
      description
    } = req.body;

    const item = await MenuItem.create({
      name,
      price,
      restaurant,
      category,
      description,
      image: {
        data: imageBase64,
        contentType: contentType
      }
    });

    res.status(201).json({
      message: "Menu item created",
      item
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get Menu by Restaurant
exports.getMenuByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    const menu = await MenuItem.find({ restaurant: restaurantId })
      .populate("category");

    res.json(menu);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};