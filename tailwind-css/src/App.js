import {Route} from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";
//axios
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./pages/Home.page";
import MovieHOC from "./HOC/Movie.HOC";
import Moviepage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

//axios default settings
axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Homepage} />
      <MovieHOC path="/movie/:id"  component={Moviepage} />
      <DefaultHOC path="/plays" component={Plays} />
    </>
  );
}

export default App;
