const mongoose = require("mongoose")
const DocumentSchema = mongoose.Schema({
        Title: {
                type: String,
                require: true
        },
        Description: {
                type: String,
                require: true
        },
        document: {
                type: String,
                require: true
        }
}, {
        timestamps: true
})

module.exports = mongoose.model("document" ,DocumentSchema)