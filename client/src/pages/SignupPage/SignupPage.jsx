import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FileBase from "react-file-base64"


const SignUpPage = ({setToken}) =>{
const [formaData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  imageUrl: "",
  bio: "",
  givenName: "",
  familyName: "",
  phoneNumber: 0,
  birthday: "",
  address: "",
  gender: "male",
});  
const [error, setError] = useState([]);
const [isPending, setIsPending] = useState(false);  
const navigate = useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = { ...formaData };
    setIsPending(true);
    console.log(token);
    const res = await fetch("http://localhost:4000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    });
    const data = await res.json();
    setIsPending(false);
    setError(null);
    console.log(data);
    setToken(data);
    navigate("/")
  } catch (error) {
    setError(error.message);
    setIsPending(false);
  }
};
   
   

   
    return (
        <div className="pt-10" >
           <section className="bg-gray-50 dark:bg-gray-900">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
         <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white pt-5" >
        <div>{error ? error : null}</div>
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          MovieFilms   
      </a> 
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form onSubmit={handleSubmit} className="grid gap-4 mb-4 sm:grid-cols-2 ">
                   <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input value={formaData.givenName} onChange={(e) => setFormData({...formaData , givenName: e.target.value})}  type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input value={formaData.familyName} onChange={(e) => setFormData({...formaData , familyName: e.target.value})}  type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                      <select value={formaData.gender} onChange={(e) => setFormData({...formaData , gender: e.target.value})}  type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="none">none</option>
                      </select>
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No</label>
                      <input value={formaData.phoneNumber} onChange={(e) => setFormData({...formaData , phoneNumber: e.target.value})}  type="tel" name="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Address</label>
                      <input value={formaData.address} onChange={(e) => setFormData({...formaData , address: e.target.value})}  type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanant Address</label>
                      <input value={formaData.address} onChange={(e) => setFormData({...formaData , address: e.target.value})}  type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                      <input value={formaData.birthday} onChange={(e) => setFormData({...formaData , birthday: e.target.value})}  type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div >
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input value={formaData.username} onChange={(e) => setFormData({...formaData , username: e.target.value})}  type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name11" required="" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input value={formaData.email} onChange={(e) => setFormData({...formaData , email: e.target.value})}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={formaData.password} onChange={(e) => setFormData({...formaData , password: e.target.value})} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input value={formaData.confirmPassword} onChange={(e) => setFormData({...formaData , confirmPassword: e.target.value})} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="required" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                      <textarea value={formaData.bio} onChange={(e) => setFormData({...formaData , bio:e.target.value})} type="text" name="bio" id="bio" placeholder="..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"   />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                      <FileBase value={formaData.imageUrl} multiple={false} onDone={({base64}) => setFormData({...formaData, imageUrl: base64})} type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /> 
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label  className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isPending ? "Creating..." : "Create an account"}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? 
                      <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    )
}


export default SignUpPage


// <!-- Modal toggle -->
// <div class="flex justify-center m-5">
//     <button id="defaultModalButton" data-modal-toggle="defaultModal" class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
//     Create product
//     </button>
// </div>

// <!-- Main modal -->
// <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
//     <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
//         <!-- Modal content -->
//         <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
//             <!-- Modal header -->
//             <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
//                 <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                     Add Product
//                 </h3>
//                 <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
//                     <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                     <span class="sr-only">Close modal</span>
//                 </button>
//             </div>
//             <!-- Modal body -->
//             <form action="#">
//                 <div class="grid gap-4 mb-4 sm:grid-cols-2">
//                     <div>
//                         <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//                         <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
//                     </div>
//                     <div>
//                         <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
//                         <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="">
//                     </div>
//                     <div>
//                         <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
//                         <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
//                     </div>
//                     <div>
//                         <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//                         <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
//                             <option selected="">Select category</option>
//                             <option value="TV">TV/Monitors</option>
//                             <option value="PC">PC</option>
//                             <option value="GA">Gaming/Console</option>
//                             <option value="PH">Phones</option>
//                         </select>
//                     </div>
//                     <div class="sm:col-span-2">
//                         <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
//                         <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
//                     </div>
//                 </div>
//                 <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//                     <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
//                     Add new product
//                 </button>
//             </form>
//         </div>
//     </div>
// </div>