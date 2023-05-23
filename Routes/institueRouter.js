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
    res.send("Get Single Student Data");
});

route.post("/", (req, res) => {
    res.send("Post Single Student Data");
});

route.put("/:id", (req, res) => {
    res.send("Edit Student Data");
});

route.delete("/:id", (req, res) => {
    res.send("Delete Student Data");
});

module.exports = route;