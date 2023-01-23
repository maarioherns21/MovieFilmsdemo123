import { useEffect } from "react";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";


const loading =  <Player src='https://assets9.lottiefiles.com/private_files/lf30_lndg7fhf.json' style={{ height:"480px", padding: "50px"}}  loop  autoplay layout="fill" objectFit=""  /> ;

const useApiFetch = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [currentPage, setCurrentPage]=useState(1)
    const [moviesPerPage, setMoviesPerPage] =useState(4)
    
/// restfull api
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=79fe92d2e9ddc8faf9312e4650491c9b`);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
        setIsPending(false)
        setError(null)
      } catch (error) {
        setError(error.message);
        setIsPending(false)
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);
    
    const lastmoviesIndex = currentPage * moviesPerPage
    const firstMovieIndex = lastmoviesIndex - moviesPerPage
    const currentMovies = movies.slice(firstMovieIndex, lastmoviesIndex)
    console.log(currentMovies)

    return {
        movies, error, isPending, currentMovies, setCurrentPage, moviesPerPage, setMoviesPerPage, loading
    }

}

export default useApiFetch