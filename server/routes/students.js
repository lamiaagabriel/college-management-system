import express from "express"
import db from "../utils/db/index.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const students = await db.findMany({ table: "students" })
  res.status(200).json(students)
})

router.delete('/:ssn', async (req, res) => {
  let ssn = req.params?.ssn;
  if (ssn)
  {
    //deleting from passwords and students table
    try {
      await db.deleteOne({
        table: "PASSWORDS",
        where : {SSN : ssn}
      })
      const message = await db.deleteOne({
        table: "students",
        where : {ssn : ssn}
      })
      res.status(200).json({
        results: message,
        errors: null,
      })
    } catch (err) {
      res.status(500).json({
        results: err.message,
        errors: null,
      })
    }
  }
})

export default router
