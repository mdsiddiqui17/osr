const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new image
router.post('/', async (req, res) => {
  const newImage = new Gallery({
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  });

  try {
    const savedImage = await newImage.save();
    res.json(savedImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
