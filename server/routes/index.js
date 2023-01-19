import express from "express";
import { commentMovie, createMovie, deleteMovie, index, movieLikes, updateMovie } from "../controllers/movies.js";
const router = express.Router();

router.get("/", index);

router.post("/new", createMovie);

router.patch("/:id", updateMovie);

router.delete("/:id", deleteMovie);


////------new-----------------------
router.post('/:id/comment', commentMovie);


router.post('/:id/likes', movieLikes);
////------new-----------------------
export default router;
