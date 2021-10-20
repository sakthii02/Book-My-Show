import React from "react";

import Slider from "react-slick";
import settings from "../../config/PosterCarousal.config";
import PremierImages from "../../config/TempPosters.config";
import PosterComponent from "../Poster/Poster.components";

export const Premier=()=>{
    return(
        <>
        <div className="text-white py-4">
            <h1 className="text-2xl font-black">Premiers</h1>
            <p>Brand new releases every friday</p>
        </div>
        <Slider {...settings}>
        {
            PremierImages.map((image)=>(
                <PosterComponent {...image} isDark /> 
            ))
        }
        </Slider>
        </>
    )
}