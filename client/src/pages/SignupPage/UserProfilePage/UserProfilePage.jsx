import { useState } from "react";
import MovieMap from "../../../components/Movies/MovieMap";
import Pagination from "../../../components/Pagination/Pagination";
import useFetch from "../../../components/useFetch/useFetch";



const UserProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("token"));
  console.log(user);
  const { movies, isLoading, error , loading } = useFetch();
  const data = movies.filter((movie) => movie.creator === user?._id);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieindex = lastMovieIndex - moviesPerPage;
  const currentMovies = data.slice(firstMovieindex, lastMovieIndex);
  const theName = user?.firstName.toUpperCase().slice(0,1) + user?.firstName.toLowerCase().slice(1)

  return (
    
<div className="">
      <div>{error ? error : null}</div>
      <div>{isLoading ? "Loading..." : ""}</div>
   <main  className="bg-white-100 mt-32" >
     <div  className="container mx-auto my-5 p-5 " >
               <div  className="md:flex no-wrap md:-mx-2 " >
                   <section  className="w-full md:w-3/12 md:mx-2">
                       <div className="bg-white p-3 border-t-4 shadow-md  hover:shadow-lg">
                           <div className="image overflow-hidden">
                               <img className="h-auto w-full mx-auto"  src={user?.photoUrl} alt={user?.username} />
                           </div>
                           <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user?.username}</h1>
                           <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                           <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{user?.bio}</p>
                           <ul
                               className="bg-white-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                               <li className="flex items-center py-3">
                                   <span>Status</span>
                                   <span className="ml-auto"><span
                                           className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                               </li>
                               <li className="flex items-center py-3">
                                   <span>Member since</span>
                                   <span className="ml-auto">{user?.createdAt.slice(0,10)}</span>
                               </li>
                           </ul>
                       </div>
                 
                       <div className="my-4"></div>
                    
                       <div className="bg-white p-3 shadow-md  hover:shadow-lg">
                           <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                               <span className="text-green-500">
                                   <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 24 24" stroke="currentColor">
                                       <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                           d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                   </svg>
                               </span>
                               <span>Similar Profiles</span>
                           </div>
                           <div className="grid grid-cols-3">
                               <div className="text-center my-2">
                                   <img className="h-16 w-16 rounded-full mx-auto"
                                       src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                       alt="" />
                                   <a href="/" className="text-main-color">Kojstantin</a>
                               </div>
                               <div className="text-center my-2">
                                   <img className="h-16 w-16 rounded-full mx-auto"
                                       src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                       alt="" />
                                   <a href="/" className="text-main-color">James</a>
                               </div>
                               <div className="text-center my-2">
                                   <img className="h-16 w-16 rounded-full mx-auto"
                                       src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                       alt="" />
                                   <a href="/" className="text-main-color">Natie</a>
                               </div>
                               <div className="text-center my-2">
                                   <img className="h-16 w-16 rounded-full mx-auto"
                                       src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                       alt="" />
                                   <a href="/" className="text-main-color">Casey</a>
                               </div>
                           </div>
                       </div>
                   </section>
                   <div className="w-full md:w-9/12 ">
                   
                       <section className="bg-white p-3 rounded-sm shadow-md  hover:shadow-lg ">
                           <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                               <span clas="text-green-500">
                                   <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                   </svg>
                               </span>
                               <span className="tracking-wide">About</span>
                           </div>
                           <div className="text-gray-700">
                               <div className="grid md:grid-cols-2 text-sm">
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">First Name</div>
                                       <div className="px-4 py-2">{user?.firstName}</div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Last Name</div>
                                       <div className="px-4 py-2">{user?.lastName}</div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Gender</div>
                                       <div className="px-4 py-2">{user?.gender}</div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Contact No.</div>
                                       <div className="px-4 py-2">{user?.phoneNumber}</div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Current Address</div>
                                       <div className="px-4 py-2">{user?.address}</div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                       <div className="px-4 py-2">{user?.address}</div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Email.</div>
                                       <div className="px-4 py-2">
                                           <a className="text-blue-800" href="mailto:jane@example.com">{user?.email}</a>
                                       </div>
                                   </div>
                                   <div className="grid grid-cols-2">
                                       <div className="px-4 py-2 font-semibold">Birthday</div>
                                       <div className="px-4 py-2">{user?.birthday}</div>
                                   </div>
                               </div>
                           </div>
                           <button
                               className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                               Full Information</button>
                       </section>
        
       
                       <div className="my-4"></div>
       
                  
                       <section className="bg-white p-3 rounded-sm shadow-md  hover:shadow-lg  container  ">
       
                                   <div className="flex space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                       <span clas="text-green-500">
                                           <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               stroke="currentColor">
                                               <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                           </svg>
                                       </span>
                                       <span className="tracking-wide">{`${theName}'s  Movie Collection`}</span>
              
                                   </div>
                                     <div className="flex flex-wrap justify-center items-center" >
                                        <div>{isLoading ? loading : ""}</div>
                                     <MovieMap movies={currentMovies} title="" />
                                     <Pagination moviesTotal={currentMovies.length}  moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} setMoviesPerPage={setMoviesPerPage} />
                                   </div>
                       </section>
                    
                   </div>
              </div>
          </div>
    </main>
</div>
  );
};


export default UserProfilePage

