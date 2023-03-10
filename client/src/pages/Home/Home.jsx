import Movies from "../../components/Movies/Movies"
import {Player} from "@lottiefiles/react-lottie-player"
import ApiMovies from "../../components/APIComponents/ApiMovies/ApiMovies"

const Home = () => {


  return (
        <div>
<main className="flex flex-col items-center justify-center mt-32">
   
    <section
        className="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
      
        <div className="px-3 w-full lg:w-2/5">
            <div
                className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                    Find the best
                     <br />
                    <span className="text-5xl text-blue-500 leading-relaxeds">Movies{"  "}
                    </span>to Watch
                </h2>

                <p
                    className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                    helping you share your favorite movies 
                </p>
            </div>

            {/* <div className="text-center lg:text-left">
                <a href="/" className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                >Key Features</a>

                <a href="/"
                    className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                    >How We Work?</a>
            </div> */}
        </div>

   
                <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
            <div className="flex justify-center items-center">
            <Player src='https://assets6.lottiefiles.com/packages/lf20_qm8eqzse.json' className="player"   height="400"  loop  autoplay layout="fill" objectFit="cover"  />
            </div>
        </div>
    </section>

  
    <section
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
        style={{backgroundImage:"url(https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=1800&t=st=1673838312~exp=1673838912~hmac=66bcb91bd39b5a925a70f301fd540d7b53ec7e47e4038de4842cf0e837b10e72)" }}>
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            Moviefilms
        </h1>

        <span className="text-center font-bold my-10 text-white/90">
            {/* <a
                href="/"
                className="text-white/90 hover:text-white">
               Balahah
            </a>

            <hr className="my-4" />

            <a
                href="/"
                className="text-white/90 hover:text-white">
                lalaala
            </a> */}

            {/* <hr className="my-2" /> */}
            <p>
                <a
                    href="/"
                    className="text-white/90 hover:text-white">
                   Whenever a publication comes out with a list of the best movies of all-time, the hope is that it will spark a fruitful, spirited discussion among the world???s filmlovers, one that???s carried out with polite respect for individual opinions and the nature of subjective taste. We know better. If you???re going to talk about movies at all, let alone the best movies of all-time, it???s not going to be a ???discussion??? ??? it???s going to be a knock-down, drag-out, full-throated, spittle-spraying argument. And you know what? That???s cool with us (do be polite though, people).
                </a>
                {/* |
                <a
                    href="/"

                    className="text-white/90 hover:text-white">
                    lalalala
                </a> */}
            </p>
        </span>
    </section>
    <ApiMovies />
     <Movies />
  {/* <section
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
        style={{backgroundImage:"url(https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=1800&t=st=1673838312~exp=1673838912~hmac=66bcb91bd39b5a925a70f301fd540d7b53ec7e47e4038de4842cf0e837b10e72)" }}>
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            moviefilms
        </h1>
        <span className="text-center font-bold my-20 text-white/90">
            <a
                href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                className="text-white/90 hover:text-white">
                Convetert to SASS
            </a>

            <hr className="my-4" />

            <a
                href="https://unsplash.com/photos/8Pm_A-OHJGg"
                className="text-white/90 hover:text-white">
                Image Source
            </a>

            <hr className="my-4" />

            <p>
                <a
                    href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"

                    className="text-white/90 hover:text-white">
                    Source Code
                </a>
                |
                <a
                    href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"

                    className="text-white/90 hover:text-white">
                    Full Preview
                </a>
            </p>
        </span>
    </section> */}
    <section className="p-20 space-y-8">
        <h1 className="text-4xl text-center my-20">Enjoy the best at moviefilms</h1>
        <p>
        moviefilms Theatres is dedicated to innovating the way you see movies. Don???t just visit a theatre; experience the moviefilms difference of premium formats that bring you superior acoustics, richer imagery, and a choice between Real D?? 3D, Dolby Cinema??, and IMAX?? technologies. Taste our special menu of elevated cinema favorites and enjoy bolder flavors, wider variety, and superior quality movie snacks. In select locations, reserve your seats when you purchase tickets online and relax into the spacious comforts of our moviefilms luxe recliners. Come enjoy the very best of cutting-edge entertainment when you choose moviefilms Theatres.
         </p>
         <p>
         Enjoy the best of entertainment at any one of our amenity-packed moviefilms locations. Whether it's online reclining seat reservations, a MacGuffins Bar??, the re-crafted concession menu, or any combination of the above, there???s something amazing waiting for you.
         We???re rolling out epic updates and innovations to tons of our theatres, including power recliners, MacGuffins bars, updated food and drink options and more.
         </p>
    </section>
    
</main>
        </div>
    )
}



export default Home