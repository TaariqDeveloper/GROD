const teacherModel = require("../model/TeacherModel")


//create data
const CreateTeacher = async (req, res) => {
        const NewData =  teacherModel(req.body)
        const saveData =  await NewData.save();
        if (saveData) {
                res.send(saveData)
        }
}

//read the all data

const ReadData = async (req, res) => {
        const perPage = req.query.page || 0
        const numberOfTeacgers= 1
        const Read = await teacherModel.find().skip(numberOfTeacgers*perPage).limit(numberOfTeacgers)
        if (Read) {
                res.send(Read)
        }
}

// read single data

const SingleData = async(req, res) => {
        const Single = await teacherModel.findOne({ _id: req.params.id })
        if (Single) {
                res.send(Single)
        }
}



// update the data

const UpdateTeacher =async(req, res) => {
        const updateData = await teacherModel.updateOne({ _id: req.params.id }, { $set: req.body })
        if (updateData) {
                res.send("updated successfully")
        }
}


const DeletTeacher = async (req, res) => {
        const DeleteData = await teacherModel.deleteOne({ _id: req.params.id })
        if (DeletTeacher) {
                res.send("deleted successfully")
        }
}



// display all teachers 
const TotalTeacher = async (req, res) => {
        const total = await teacherModel.find().countDocuments()
        if (total) {
                res.send({total})
        }
}
module.exports = {CreateTeacher, ReadData, SingleData, UpdateTeacher , DeletTeacher , TotalTeacher }