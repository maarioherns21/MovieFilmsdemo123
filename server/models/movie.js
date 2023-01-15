import mongoose from "mongoose";
const Schema = mongoose.Schema


const movieSchema = new Schema({
  name: { type: String, require: true },
  body: { type: String, require: false },
  runtime: Number,
  classification: String,
  genre: String, 
  cast: String,
  director: String,
  creator: String,
  creatorName: String,
  images: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Movie = mongoose.model( "Movie" , movieSchema)

export default Movie

