import express from "express"
import db from "../utils/db/index.js"
import { nanoid } from "nanoid"

const router = express.Router()

router.get("/", async (req, res) => {
  const professors = await db.findMany({ table: "professors" })
  res.status(200).json(professors)
})

router.get("/", async (req, res) => {
  const student = await db.findOne({ table: "professors" , where:req.params.ssn})
  res.status(200).json(student)
});

router.post("/", async (req, res) => {
  try {
    const message = await db.createOne({
      table: "professors",
      record: {
        id: nanoid(),
        ssn: req.body.ssn,
        name: req.body.fullname,
        email: req.body.PersonEmail,
        phone_number: req.body.PhoneNumber,
        address: req.body.Address,
        image: req.body.PersonalPhoto,
        gender: req.body.PersonGender,
        phd: req.body.phd,
        master: req.body.master,
        university: req.body.university,
        department: req.body.department,
        date_of_birth: req.body.DOB,
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
})

router.delete('/:ssn', async (req, res) => {
  let ssn = req.params?.ssn;
  if (ssn)
  {
    //deleting from passwords and professors table
    try {
      await db.deleteOne({
        table: "PASSWORDS",
        where : {SSN : ssn}
      })
      const message = await db.deleteOne({
        table: "professors",
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
});

export default router
