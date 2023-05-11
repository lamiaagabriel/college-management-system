import express from "express"
import db from "../utils/db/index.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const courses = await db.findMany({ table: "courses" })
  res.status(200).json(courses)
})

export default router
