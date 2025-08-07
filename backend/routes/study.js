const express = require('express');
const router = express.Router();
const Study = require('../models/StudyMaterial');

router.post('/', async (req, res) => {
  try {
    const newItem = new Study(req.body);
    const saved = await newItem.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const materials = await Study.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
