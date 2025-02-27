const express = require("express")
const TeacherController = require("../controller/TeacherController")
const Routes = express.Router()


Routes.post("/create/teacher", TeacherController.CreateTeacher)
Routes.get("/read/teacher", TeacherController.ReadData)
Routes.get("/read/teacher/:id", TeacherController.SingleData)
Routes.put("/update/Teacher/:id", TeacherController.UpdateTeacher)
Routes.delete("/delete/Teacher/:id", TeacherController.DeletTeacher)
Routes.get("/totalteacher/Teacher", TeacherController.TotalTeacher)



module.exports = Routes