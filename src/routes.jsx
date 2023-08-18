import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/home";


function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default Rotas;