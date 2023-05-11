import express from "express"
import db from "../utils/db/index.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const students = await db.findMany({ table: "students" })
  res.status(200).json(students)
})

export default router
