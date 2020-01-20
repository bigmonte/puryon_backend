const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
      playername: {
      type: String,
      required: true
    },
      kills: {
          type: Number,
          required: false
      },
      deaths: {
          type: Number,
          required: false
      },
    description: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
