import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Compra from "./pages/compra";



function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/compra/:cor" element={<Compra/>}/>
        </Routes>
    )
}

export default Rotas;