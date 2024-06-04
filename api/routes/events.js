const router = require("express").Router();
const User = require("../models/User");
const Event = require("../models/Event");

//CREATE EVENT
router.post("/", async (req, res) => {
    const newEvent = new Event(req.body);
    try {
      const savedEvent = await newEvent.save();
      res.status(200).json(savedEvent);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE EVENT
router.put("/:id", async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (event.username === req.body.username) {
        try {
          const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedEvent);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your event!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE EVENT
router.delete("/:id", async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      try {
        await event.delete();
        res.status(200).json("Event has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET EVENT
router.get("/:id", async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL EVENTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
      let events;
      if (username) {
        events = await Event.find({ username });
      } else {
        events = await Event.find();
      }
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;