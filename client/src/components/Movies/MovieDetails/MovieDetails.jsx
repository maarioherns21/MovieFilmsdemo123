import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CommentSection from "../../CommentSection/CommentSection"
import useFetch from "../../useFetch/useFetch"
import MovieItem from "./MovieItem"




const MovieDetails = () =>{
const user = JSON.parse(localStorage.getItem("token"))
const params = useParams()
const {movies, isLoading, error , loading} =useFetch()
const movie = movies.find((movie) => movie._id === params.id)
const [like, setLike] = useState( user?.result.googleId || user?.result._id );
const navigate = useNavigate("/")


const handleDelete = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch(`https://moviemario123.herokuapp.com/api/movies/${params.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    navigate("/");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const handleLikes = async (e) => {
  e.preventDefault();
  try {
    const likes = { like };
    console.log(likes);
    const res = await fetch(
      `https://moviemario123.herokuapp.com/api/movies/${params.id}/likes`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(likes),
      }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    setLike(data)
  } catch (error) {
    console.log(error.message);
  }
};

if(!movie) return loading

    return (
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div>{isLoading ? loading : ""}</div>
        <div>{error ? error : null}</div>
        {movie && <MovieItem movie={movie} onDelete={handleDelete} handleLikes={handleLikes} user={user} />}
        <CommentSection movie={movie} />
        </section>
       
    );
}

export default MovieDetails


