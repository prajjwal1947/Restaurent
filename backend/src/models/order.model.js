const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true
  },
  items: [
    {
      menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
      },
      name: String,
      price: Number,
      qty: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "preparing", "served", "completed"],
    default: "pending"
  }
}, { timestamps: true });

orderSchema.index({ restaurant: 1, createdAt: -1 });

module.exports = mongoose.model("Order", orderSchema);