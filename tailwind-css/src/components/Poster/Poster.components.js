import react from "react";

const PosterComponent=(props)=>{
    return(
        <>
        <div className="flex flex-col justify-items-end items-start gap-2 px-3 ">
            <div className="h-48 md:h-60 lg:h-80">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                alt={props.original_title}
                className=" w-full h-full rounded-xl"></img>
            </div>
            <h3 className={`text-lg font-bold ${
                props.isDark?"text-white":"text-gray-700"
            }`}>
                {props.title}
            </h3>
            <p className={`text-sm font-bold ${
                props.isDark? "text-white": "text-gray-500"
            }`}>
                {props.original_language}
            </p>
        </div>
        </>
    )
}

export default PosterComponent;