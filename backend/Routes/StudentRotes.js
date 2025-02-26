const express = require("express")
const studentController = require("../controller/StudentController")
const Routes = express.Router()


Routes.post("/create/student", studentController.CreatStudent)
Routes.get("/read/student", studentController.ReadStudent)
Routes.get("/read/single/:id", studentController.ReadSingleData) 
Routes.put("/update/student/:id", studentController.UpdateStudent)
Routes.put("/update/student/single/:id", studentController.UpdateStudent)
Routes.delete("/delete/student/:id", studentController.DeletStudent)


module.exports = Routes