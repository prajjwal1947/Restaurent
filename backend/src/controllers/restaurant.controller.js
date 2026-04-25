const Restaurant = require("../models/restaurant.model");

exports.createRestaurant = async (req, res) => {
  try {
    const { name, owner, address, phone } = req.body;

    const restaurant = await Restaurant.create({
      name,
      owner,
      address,
      phone
    });

    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate("owner");
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};