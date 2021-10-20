//HOC= transforms onr component to another component

import React, { Component } from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/Movie.Layout";
const MovieHOC=({ component : Component, ...rest })=>{
    return(
        <>
        <Route 
        {...rest}

        component={(props)=>(
            <MovieLayout>
                <Component {...props}/>
            </MovieLayout>
        )
        }
        />
        </>
    )
}

export default MovieHOC;