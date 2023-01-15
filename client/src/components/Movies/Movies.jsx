import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import useFetch from "../useFetch/useFetch";
import MovieMap from "./MovieMap"


const Movies = () =>{ 
const {movies, isLoading, error , loading} =useFetch()
const [currentPage, setCurrentPage] =useState(1)
const [moviesPerPage, setMoviesPerPage] =useState(4)
const lastMovieIndex =  currentPage * moviesPerPage
const firstMovieindex =  lastMovieIndex - moviesPerPage
const currentMovies = movies.slice(firstMovieindex, lastMovieIndex)


    return (
      <div>
        <div>{error ? error : null}</div>
        <div>{isLoading ? loading : ""}</div>
        <MovieMap movies={currentMovies} title="New Movies" />
        <Pagination moviesTotal={movies.length}  moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} setMoviesPerPage={setMoviesPerPage} />
      </div>
    );
}

export default Movies