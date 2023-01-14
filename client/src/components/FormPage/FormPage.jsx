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
  images: "" });
const [error, setError] = useState([]);
const [isPending, setIspending] = useState(false);
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const movie = { ...formData };
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

const clear = (e) => {
  e.preventDefault();
  setFormData({ name: "", body: "", creator: "mario", images: "" });
};

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
       MovieFilms   
       </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div>{error ? error : null}</div>
        <form  onSubmit={handleSubmit} >
             <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide font-bold text-gray-400 text-xs mb-2" >
               Title
              </label>
              <input type="text"  value={formData.name}  onChange={(e) => setFormData({ ...formData, name: e.target.value })}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
             </div>
             <div className="w-full md:w-1/2 px-3">
             <label className="block uppercase tracking-wide font-bold text-gray-400 text-xs mb-2" >
        Discription 
               </label>
               <input type="text"  value={formData.body}  onChange={(e) => setFormData({ ...formData, body: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
            </div>
      </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
   {/* <label className="block uppercase tracking-wide font-bold text-gray-400 text-xs mb-2" >
      Creator
      </label>
       <div className="relative">
        <select  type="text" value={formData.creator}  onChange={(e) =>    setFormData({ ...formData, creator: e.target.value }) }  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="mario">Mario</option>
          <option value="alex">Alex</option>
          <option value="mark">Mark</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div> */}
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide font-bold text-gray-400 text-xs mb-2" >
        Upload
      </label>
      <FileBase value={formData.images}  multiple={false}  type="file" onDone={({ base64 }) =>  setFormData({ ...formData, images: base64 })  }  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="flex items-center justify-between">
      <button  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {isPending ? "Submittin..." : "Submit"}
      </button>
      <button onClick={clear}  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Clear
      </button>
      </div>
</form>
</div>
</div>
</div>
</section>
    );
}

export default FormPage

