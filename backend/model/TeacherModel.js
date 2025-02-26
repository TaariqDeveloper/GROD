const mongoose = require("mongoose")
const TeacherSchema = mongoose.Schema({
        Id: {
                type: Number,
                require:true
        },
        FullName: {
                type: String,
                require: true
        },
        SchoolName: {
                type: String,
                require:true,
        },
        JopTitle: {
                type: String,
                require: true
        },
        Email: {
                type: String,
                require:true,
        },
        Phone: {
                type: String,
                require:true
        },
        Gender: {
                type: String,
                require:true
        }
},{ timestamps: true })


module.exports = mongoose.model("Teacher" , TeacherSchema)