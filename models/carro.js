const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  preco: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Carro', carroSchema);
