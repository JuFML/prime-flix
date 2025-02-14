import { BrowserRouter, Routes, Route } from "react-router-dom";

import Film from "./pages/Film";
import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";
import FavFilms from "./pages/FavFilms";

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="/favorites" element={<FavFilms />} />

            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp