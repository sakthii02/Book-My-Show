import React from "react";
import { BiChevronRight ,BiSearch,BiShareAlt} from "react-icons/bi"
import {AiFillCaretDown,AiOutlineMenu} from "react-icons/ai"
const NavSm=()=>{
    return(
        <>
        <div className="text-white flex items-center justify-between">
        <div>
            <h3 className="text-xl font-bold">It All Starts Here</h3>
        </div>
        <div className="w-8 h-8">
            <BiShareAlt className="w-full h-full"/>

        </div>
        </div>
        </>
    )
}
const NavLg=()=>{
    return(
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2">
                <div>
                    <img src="" alt="bOok mY shOw" className="text-white"/>
                </div>
                <div className="bg-white flex items-center rounded-md w-full p-2">
                    <BiSearch />
                    <input type="search" className="focus:outline-none w-full" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
                </div>
            </div>
            <div className=" text-white flex items-center gap-7">
                <span className="flex items-center">
                    <h4 className="text-gray-300 hover:text-white cursor-pointer">chennai</h4>
                    <AiFillCaretDown />
                </span>
                <button className="bg-red-600 rounded px-2 py-1 w-20">Sign in</button>
                <div className="w-8 h-8">
                    <AiOutlineMenu className="w-full h-full cursor-pointer"/> 
                </div>
            </div>
        </div>
    )
}

const MovieNavbar=()=>{
    return(
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-navCol-800 px-4 py-2">
            <div className="bg-white-900 md:hidden ">{
                //mobile screens
                <NavSm />
            }
            </div>
            <div className="hidden lg:hidden md:block">{
                //tablet screens
                <NavSm />
            }
            </div>
            <div className="hidden lg:flex">{
                <NavLg />
                //desktop screens
            }
            </div>
        </nav>
        </>
    )
}

export default MovieNavbar;