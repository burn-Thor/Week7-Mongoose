const mongoose = require("mongoose");


//template for movie schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        unique: true,
        required: true,
    },
    actor: {
        type: String,
    },
});


//creating of movie schema 
//need uppercase for creating a new schema
const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;
