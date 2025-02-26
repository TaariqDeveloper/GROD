const express = require("express")
const documentController = require("../controller/DocumentController")
const uploadFile = require("../middleware/uploadfile")



const Route = express.Router()

Route.post("/create/document", uploadFile.single("document"), documentController.createData)

module.exports = Route