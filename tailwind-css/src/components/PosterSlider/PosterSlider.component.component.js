import { PreviousMap } from "postcss";
import React from "react";
import PosterComponent from "../Poster/Poster.components";
import settings from "../../config/PosterCarousal.config";
import Slider from "react-slick";

const PosterSlider=(props)=>{
    return(
        <>
            <div className="py-4">
                <h1 className={
                    `text-2xl font-black ${
                        props.isDark ? "text-white":"text-gray-800"
                    }
                `}>
                {props.title}</h1>
                <p className={
                    `text-sm ${
                        props.isDark ? "text-white":"text-gray-800"
                    }
                `}>
                {props.subtitle}</p>
            </div>
            <Slider {...settings}>
            {
                props.images.map((image)=>(
                    <PosterComponent {...image} isDark={props.isDark} /> 
                ))
            }
            </Slider>

        </>
    )
}

export default PosterSlider;