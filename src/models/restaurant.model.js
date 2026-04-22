const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  address: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model("Restaurant", restaurantSchema);