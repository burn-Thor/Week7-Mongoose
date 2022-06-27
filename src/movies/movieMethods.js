const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async(movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
};

// create an update one or update many function
exports.updateMovie = async (theOriginal, theUpdate) => {
    try {
        const movieTitle = {title: theOriginal };
        const newData = {
            $set: {
                title: theUpdate.title,
                director: theUpdate.director,
                year: theUpdate.year,
            },
        };
        const updateMovie = await Movie.updateOne(movieTitle, newData);
        console.log(editEntry);
    } catch (error) {
        console.log(error);
    }
};



// create a delete one or delete many function
exports.deleteMovie = async (movieObj) => {
    try {
      await Movie.deleteOne(movieObj);
    } catch (error) {
      console.log(error);
    }
  };
