import ReactPlayer from "react-player"
import {FcLike, FcLikePlaceholder} from "react-icons/fc"



const ApiMovieCard = ({data, onDelete, handleLikes, user}) => {
console.log(`${user?.result.givenName} ${user?.result.familyName}`)
    

const Likes = () => {
  if (data > 0) {
    return data.likes.find((like) => like === user?.result.googleId || like === user?.result._id )
      ? (
        <><div  style={{display: "flex" , alignItems:"center", flexDirection:"column"}}><FcLike className="hover:shadow-xl rounded" style={{ fontSize: "25px"}} /><div style={{fontSize: "12px"}}>{data.likes.length > 2 ? `You and ${data.likes.length - 1} others` : `${data.likes.length} like${data.likes.length > 1 ? 's' : ''}` }</div></div></>
      ) : (
        <><div style={{display: "flex" , alignItems:"center", flexDirection:"column"}}><FcLikePlaceholder style={{ fontSize: "25px"}} />{data.likes.length} {data.likes.length === 1 ? 'Like' : 'Likes'}</div></>
      );
  }

  return <><div style={{display: "flex" , alignItems:"center", flexDirection:"column"}}><FcLikePlaceholder style={{ fontSize: "25px"}} />Like</div></>;
};


return (
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img   src={`https://www.themoviedb.org/t/p/w1280${data.poster_path}`} alt={data.name || data.title }  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"  />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Movie Maker</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a href="/" className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className=" leading-relaxed text-gray-300 mb-3  "><span className="rounded-md border-1 p-1 hover:shadow">Movie Clasification </span></p>
              <p className="leading-relaxed text-gray-300 text-xs title-font  mb-3 "><span className=" rounded-md border-1  p-1 hover:shadow ">Movie Genra</span></p>
              <p className="leading-relaxed text-gray-600 text-sm title-font mb-1">Time<br/><span className="text-gray-400">Movie runtim min</span></p>
              <p className="leading-relaxed text-gray-600 text-sm title-font mb-1">Director<br/><span className="text-gray-400">Movie Director</span></p>
              <p className="leading-relaxed text-gray-600 text-sm title-font mb-1">Cast<br/><span className="text-gray-400">Movie Cast</span></p>
              <p className="leading-relaxed text-gray-600 text-sm title-font mb-1 pb-5">Description<br/><span className="text-gray-400">Movie Description</span></p>
  

              <div className=" pb-5 border-b-2 border-gray-200 mb-5 " /> 
             
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button disabled={!user?.result} onClick={handleLikes}  className="flex ml-auto focus:outline-none text-gray-600 " >
                <Likes style={{ display: "flex"}} />
                </button> 
              </div>
              <div className=" pb-5 border-b-2 border-gray-200 mb-5 " />
              <div className="flex">
              <button onClick={onDelete} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Delete</button>
              <button className="flex ml-1 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
              </button>
              </div>
               <div className="pb-5 border-b-2 border-gray-200 mb-5 " />
               
            </div>
            <div  className=" container pt-1 lg:w-1/2 mt-6 flex flex-wrap items-center mb-5 " >
               {data.video && <ReactPlayer url={data.video} config={{  youtube: {playerVars : {showinfo: 1}}}}  /> }
              </div>
          </div>
        </div>
    )
}

export default ApiMovieCard