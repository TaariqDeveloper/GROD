const StudentModel = require("../model/StudentModel")

//create data
const CreatStudent = async (req, res) => {
        const NewData =  StudentModel(req.body)
        const saveData =  await NewData.save();
        if (saveData) {
                res.send(saveData)
        }
}



//Read Data
const ReadStudent = async (req, res) => {
        const perPage = req.query.pages || 0
        const NumberOfStudents = 2
        const ReadData = await StudentModel.find().skip(NumberOfStudents*perPage).limit(NumberOfStudents)
        if (ReadData) {
                res.send(ReadData)
        }
        
}

// Read By one person

const ReadSingleData = async (req, res) => {
        const SingleData = await StudentModel.findOne({ _id: req.params.id })
        if (SingleData) {
                res.send(SingleData)
        }
}


// update the data

const UpdateStudent = async(req, res) => {
        const updateData = await StudentModel.updateOne({ _id: req.params.id }, { $set: req.body })
        if (updateData) {
                res.send("updated successfully")
        }
}


//delete student
const DeletStudent = async (req, res) => {
        const DeleteData = await StudentModel.deleteOne({ _id: req.params.id })
        if (DeleteData) {
                res.send("deleted successfully")
        }
}
        




module.exports = {CreatStudent , ReadStudent, ReadSingleData, UpdateStudent, DeletStudent}