import { BrowserRouter, Routes, Route } from "react-router-dom";

import Film from "./pages/Film";
import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<Film />} />

            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp