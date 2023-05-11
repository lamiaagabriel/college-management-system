import express from "express"
import db from "../utils/db/index.js"
import { nanoid } from "nanoid"

const router = express.Router()

router.get("/", async (req, res) => {
  const professors = await db.findMany({ table: "professors" })
  res.status(200).json(professors)
})

// router.get('/',
//   async (req, res) => {
//     try {
//       connection.query('SELECT * FROM PROFESSOR', (err, rows) => {
//         if (err) throw err;

//         return res.status(200).json({
//           results: rows,
//           errors: null,
//         });
//       });
//     } catch (error) {
//       res.status(500).json({
//         results: null,
//         errors: 'Error in finding professors.',
//       });
//     }
//   }
// );

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

// connection.query(query, (err, rows) => {
//   if (err) throw err;
// });

//   console.log(req.body);
// res.status(200).json({
//   results: 'Inserted Successfully.',
//   errors: null,
// });
// } catch (error) {
//   console.log(error);
//   res.status(500).json({
//     results: null,
//     errors: 'Professors Error',
//   });
// }
// });

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


  // try {
    // const professorquery = `Delete from PROFESSOR Where SSN = "${ssn}"`
    // connection.query(professorquery, (err, rows) => {
    //   if (err) throw err;
    // });

  //   const Passwordquery = `Delete from PASSWORDS Where SSN = "${ssn}" `
  //       connection.query(Passwordquery, (err, rows) => {
  //     if (err) console.log(err);
  //   });

  //   res.status(200).json({
  //     results: 'Deleted Successfully.',
  //     errors: null,
  //   });

  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({
  //     results: null,
  //     errors: 'Professors Error',
  //   });
  // }
});

export default router
