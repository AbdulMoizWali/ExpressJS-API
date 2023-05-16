const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
    res.send("Get All Student Data");
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