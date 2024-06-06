const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Color must have its name'],
  },
  colors: {
    type: Array,
    required: [true, 'Pallete must have colors'],
  },
  types: {
    type: String,
  },
});

const pallete = mongoose.model('Color', colorSchema);

module.exports = pallete;
