const express = require('express');
const router = express.Router();
const Repository = require('../models/Repository');

router.post('/', async (req, res) => {
  try {
    const newRepo = new Repository(req.body);
    const saved = await newRepo.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const repos = await Repository.find();
    res.json(repos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
