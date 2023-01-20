import { useParams } from "react-router"
import useApiFetch from "../useAPiFetch/useApiFetch"
import ApiMovieCard from "./ApiMovieCard"




const ApiMovieDetails = () => {
const params = useParams()
const {movies, error, isPending , loading} = useApiFetch()
const data = movies.find((movie) =>  movie.id == params.id)

if(!data) return "Loading.."


return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div>{isPending ? loading : ""}</div>
    <div>{error ? error : null}</div>
<ApiMovieCard data={data} />
  </section>
);
}

export default ApiMovieDetails