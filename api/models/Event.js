const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        requried: true
      },
      label: {
          type: String,
          required: true
      },
      day: {
        type: Number,
        required: true
      },
      id: {
        type: Number,
        required: true
      }
    },
    { timestamps: true }
  );
  
module.exports = mongoose.model("Event", EventSchema);