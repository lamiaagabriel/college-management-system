import express from "express"
import cloudinary from "../utils/cloudinary.js"

const router = express.Router()

router.post("/", async (req, res) => {
  if (req.body) {
    try {
      const file = req.body
      console.log(file)

      const result = await cloudinary.uploader.upload(file, {
        upload_preset: "students",
      })

      res.status(200).json({
        status: true,
        data: result.public_id,
        message: "Inserted Successfully.",
        errors: null,
      })
    } catch (errors) {
      res.status(200).json({
        status: false,
        data: null,
        message: "Error while Uploading Image into cloudinary.",
        errors: "Image isn't uploaded into cloudinary.",
      })
    }
  } else {
    res.status(200).json({
      status: false,
      data: null,
      message: "No image to be uploaded.",
      errors: "Please, select an image first.",
    })
  }
})

export default router
