import mongoose from "mongoose"

const dishSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  },

  preco: {
    type: Number,
    required: true
  },

  categoria: {
    type: String,
    required: true
  }

})

export default mongoose.model("Dish", dishSchema)