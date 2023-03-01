import "bootstrap/dist/css/bootstrap.min.css";

// fonts import
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import FunnyImg from "./FunnyImg/FunnyImg";
import MoviesGallery from "./MoviesGallery/MoviesGallery";
// import SearchForm from './SearchImg/SearchForm';
import Counter from "./ThreeTimesRender/ThreeTimesCounter";
import SearchForm from "./SolutionReact2_1/SearchForm.js";
import NumbersFacts from "./NumbersFacts/NumbersFacts.js";
import NumbersFactsObj from "./NumbersFacts/NumbersFactsObj";
import NumbersFactsLiked from "./NumbersFacts/FactsWithLikes/NumberFactsLiked";
import Coctails from "./Coctails/Coctails";

export default function App() {
    console.log("Rendering App");

    // return (
    //   <MoviesGallery />
    // )

    // return <FunnyImg />

    // return <Counter />

    // return <SearchForm />

    //solution for React2 - ex 1
    //  return <SearchForm />

    // return <NumbersFacts />

    // return <NumbersFactsObj />

    return <NumbersFactsLiked />;

    // return <Coctails />
}

// export default App;
