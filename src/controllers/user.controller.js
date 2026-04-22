const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const user = await User.create({ name, phone });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};