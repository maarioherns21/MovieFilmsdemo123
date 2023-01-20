import ApiMovies from "../../components/APIComponents/ApiMovies/ApiMovies";
import MovieCard from "../../components/Movies/MovieCard"
import useSearch from "../../components/useSearch/useSearch"


const SearchPage = () => {
const {setInput , output, error, isLoading, loading} =useSearch()




    return (
        <main className="px-6 py-8 mx-auto  lg:py-0" style={{ paddingTop: "60px"}}>
        <section className="flex flex-col p-2 py-6 m-h-screen">
        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" >
            <div>
                <div  className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                    <a href="/" > 
                    <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    </a>
                </div>
            </div>
        
            <input onChange={(e) =>  setInput(e.target.value)} className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />
                <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                 </div>
        </section>

        <section className="flex items-center w-screen" style={{ fontFamily: "Muli" }} >    
      <div className="container ml-auto mr-auto flex flex-wrap items-start">
        <div className="w-full pl-5 lg:pl-2 mb-4 mt-4 pt-3 ">
        <div>{error ? error : null}</div>
        <div>{isLoading ? loading : ""}</div>
        </div> 
           {output
           .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
           .map((movie) => (
          <div key={movie._id}  className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2" >
            <MovieCard movie={movie} />
          </div>
             ))} 
      </div>
      </section>
      <div>
        <ApiMovies />
      </div>
      </main>
     
    );
}

export default SearchPage


