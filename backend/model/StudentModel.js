const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
        fullName: {
                type: String,
                require: true
        },
        Address: {
                type: String,
                require: true
        },
        Gender: {
                type: String,
                require: true
        },
        Class: {
                type: String,
                require: true
        },
        Phone: {
                type: String,
                require: true 
        }
}, { timestamps: true })


module.exports = mongoose.model("StudentModel" , studentSchema)