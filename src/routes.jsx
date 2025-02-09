import { BrowserRouter, Routes, Route } from "react-router-dom";

import Film from "./pages/Film";
import Home from "./pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<Film />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp