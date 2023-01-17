import { useEffect } from "react"
import { useState } from "react"
import useFetch from "../useFetch/useFetch"




const useSearch = () => {
    const {movies, error, isLoading, loading} =useFetch()
    const [input, setInput] =useState([])
    const [output, setOutput] =useState([])
    
    
    const searchByName = () => {
     try {
        movies.map((movie) => {
            if (movie.name.toLowerCase().includes(input.toLowerCase())) {
              setOutput((output) => [...output, movie]);
            } 
            else {
              return null;
            }
          });
     } catch (error) {
        console.log(error.message)
     }
    }
    
    
    useEffect(() => {
      setOutput([]);
     searchByName()
    
    }, [input]);

    return {
       setInput , output, error, isLoading, loading
    }
}

export default useSearch