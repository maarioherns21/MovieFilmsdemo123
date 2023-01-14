import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";



const useFetch = () => {
    const [movies, setMovies] =useState([])
    const [error, setError] =useState([])
    const [isLoading, setIsLoading] =useState(true)
    
    const loading =  <Player src='https://assets9.lottiefiles.com/private_files/lf30_lndg7fhf.json' style={{ height:"480px", padding: "50px"}}  loop  autoplay layout="fill" objectFit=""  /> ;
    
    
     const fetchData = async () => {
       try {
         const res = await fetch("http://localhost:4000/api/movies");
         const data = await res.json();
         setMovies(data);
         console.log(data)
         setIsLoading(false);
         setError(null);
       } catch (error) {
         setError(error.message);
         setIsLoading(false);
       }
     };
    
     useEffect(() => {
      setTimeout(() =>{

           fetchData();
      }, 2000)
    
     }, []);

     return {
        movies, error, isLoading, loading
     }
    
}

export default useFetch