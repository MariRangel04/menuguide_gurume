import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB conectado")
})
.catch((err) => {
  console.log(err)
})

app.get("/", (req, res) => {
  res.send("API funcionando")
})

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta 3000")
})