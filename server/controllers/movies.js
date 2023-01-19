import Movie from "../models/movie.js";

export const index = async (req, res) => {
  try {
    const data = await Movie.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    const movie = req.body;

    const newData = new Movie({ ...movie });

    const saveData = await newData.save();

    res.status(200).json(newData);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = req.body;
    const { id } = req.params;
    const newMovie = { ...movie, _id: id };

    const data = await Movie.findByIdAndUpdate(id, newMovie, { new: true });

    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Movie.findByIdAndDelete(id);

    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

////-------------------------------------------new-------------------------------------------------

//// comments

export const commentMovie = async (req, res) => {
  try {
    const { comment } = req.body;
    const { id } = req.params;

    const movie = await Movie.findById(id);

    movie.comments.push(comment);

    const newMovie = await Movie.findByIdAndUpdate(id, movie, { new: true });

    res.status(200).json(newMovie);
  } catch (error) {
    console.log(error.message);

    res.status(401).json({ message: error.message });
  }
};

/// likes

export const movieLikes = async (req, res) => {
  try {
    const { like } = req.body;
    const { id } = req.params;
    
    console.log(like);
    
    const movie = await Movie.findById(id);

    movie.likes.push(like);

    const newMovie = await Movie.findByIdAndUpdate(id, movie, { new: true });

    res.status(200).json(newMovie);
  } catch (error) {
    console.log(error.message);

    res.status(401).json({ message: error.message });
  }
};

////-------------------------------------------new-------------------------------------------------
