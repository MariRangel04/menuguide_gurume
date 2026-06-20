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

  imagem: {
    type: String
  },

  categoria: {
    type: String,
    required: true
  },

  ingredientes: {
    type: [String],
    default: []
  },

  alergenicos: {
    type: [String],
    default: []
  },

  molhos: {
    type: [String],
    default: []
  },

  finalizacoes: {
    type: [String],
    default: []
  }

})

export default mongoose.model("Dish", dishSchema)