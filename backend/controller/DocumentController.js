const DocumentModel = require('../model/DocumentModel')

//Craete Data
const createData = async(req, res) => {
        const newData =  DocumentModel({
                title: req.body.title,
                Description: req.body.Description,
                document: req.file.filename
        })
        const SaveData = await newData.save();
        if (SaveData) {
                res.send(SaveData)
        }
}




module.exports = {createData}