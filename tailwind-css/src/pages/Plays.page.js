import react from "react";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import PosterComponent from "../components/Poster/Poster.components";

const Plays=()=>{
    return(
        <>
        <div className="container flex flex-row mt-16 mx-20 bg-gray-100">
        <div className="lg:block hidden w-1/4 ml-10">
            <h1 className="text-2xl font-bold">Filters</h1>
            <div>
                <div className="bg-white py-3 rounded-md px-3 mb-3">
                <PlaysFilter title="Days" tags={["Today","Tomorrow","This Weekend"]}/>
                </div>
                <div className="bg-white py-3 rounded-md px-3 mb-3">
                <PlaysFilter title="Languages" tags={["English","Hindi","Tamil"]}/>
                </div>
                <div className="bg-white py-3 rounded-md px-3 mb-3">
                <PlaysFilter title="Categories" tags={["Theatre"]}/>
                </div>
                
                <div className="bg-white py-3 rounded-md px-3 mb-3">
                <PlaysFilter title="Genre" tags={["Comedy","Drama"]}/>
                </div>
                
                <div className="bg-white py-3 rounded-md px-3 mb-3">
                <PlaysFilter title="More Filters" tags={["Online Streaming","Outdoor Events"]}/>
                </div>
                
                <div className="bg-white py-3 rounded-md px-3 mb-3">
                <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
                </div>
                
            </div>
        </div>
        <div className="flex flex-wrap lg:w-7/12 gap-8 mx-auto">
        <h1 className="text-2xl font-bold w-full">Plays in Chennai</h1>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4 ">
            <img 
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310368-bprzbkxdue-portrait.jpg"
            title="Coffee"
            subtitle=""
            className="rounded-lg"
            />
            <h3 className="font-bold">Coffee</h3>
            <h3>Alliance Francaise of ....</h3>
            <h3 className="text-gray-500">English </h3>
            <h3 className="text-gray-500">₹ 350</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img 
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
            title="Digital Theatre Festival Pass (Access To 2 Plays)"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Coffee</h3>
            <h3>Alliance Francaise of ....</h3>
            <h3 className="text-gray-500">English </h3>
            <h3 className="text-gray-500">₹ 350</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img 
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA3IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314550-dnbbnntjxd-portrait.jpg"
            title="Digital Theatre Festival Pass (Access To 2 Plays)"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Amarar Kalki-in Ponniyin Selvan Play</h3>
            <h3>Sir Pitty Thyagaraya hall..</h3>
            <h3 className="text-gray-500">Tamil </h3>
            <h3 className="text-gray-500">₹ 300 onwards</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img  
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316374-vduglfrpth-portrait.jpg"
            title="Digital Theatre Festival Pass (Access To 2 Plays)"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Alwhaa</h3>
            <h3>Watch on book my show</h3>
            <h3 className="text-gray-500">Tamil </h3>
            <h3 className="text-gray-500">₹ 150</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img 
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMyBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316159-kqdcdgwtwe-portrait.jpg"
            title="Coffee"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Forest Stories from the Mahabharata - Online</h3>
            <h3>Watch on Zoom</h3>
            <h3 className="text-gray-500">English </h3>
            <h3 className="text-gray-500">₹ 230</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img 
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315961-zhztnetsyr-portrait.jpg"
            title="Digital Theatre Festival Pass (Access To 2 Plays)"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Ramayana Connecting the Dots - Onlin...</h3>
            <h3>Watch on Zoom</h3>
            <h3 className="text-gray-500">English </h3>
            <h3 className="text-gray-500">₹ 230</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img 
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00316131-stvumyphdw-portrait.jpg"
            title="Digital Theatre Festival Pass (Access To 2 Plays)"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Qadir Ali Baig Theatre Festival</h3>
            <h3>Multiple venues</h3>
            <h3 className="text-gray-500">English/Hindi </h3>
            <h3 className="text-gray-500">₹ 250 onwards</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 my-4">
            <img  
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pewmjpgmpk-portrait.jpg"
            title="Digital Theatre Festival Pass (Access To 2 Plays)"
            subtitle="English ₹ 350"
            className="rounded-lg"
            />
            <h3 className="font-bold">Ranga Shankara</h3>
            <h3>Multiple venues</h3>
            <h3 className="text-gray-500">Kannada </h3>
            <h3 className="text-gray-500">₹ 150 onwards</h3>
            </div>
        </div>
        </div>
        </>
    )
}

export default Plays;