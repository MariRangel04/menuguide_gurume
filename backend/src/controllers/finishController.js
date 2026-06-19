import Finish from "../models/Finish.js"

export async function getTodayHighlight(req, res) {
  try {
    const finishes = await Finish.find()

    const dias = [
      "domingo",
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado"
    ]

    const hoje = dias[new Date().getDay()]

    const destaque = finishes.map(item => ({
      prato: item.prato,
      finalizacao: item[hoje],
      isToday: true
    }))

    res.json(destaque)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export async function getFinishesToday(req, res) {

  try {

    const finishes = await Finish.find()

    const dias = [
      "domingo",
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado"
    ]

    const hoje = dias[new Date().getDay()]

    const resultado = finishes.map(item => ({
      prato: item.prato,
      finalizacao: item[hoje]
    }))

    res.json(resultado)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}