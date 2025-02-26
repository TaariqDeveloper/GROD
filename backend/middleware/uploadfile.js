const multer = require("multer")


const uploadfile = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null,"document")
        },
        filename: (req, file, cb) => {
                cb(null, file.originalname)
        }
})


const saveFile = multer({
        storage: uploadfile
})

module.exports = saveFile