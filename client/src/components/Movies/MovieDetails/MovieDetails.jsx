import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../useFetch/useFetch"
import MovieItem from "./MovieItem"




const MovieDetails = () =>{
const params = useParams()
const {movies, isLoading, error , loading} =useFetch()
const movie = movies.find((movie) => movie._id === params.id)
const navigate = useNavigate("/")

const handleDelete = async () => {
  try {
    const res = await fetch(`http://localhost:4000/api/movies/${params.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    navigate("/");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};


    return (
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div>{isLoading ? loading : ""}</div>
        <div>{error ? error : null}</div>
        {movie && <MovieItem movie={movie} onDelete={handleDelete} />}
      </section>
    );
}

export default MovieDetails


