import React from "react";
import MovieNavbar from "../components/Navbar/movienavbar.component";
//components
const MovieLayout=(props)=>{
    return(
        <>
        <div className="bg-gray-100">
        <MovieNavbar />
        {props.children}
        </div>
        </>
    )
}

export default MovieLayout;