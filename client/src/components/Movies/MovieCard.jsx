import { Link } from "react-router-dom";




const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg m-h-64 p-2 ">
    <Link to={`/movie/${movie._id}`} >
    <figure className="mb-2">
      <img src={movie.images} alt={movie.name} className="h-64 ml-auto mr-auto transform hover:translate-y-2 hover:shadow-xl transition duration-300" />
    </figure>
    <div className="rounded-lg p-4 bg-white-700 flex flex-col">
      <div>
        <h5 className="text-black-400 text-2xl font-bold leading-none">
          {movie.name}
        </h5>
        <span className="text-xs text-gray-400 leading-none">{movie.body}</span>
      </div>
      <div className="flex items-center">
        <div className="text-lg text-black font-light">
          $1099,00
        </div>
         <button className="rounded-full bg-grey-900 text-black hover:bg-white hover:text-grey-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
          <svg className="stroke-current m-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>  
   </div>
   </Link> 
  </div>
  );
};


export default MovieCard



