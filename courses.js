const mongoose = require('mongoose');
const express = require("express");
const {courseSchema} = require("./models/course");
const {userSchema} = require("./models/User");
const Port = 3000;

const app = express();

app.use(express.json());

app.get("/course", async (req, res) => {
    const courses = await courseSchema.find();
    res.send(courses);
})

app.get("/course/:id", async (req, res) => {
    const course = await courseSchema.findOne({id:req.params.id});
    res.send(course);
})

app.post("/course", async (req, res) => {
    const course = new courseSchema(req.body);
    await course.save();
    res.send(course);
})

app.put("/course/:id", async (req, res) => {
    const course = await courseSchema.findOne({id:req.params.id});
    course.title = req.body.title;
    course.category = req.body.category;
    course.difficulty= req.body.difficulty;
    course.description = req.body.description;
    await course.save();
    res.send(course);
})

app.delete("/course/:id", async (req, res) => {
    const course = await courseSchema.findOne({id:req.params.id});
    await course.remove();
    res.send(course);
})



app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
})