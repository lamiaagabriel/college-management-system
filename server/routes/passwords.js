import express from "express";
import connection from "../server.js";

const router = express.Router();
router.get("/:ssn/:pass", async (req, res) => {
  const query = `select * from PASSWORDS where SSN = '${req.params.ssn}' and PASSWORD = '${req.params.pass}';`;
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
      errors: "Error in finding data within Database.",
    });
  }
});

export default router;
