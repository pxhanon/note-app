const router = require("express").Router();
const User = require("../models/User");
const Note = require("../models/Note");

//CREATE NOTE
router.post("/", async (req, res) => {
  const newNote = new Note(req.body);
  try {
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE NOTE
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note.username === req.body.username) {
      try {
        const updatedNote = await Note.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedNote);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
    
      const note = await Note.findById(req.params.id);

      try {
        await note.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }
});
  
//GET POST
  router.get("/:id", async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.status(200).json(note);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
//GET ALL POSTS
  router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
      let notes;
      if (username) {
        notes = await Note.find({ username });
      } else {
        notes = await Note.find();
      }
      res.status(200).json(notes);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;