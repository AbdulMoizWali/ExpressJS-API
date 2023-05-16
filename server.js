// const fs = require("fs");

// let courses = [
//     {
//         id: 1,
//         name: 'ABC',
//     },
//     {
//         id: 2,
//         name: 'ABC',
//     },
//     {
//         id: 3,
//         name: 'ABC',
//     },
//     {
//         id: 4,
//         name: 'ABC',
//     }
// ]

// const express = require("express");

// const app = express();

// app.get("/courses", (req, res)=>{
// res.json(courses)
// });

// app.get("/courses/:id", (req, res) => {
//     let id = req.params.id
//     let obj = courses.find(x=>x.id == id);
//     if (obj){
//         res.send(obj).status(200);
//     }
//     else{
//         res.send("No Data Found").status(404);
//     }
// });

// app.post("/courses", (req, res)=>{ });
// app.put("/courses/:id", (req, res)=>{ });
// app.delete("/courses/:id", (req, res)=>{ });

    

// app.listen(5000);


const express = require('express');

const app = express();

const studentRouter = require("./Routes/studentRouter");
const teacherRouter = require("./Routes/teacherRouter");
const instituteRouter = require("./Routes/institueRouter");

require("dotenv").config();
const mongoose = require("mongoose");


app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/institute", instituteRouter);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Database is connected successfully and Server is listening on this port 5000");
    })
})

