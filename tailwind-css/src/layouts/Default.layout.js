import React from "react";
//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";

const DefaultLayout=(props)=>{
    return(
        <>
        <div className="bg-gray-100">
        <Navbar />
        <HeroCarousal />
        {props.children}
        </div>
        </>
    )
}

export default DefaultLayout;