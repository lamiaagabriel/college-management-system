import express from "express"
import db from "../utils/db/index.js"
import { nanoid } from "nanoid"
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

router.post("/", async (req,res) => {
  console.log(req.body);
  const id = nanoid();
  let student = { id:id, ssn:req.body.ssn, name:req.body.name, email:req.body.email, phone_number:req.body.phone_number,
  address:req.body.address, image:req.body.image, fees:req.body.fees, academic_year:req.body.academic_year,
  gender:req.body.gender,date_of_birth:req.body.date_of_birth, department:req.body.department
 };
  const students = await db.createOne({ table: "students",record:student})
  res.status(200).json(students)
});

export default router
