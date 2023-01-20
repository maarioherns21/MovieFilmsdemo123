



const ApiPagination = ({ totalMovies, moviesPerPage, setCurrentPage }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
      pages.push(i);
    }
    return (
      <div  style={{display:"flex" , justifyContent: "center" , flexDirection:"row", padding: "30px"}}>
        {pages.map((page, index) => (
          <div className="p-1"  key={index} >
            <button className="rounded-full bg-grey-900 text-black hover:bg-white hover:text-grey-900 shadow-md hover:shadow-xl focus:outline-none w-10 h-10 ml-auto transition duration-300 stroke-current m-auto" onClick={() => setCurrentPage(page)}>{page}</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ApiPagination