//HOC= transforms onr component to another component

import React, { Component } from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC=({ component : Component, ...rest })=>{
    return(
        <>
        <Route 
        {...rest}

        component={(props)=>(
            <DefaultLayout>
                <Component {...props}/>
            </DefaultLayout>
        )
        }
        />
        </>
    )
}

export default DefaultHOC;