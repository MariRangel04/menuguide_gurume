import express from "express"
import {
  getFinishesToday,
  getTodayHighlight
} from "../controllers/finishController.js"

const router = express.Router()

router.get("/", getFinishesToday)

router.get("/highlight", getTodayHighlight)

export default router