const express = require("express");
const router = express.Router();
const Song = require("../models/Songs");

router.get("/", async (req, res) => {
  try {
    const songs = await Song.getAll();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { artist, song, photo } = req.body;
  try {
    const id = await Song.create(artist, song, photo);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const success = await Song.delete(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/vote', async (req, res) => {
  try {
    const { id } = req.params;

    const success = await Song.vote(id);
    if (success) {
      res.status(200).json({ message: 'Vote counted successfully' });
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    console.error('Error voting for song:', error);
    res.status(500).json({ message: 'Error voting for song' });
  }
});


module.exports = router;
