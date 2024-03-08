
const mongoose = require('mongoose')
const moment = require("moment");
const feedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
        maxLength: [15, "Name must be less than 15 characters"],
      },
      message: {
        type: String,
        required: [true, "Please enter some message!"],
        trim: true,
        maxLength: [40, "Message must be less than 40 characters"],
      },
      date: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
          return moment(createdAt).format("MMMM Do YYYY ");
        },
      },
    },
    { timestamps: true }
  );

const Feeds = mongoose.model('Feed', feedSchema);

module.exports = Feeds;