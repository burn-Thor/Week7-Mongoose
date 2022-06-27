require("./db/connection")
const mongoose = require("mongoose");
const yargs = require("yargs");
const {addMovie, listMovies, deleteMovie, updateMovie} = require("./movies/movieMethods");

const app = async (yargsObj) => {
    try {
    // add Films
        if (yargsObj.add) {
            await addMovie({ 
                title: yargsObj.title, 
                actor: yargsObj.actor,
                year: yargs.Obj.year})
            console.log(await listMovies())
    // list Films
        } else if (yargsObj.list){
            console.log(await listMovies());
    // Delete FIlms
        } else if (yargsObj.delete) {
            await removeMovie({
                title: yargsObj.title,
                director: yargsObj.director,
                year: theEdits.year,
            });
            console.log(await listMovies());
    // Edit FIlms
         } else if (yargsObj.edit) {
             await editMovie(yargsObj.edit, {
                title: yargsObj.title,
                actor: yargsObj.director,
                year: yargsObj.year,
    });
    console.log(await listMovies());
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect();
    } catch(error) {
        console.log(error);
    }
};

app(yargs.argv)
