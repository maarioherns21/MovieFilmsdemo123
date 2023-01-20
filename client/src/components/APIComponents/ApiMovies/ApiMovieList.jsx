import { Link } from "react-router-dom"
import ApiMovieItem from "./ApiMovieItem"




const ApiMovieList = ({movies, title}) => {

    return (
        <div className="flex items-center w-screen" style={{ fontFamily: "Muli" }} >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4  pt-3">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
              {title}
            </h1>
          </div>
        {movies && movies.map(element => {
        return <div key={element.id}  className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2" >
        <ApiMovieItem movie={element} />
         </div>
       })}
       </div>
    </div>
    )
}

export default ApiMovieList