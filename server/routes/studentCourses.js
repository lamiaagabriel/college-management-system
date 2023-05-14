import express from "express";
import connection from "../server.js";
import db from "../utils/db/index.js"

const router = express.Router();
router.get("/:year/:semester/:ssn", async (req, res) => {
  const query = `select C.id as subjectID, C.name as subjectName, SC.Grade as Percentage from courses C, STU_COURSE SC, students S where S.ssn = ${req.params.ssn} and SC.Student_ID = ${req.params.ssn} and C.id = SC.Course_ID and C.year = ${req.params.year} and C.semester = ${req.params.semester};`;
  try {
    connection.query(query, (err, rows) => {
      if (err) throw err;
      else {
        res.status(200).json({
          results: rows,
          errors: null,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      results: null,
      errors: "courses Error",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const message = await db.createOne({
      table: "STU_COURSE",
      record: {
        Student_ID: req.body.studentid,
        Course_ID: req.body.courseid,
        Grade: req.body.studentgrade,
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

export default router;
