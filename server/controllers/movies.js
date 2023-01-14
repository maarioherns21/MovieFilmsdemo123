import Movie from "../models/movie.js";

export const index = async (req, res) => {
  try {
    const data = await Movie.find();

    res.status(200).json(data);
  } catch (error) {
    res.stuat(401).json({ error: error.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    const movie = req.body;

    const newData = new Movie({ ...movie });

    const  saveData = await newData.save()

    res.status(200).json(newData);
  } catch (error) {
    res.stuat(401).json({ error: error.message });
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
    res.stuat(401).json({ error: error.message });
  }
};
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Movie.findByIdAndDelete(id);

    res.status(200).json(data);
  } catch (error) {
    res.stuat(401).json({ error: error.message });
  }
};
