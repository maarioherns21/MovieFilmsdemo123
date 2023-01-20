import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ApiPagination from "../ApiPagination/ApiPagination";
import useApiFetch from "../useAPiFetch/useApiFetch";
import ApiMovieList from "./ApiMovieList";



const ApiMovies = () => {
const {movies, error, isPending, currentMovies, setCurrentPage, moviesPerPage } =useApiFetch()

if(!movies) return "Loading.."

    return (
        <div>
        <div>{error ? error : null}</div>
      <div>{isPending ? "Loading..." : ""}</div>
     <ApiMovieList movies={currentMovies} title="Trending" />
     <ApiPagination totalMovies={movies.length} setCurrentPage={setCurrentPage} moviesPerPage={moviesPerPage} />
        </div>
    )
}

export default ApiMovies