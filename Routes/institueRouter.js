const express = require("express");
const route = express.Router();
const instituteModel = require("../Models/instituteModel");
const { sendResponse } = require("../Helper/helper");

route.get("/", async (req, res) => {
    try{
        const result = await instituteModel.find();
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
    res.send("Get Single Institute Data");
});

route.post("/", async (req, res) => {
    let { name, address, shortName, tel } = req.body
    try {

        let errArr = []
        if (!name) {
            errArr.push("Required : name")
        }
        if (!address) {
            errArr.push("Required : address")
        }
        if (!shortName) {
            errArr.push("Required : shortName")
        }
        if (!tel) {
            errArr.push("Required : tel")
        }

        if (errArr.length > 0) {
            res.send(sendResponse(false, errArr, null, "Required All Fields")).status(400);
            return;

        }
        else {
            let obj = { name, address, shortName, tel }
            let Institute = new instituteModel(obj)
            await Institute.save()
            if (!Institute) {
                res.send(sendResponse(false, null, "internal Server Error")).status(400);

            }
            else {
                res.send(sendResponse(true, Institute, "Saved Successfully")).status(200);
            }
        }
    } catch (e) {
        console.log(e);
        res.send(sendResponse(false, null, "Internal Server Error"));
    }
});

route.put("/:id", (req, res) => {
    res.send("Edit Institute Data");
});

route.delete("/:id", (req, res) => {
    res.send("Delete Institute Data");
});

module.exports = route;