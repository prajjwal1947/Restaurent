const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },

  phone: { 
    type: String, 
    required: true, 
    unique: true,
    match: /^[0-9]{10}$/ // basic 10-digit validation
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);