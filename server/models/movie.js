import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
  video: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Films = mongoose.model("Films", movieSchema);

export default Films;
