import axios from "axios";
import React , {useEffect, useState} from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";
import PosterSlider from "../components/PosterSlider/PosterSlider.component.component";
import { Premier } from "../components/Premier/Premier.components";
import PremierImages from "../config/TempPosters.config";

const Homepage=()=>{
    const [popularMovies , setPopularMovies] = useState([]);
    useEffect (() => {
        const requestPopularMovies = async() =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);
    console.log({popularMovies});
    const [popularMoviesRecommended , setPopularMoviesRecommended] = useState([]);
    useEffect (() => {
        const requestPopularMoviesRecommended = async() =>{
            const getPopularMoviesRecommended = await axios.get("/movie/top_rated");
            setPopularMoviesRecommended(getPopularMoviesRecommended.data.results);
        };
        requestPopularMoviesRecommended();
    },[]);
    return(
        <>
        <div className="flex flex-col gap-10 my-16">
        <div className="container mx-auto px-24">
        <PosterSlider images={popularMoviesRecommended} title="Recommended Movies" subtitle="" isDark={false}/>
        </div>
        <div>
            <div className="flex mx-24 my-16">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" />
            </div>
        </div>
        <div className="container mx-auto px-4 my-16">
            <h1 className="text-2xl font-bold">The Best of Entertainments</h1>
            <EntertainmentCardSlider />
            
        </div>
        <div className="bg-sakthi-200 py-16">
            <div className="container mx-auto px-20 my-16">
                <div className="flex">
                    <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' />
                </div>
                <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new releases every Friday" isDark={true} />
            </div>
        </div>
        <div className="container mx-auto px-24 my-16">
        <PosterSlider images={popularMovies} title="Online Streaming Event" subtitle="" isDark={false}/>
        </div>
        </div>
        </>
    )
}

export default Homepage;