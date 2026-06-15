import express from "express"
import User from "../models/User.js"

const router = express.Router()

router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({
        message: "Usuário já existe"
      })
    }

    const user = await User.create({
      name,
      email,
      password,
      role
    })

    res.status(201).json(user)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

})

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      })
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Senha incorreta"
      })
    }

    res.json({
      message: "Login realizado com sucesso",
      user
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

})

export default router