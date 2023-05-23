const express = require("express");
const route = express.Router();
const studentModel = require("../Models/studentModel");
const { sendResponse } = require("../Helper/helper");

route.get("/", async (req, res) => {
    try{
        const result = await studentModel.find();
        if(!result){
            res.send(sendResponse(false, null, "No Data Found")).status(404);
        }
        else{
            res.send(sendResponse(true, result)).status(200);
        }
    }
    catch(e){
        console.log(e);
        res.send(sendResponse(false)).status(400);
    }
});

route.get("/:id", (req, res) => {
    // res.send("Get Single Student Data");
    // try{

    // }
});

route.post("/", async (req, res) => {
    let { firstName, lastName, contact, email, password } = req.body
    try {

        let errArr = []
        if (!firstName) {
            errArr.push("Required : firstName")
        }
        if (!lastName) {
            errArr.push("Required : lastName")
        }
        if (!contact) {
            errArr.push("Required : contact")
        }
        if (!email) {
            errArr.push("Required : email")
        }
        if(!password){
            errArr.push("Required : password");
        }

        if (errArr.length > 0) {
            res.send(sendResponse(false, errArr, null, "Required All Fields")).status(400);
            return;

        }
        else {
            let obj = { firstName, lastName, contact, email, password }
            let Student = new studentModel(obj)
            await Student.save()
            if (!Student) {
                res.send(sendResponse(false, null, "internal Server Error")).status(400);

            }
            else {
                res.send(sendResponse(true, Student, "Saved Successfully")).status(200);
            }
        }
    } catch (e) {
        console.log(e);
        res.send(sendResponse(false, null, "Internal Server Error"));
    }
});

route.put("/:id", (req, res) => {
    res.send("Edit Student Data");
});

route.delete("/:id", (req, res) => {
    res.send("Delete Student Data");
});

module.exports = route;