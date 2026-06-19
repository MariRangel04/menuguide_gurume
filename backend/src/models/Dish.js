import mongoose from "mongoose"

const dishSchema = new mongoose.Schema({


  imagem: {
  type: String
},

ingredientes: [{
  type: String
}],

alergenicos: [{
  type: String
}],

molhos: [{
  type: String
}],

finalizacao: [{
  type: String
}],
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
    required: true,
    enum: [
      "Entradas",
      "Brisas",
      "Sashimi",
      "Sushi",
      "Rolls",
      "Combinados",
      "VegMê",
      "Sobremesas",
      "Bebidas"
    ]
  }

})

export default mongoose.model("Dish", dishSchema)