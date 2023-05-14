import express from "express"
import db from "../utils/db/index.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const courses = await db.findMany({ table: "courses" })
  res.status(200).json(courses)
})

router.get("/:id", async (req, res) => {
  const courses = await db.findOne({ table: "courses",
  where : {id : req.params.id}})
  res.status(200).json(courses)
})

router.delete('/:ssn', async (req, res) => {
  let ssn = req.params?.ssn;
  if (ssn)
  {
    try {
      await db.deleteOne({
        table: "courses",
        where : {id : ssn}
      })
      const message = await db.deleteOne({
        table: "STU_COURSE",
        where : {Course_ID : ssn}
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
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const message = await db.createOne({
      table: "courses",
      record: {
        name: req.body.name,
        year: req.body.year,
        semester: req.body.semester,
        id : req.body.id,
        department : req.body.department,
      },
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
});

router.put("/", async (req, res) => {
  try {
    const message = await db.updateOne({
      table: "courses",
      values: {
        name: req.body.name,
        year: Number.parseInt(req.body.year),
        semester: Number.parseInt(req.body.semester),
        id : req.body.id,
        department : req.body.department,
      },
      where :{id:req.body.id}
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
});

export default router
