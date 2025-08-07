const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');

router.post('/', async (req, res) => {
  try {
    const newTool = new Tool(req.body);
    const saved = await newTool.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tools = await Tool.find();
    res.json(tools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
