import mongoose from "mongoose"

const finishSchema = new mongoose.Schema({

  prato: {
    type: String,
    required: true
  },

  categoria: {
    type: String,
    required: true
  },

  segunda: String,
  terca: String,
  quarta: String,
  quinta: String,
  sexta: String,
  sabado: String,
  domingo: String

})

export default mongoose.model(
  "Finish",
  finishSchema
)