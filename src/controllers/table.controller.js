const Table = require("../models/table.model");
const QRCode = require("qrcode");

exports.createTable = async (req, res) => {
  try {
    const { restaurant, tableNumber } = req.body;

    if (!restaurant || !tableNumber) {
      return res.status(400).json({
        message: "restaurant and tableNumber required"
      });
    }

    // ✅ Create table
    const table = await Table.create({
      restaurant,
      tableNumber
    });

    // ✅ Generate QR URL
    const url = `http://192.168.0.5:3000/?restaurant=${restaurant}&table=${table._id}`;

    // ✅ Convert to QR image (base64)
    const qrCode = await QRCode.toDataURL(url);

    // (optional) save QR in DB
    table.qrCode = qrCode;
    await table.save();

    res.status(201).json({
      message: "Table created",
      table,
      qrCode
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};