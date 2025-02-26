const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const app = express();
const StudentRoute = require("./Routes/StudentRotes")
const TeacherRoute = require("./Routes/TeacherRoutes")
const documentRouter = require("./Routes/DocumentRoute")
const cors = require("cors")
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.mongourl).then(() => {
        console.log("mongo db connected successfully")
}).catch((error) => {
        console.log("there is " , error)
})

app.use(StudentRoute)
app.use(TeacherRoute)
app.use(documentRouter)




app.listen(4000,() => {console.log(`server is running port number ${process.env.port}`)
})