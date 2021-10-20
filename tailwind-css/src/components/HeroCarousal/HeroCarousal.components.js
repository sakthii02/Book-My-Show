import React,{useState , useEffect} from "react";
import HeroSlider from "react-slick";
import { NextArrow,PrevArrow } from "./Arrows.components";
//css-carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const HeroCarousal = ()=>{
    const [images, setImages] = useState([]);
    useEffect(() => {
        const requestNowPlayingMovies = async()=>{
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
    },[])
    var settingslg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "338px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // own custom arrows for carousel
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    var settings = {
        innerWidth:100,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow />
      };

    return(
        <>
        <div className="lg:hidden">
            <HeroSlider className="heroCarousal" {...settings}>
                {
                    images.map((image)=>(
                        <div className="w-full h-64 md:h-80 py-3">
							<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                            alt="testing" className="w-full h-full"/>
						</div>
                    ))
                }
            </HeroSlider>   
        </div>
        <div className="hidden lg:block">
        <HeroSlider {...settingslg}>
                {
                    images.map((image)=>(
                        <div className="w-full h-96 px-1 py-3">
							<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                            alt="testing" className="w-full h-full rounded-md"/>
						</div>
                    ))
                }
        </HeroSlider>
        </div>
        </>
    )
}

export default HeroCarousal;