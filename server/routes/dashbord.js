import express from "express"
import connection from "../server.js";

const router = express.Router()

router.get("/", async (req, res) => {
  const query = `select 
  (select count(*) from students) as studentsnum,
  (select count(*) from professors) as professorsnum,
  (select count(*) from courses) as coursesnum`;
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


export default router
