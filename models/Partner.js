const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  phone: { type: String },
  message: { type: String, required: true },
  agree: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Partner", partnerSchema);
