
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },

  // ⚠️ TODO: Temporary Base64 image storage (MVP only)
  // Replace this with cloud storage (Cloudinary / S3) and store only image URL
  // Reason:
  // - Base64 increases size (~33%)
  // - Slows DB queries
  // - Not scalable
  image: {
    data: String,
    contentType: String
  },

  description: String,
  available: { type: Boolean, default: true }

}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuItemSchema);