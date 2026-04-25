const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  tableNumber: { type: Number, required: true },
  qrCode: String // store URL if needed
}, { timestamps: true });

tableSchema.index({ restaurant: 1, tableNumber: 1 }, { unique: true });
module.exports = mongoose.model("Table", tableSchema);