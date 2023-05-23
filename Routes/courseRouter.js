const express = require("express");
const route = express.Router();
const courseModel = require("../Models/courseModel");
const { sendResponse } = require("../Helper/helper");

route.get("/", async (req, res) => {
    try{
        const result = await courseModel.find();
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
    // res.send("Get Single Course Data");
    // try{

    // }
});

route.post("/", async (req, res) => {
    let { name, duration, fees, shortName } = req.body
    try {

        let errArr = []
        if (!name) {
            errArr.push("Required : name")
        }
        if (!duration) {
            errArr.push("Required : duration")
        }
        if (!fees) {
            errArr.push("Required : fees")
        }
        if(!shortName){
            errArr.push("Required : shortName");
        }

        if (errArr.length > 0) {
            res.send(sendResponse(false, errArr, null, "Required All Fields")).status(400);
            return;

        }
        else {
            let obj = { name, duration, fees, shortName }
            let Course = new courseModel(obj)
            await Course.save()
            if (!Course) {
                res.send(sendResponse(false, null, "internal Server Error")).status(400);

            }
            else {
                res.send(sendResponse(true, Course, "Saved Successfully")).status(200);
            }
        }
    } catch (e) {
        console.log(e);
        res.send(sendResponse(false, null, "Internal Server Error"));
    }
});

route.put("/:id", (req, res) => {
    res.send("Edit Course Data");
});

route.delete("/:id", (req, res) => {
    res.send("Delete Course Data");
});

module.exports = route;