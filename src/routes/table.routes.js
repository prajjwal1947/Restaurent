const express = require("express");
const router = express.Router();

const { createTable } = require("../controllers/table.controller");

router.post("/", createTable);

module.exports = router;