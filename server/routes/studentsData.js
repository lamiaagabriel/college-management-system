import express from "express";
import db from "../utils/db/index.js";

const router = express.Router();

router.get("/:ssn", async (req, res) => {
  const students = await db.findMany({ table: "students", where: {
    ssn : req.params.ssn
  } });
  res.status(200).json(students);
});

export default router;
