import express from "express"
import Dish from "../models/Dish.js"

const router = express.Router()

router.post("/", async (req, res) => {

  try {

    const prato = await Dish.create(req.body)

    res.status(201).json(prato)

  } catch (error) {

    res.status(500).json({
      erro: error.message
    })

  }

})

router.get("/", async (req, res) => {

  try {

    const pratos = await Dish.find()

    res.json(pratos)

  } catch (error) {

    res.status(500).json({
      erro: error.message
    })

  }

})

export default router