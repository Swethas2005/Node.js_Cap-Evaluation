const mongoose  = require("mongoose");
const userSchema = new mongoose.Schema({
    id:{String,unique:true,required:true},
    username:{String},
    password:{String},
    enrolledCourses:[String],
})

module.exports = mongoose.model("User",userSchema)

