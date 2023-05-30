const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();


const studentRouter = require("./Routes/studentRouter");
const teacherRouter = require("./Routes/teacherRouter");
const instituteRouter = require("./Routes/institueRouter");
const courseRouter = require("./Routes/courseRouter");
const userRouter = require("./Routes/UserRouter");

const mongoose = require("mongoose");


app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/institute", instituteRouter);
app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Database is connected successfully and Server is listening on this port 5000");
    })
})

