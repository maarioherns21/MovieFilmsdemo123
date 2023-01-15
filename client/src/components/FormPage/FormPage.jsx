import { useState } from "react"
import FileBase from "react-file-base64"
import { useNavigate } from "react-router-dom";


const FormPage = () => {
const user = JSON.parse(localStorage.getItem("token"))
console.log(user?._id)
const [formData, setFormData] = useState({
  name: "",
  body: "",
  creator: user?._id,
  creatorName: `${user?.firstName} ${user?.lastName}`,
  images: "",
  runtime: 0,
  classification: "G",
  genre: "action",
  cast: "",
  director: "",
  video: "",
});
const [error, setError] = useState([]);
const [isPending, setIspending] = useState(false);
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const movie = { ...formData };
    console.log(movie)
    setIspending(true);
    const res = await fetch("http://localhost:4000/api/movies/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    const data = await res.json();
    console.log(data);
    setIspending(false);
    setError(null);
    navigate("/");
  } catch (error) {
    setError(error.message);
    setIspending(false);
  }
};

// const clear = (e) => {
//   e.preventDefault();
//   setFormData({ name: "", body: "", creator: "mario", images: "" });
// };


    return (
      <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <div>{error ? error : null}</div>
      <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
      MovieFilms   
      </a> 
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
             Create Movie
         </h1>
         <form onSubmit={handleSubmit}  className=" grid gap-4 mb-4 sm:grid-cols-2">
              <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                 <input type="text"  value={formData.name}  onChange={(e) => setFormData({ ...formData, name: e.target.value })}  name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
             </div>
             <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cast</label>
                 <input type="text"  value={formData.cast}  onChange={(e) => setFormData({ ...formData, cast: e.target.value })}  name="cast" id="userncastame" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
             </div>
             <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Classification</label>
                 <select type="text"  value={formData.classification}  onChange={(e) => setFormData({ ...formData, classification: e.target.value })}  name="classification" id="classification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" >
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                  <option  value="PG13">PG-13</option>
                  <option  value="R">R</option>
                  <option  value="NC17">NC-17</option>
                 </select>
             </div>
             <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                 <select type="text"  value={formData.genre}  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}  name="genre" id="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" >
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option  value="drama">Drama</option>
                  <option  value="fantasy">Fantasy</option>
                  <option  value="horror">Horror</option>
                  <option  value="mystery">Mystery</option>
                  <option  value="romance">Romance</option>
                 </select>
             </div>
             <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Director</label>
                 <input type="text"  value={formData.director}  onChange={(e) => setFormData({ ...formData, director: e.target.value })}  name="director" id="director" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
             </div>
             <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Runtime</label>
                 <input type="number"  value={formData.runtime}  onChange={(e) => setFormData({ ...formData, runtime: e.target.value })}  name="runtime" id="runtime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
             </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">About</label>
                <textarea value={formData.body}  onChange={(e) => setFormData({ ...formData, body: e.target.value })}   id="about" name="about" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 border" placeholder="" />
            </div>
            <div >
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">video url</label>
                 <input type="url" value={formData.video}  onChange={(e) => setFormData({ ...formData, video: e.target.value })}  name="video" id="video" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
             </div>
        <div>
           <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            <div className="flex text-sm text-gray-600 ">
                 <FileBase value={formData.images}  multiple={false}  type="file" onDone={({ base64 }) =>  setFormData({ ...formData, images: base64 })  } className="" />
             </div>
         <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
           </div>
     </div>
             <div className="flex items-start">
                 <div className="flex items-center h-5">
                   <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                 </div>
                 <div className="ml-3 text-sm">
                   <label  className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
                 </div>
             </div>
             <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isPending ? "Creating..." : "Submit"}</button>
         </form>
      </div>
      </div>
      </div>
      </section>
    );
}

export default FormPage


