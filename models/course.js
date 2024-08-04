const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = new Schema({
    id:{String},
    title:{String},
    category:{String},
    difficulty:{String},
    description:{String},
})

module.exports = mongoose.model('Course',courseSchema)



