import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";
import MovieHero from "../components/MovieHero/MovieHero.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component.component";
import { Premier } from "../components/Premier/Premier.components";
import PremierImages from "../config/TempPosters.config";
import {RiMovie2Fill} from "react-icons/ri";
import Slider from "react-slick";
import PosterComponent from "../components/Poster/Poster.components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import axios from "axios";

export const launchRazorPay = ()=>{
    let options = {
        key : "rzp_test_j0oAPy8Ll6Mefa",
        amount : 500*100,
        currency : "INR",
        name : "Book My show ",
        description : "Movie purchase or rent",
        image : "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler : () =>{
            alert("Payment Done")
        },
        theme : {color : "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};
function NextArrow(props) {
    return (
        <>
            <div
                className="slick-arrow"
                style={{...props.style,
                    display:"block",
                    backgroundColor:"#666666",
                    width:"30px",
                    height:"30px",
                    position:"absolute",
                    right:"0",
                    top:"0",
                    transform:`translateY(${props.pos})`,
                    borderRadius:"50%",
                    fontSize:"30px",
                    zIndex:"2"
                }}
                onClick={props.onClick}
            >
                <IconContext.Provider value={{color:"white", className:"global-class-name"}}>
                        <BiChevronRight />
                </IconContext.Provider>
            </div>
        </>
    );
}
function PrevArrow(props) {
	return (
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#666666",
					width:"30px",
					height:"30px",
					position:"absolute",
					left:"0",
					top:"0",
					transform:`translateY(${props.pos})`,
					borderRadius:"50%",
					fontSize:"30px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
					<div>
						<BiChevronLeft />
					</div>
				</IconContext.Provider>
			</div>
		</>
	);
}
const Moviepage=()=>{
    
    var settings = {
        infinite: true,
	    autoplay: false,
	    slidesToShow: 4,
	    slidesToScroll: 2,
	    InitialSlide: 0,
        prevArrow: <PrevArrow pos="80px" />,
        nextArrow: <NextArrow pos="80px"/>
    };
    var castImages=[
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
        realName:"Simu Liu",
        chrName:"as Shang-Chi"},
        {src:"",
        realName:"Awkwafina",
        chrName:"Katy"},
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg",
        realName:"Tony Leung Chiu-wai",
        chrName:"as Wenwu / The Mandarin"},
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
        realName:"Michelle Yeoh",
        chrName:"as Jiang Nan"},
        
        
    ]
    var crewImages=[
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg",
        realName:"Destin Cretton",
        subtitle:"Director"
        },
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
        realName:"Kevin Feige",
        subtitle:"Producer"
        },
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg",
        realName:"Jonathan Schwartz",
        subtitle:"Producer"
        },
        {src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg",
        realName:"Bill Pope",
        subtitle:"Cinematographer"
        },

    ]
    const [popularMovies , setPopularMovies] = useState([]);
    useEffect (() => {
        const requestPopularMovies = async() =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);
    return(
        <>
            <MovieHero />
            <div className="my-10 lg:mx-64 lg:w-1/2">
                <div className="container flex flex-col gap-5">
                    <h2 className="text-2xl font-bold">About the movie</h2>
                    <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div>
                <h1 className="text-2xl font-bold ">Applicable offers</h1>
                <div className="flex flex-row gap-3 bg-yellow-100 border-yellow-400 border-2 rounded-lg border-dashed w-96 my-4 px-2">
                    <div className="w-8 h-8">
                        <RiMovie2Fill className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h1>Filmy Pass</h1>
                        <p>Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="w-full h-124 ">
                <h1 className="text-2xl font-bold my-10">Cast</h1>
                <Slider {...settings}>
                {
                    castImages.map((image)=>(
                        <div className="items-center text-center">
                            <img src={image.src} className="w-full h-full rounded-full px-3"/>
                            <h1 className="w-48 text-md">{image.realName}</h1>
                            <h1 className="text-gray-500">{image.chrName}</h1>
                        </div>
                        ))
                }
                </Slider>
                </div>
                <div className="w-full h-124 ">
                <h1 className="text-2xl font-bold my-10">Crew</h1>
                <Slider {...settings}>
                {
                    crewImages.map((image)=>(
                        <div className="items-center text-center">
                            <img src={image.src} className="w-full h-full rounded-full px-3"/>
                            <h1 className="w-48 text-md">{image.realName}</h1>
                            <h1 className="text-gray-500">{image.subtitle}</h1>
                        </div>
                        ))
                }
                </Slider>
                </div>
            </div>
            </div>
            <div className="container mx-auto px-24 my-16">
                <PosterSlider images={popularMovies} title="You might also like" subtitle="" isDark={false} />
            </div>
        </>
    )
}

export default Moviepage;