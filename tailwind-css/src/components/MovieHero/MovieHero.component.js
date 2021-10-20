import React from "react";
import { FcLike} from "react-icons/fc"
import {MdKeyboardArrowRight} from "react-icons/md"
import { launchRazorPay } from "../../pages/Movie.page";
const MovieHero=()=>{
    return(
        <>
        {/*for small screens */}
        <div className="md:hidden ">
            <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="movie Image"
            />
        </div>
        {/*for medium screens */}
        <div className="hidden md:block lg:hidden">
            <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="movie Image"
            />
        </div>
        {/*for large screens */}
        <div className="relative hidden lg:block" style={{height: "35rem"}}>
            <div className="absolute h-full w-full z-10" 
            style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
            />
            <div className="absolute z-30 left-40 top-20 flex items-center gap-10">
                <div className=" w-64 h-96 ">
                    <img 
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    className="w-full h-full rounded-xl"
                    alt="Poster"
                    />
                </div>
                <div className="text-white w-1/2">
                    <h1 className="text-4xl my-3 font-semibold">Shang-Chi and the Legend of the Ten Rings</h1>
                    <div className=" my-7 flex flex-row text-2xl items-end my-3">
                        <FcLike />   
                        91%<span className="text-lg ml-4"> 49.9k ratings</span>
                        <MdKeyboardArrowRight className="text-2xl"/>
                    </div>
                    <div className="my-7  gap-10 bg-navCol-500 flex flex-row items-center justify-between px-5 py-3 rounded-lg">
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg">Add Your Ratings and review</span>
                            <span>Your ratings matter</span>
                        </div>
                        <div>
                            <button className="bg-white text-black px-3 py-1 rounded-md">
                                Rate Now
                            </button>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-sm my-3">
                    2D,3D,MX4D,4DX 3D,IMAX 3D,IMAX 2D,4DX
                    </div>
                    <div className="bg-white text-black rounded-sm my-3">
                    English,Telugu,Tamil,Hindi,Malayalam,Kannada
                    </div>
                    <div className="font-normal">
                        2h 12m • Action,Adventure,Fantasy • UA • 3 Sep, 2021
                    </div>
                    
                    <button onClick={launchRazorPay}
                    className="rounded-lg bg-navCol-700 text-lg px-16 py-3 my-7">Book Tickets</button>
                </div>
            </div>
            <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="movie Image"
                className="w-full h-full"
            />
        </div>
        </>
    )
}

export default MovieHero