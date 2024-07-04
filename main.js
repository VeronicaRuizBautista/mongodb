import { movies } from "./js/modules/movies.js";
let mongo = new movies()
console.log(await mongo.getAllMovies());