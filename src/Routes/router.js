import React from "react";
import {Routes, Route} from "react-router-dom";
import Generator from "../Pages/Home";
import GeneratorBack from "../Pages/Back";

export default function Rotas(){
    return(
        <Routes>
            <Route element={<Generator/>} path='/front'/>
            
            <Route element={<GeneratorBack/>} path='/back'/>
        </Routes>
    )
}