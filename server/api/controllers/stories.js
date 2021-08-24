const express = require("express");
const router = express.Router();

const Story = require('../models/story');

// story index route
router.get("/", async (req, res) => {
    try {
      const stories = await Story.all;
      res.json({ stories });
    } catch (err) {
      res.status(500).json({ err });
    }
  });

  // Create story route
router.post("/", async (req, res) => {
    try {
      const story = await Story.create(req.body.title, req.body.authorName, req.body.story);
      res.json(story);
    } catch (err) {
      res.status(404).json({ err });
    }
  });


  module.exports = router;