import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ListadoPeliculas from "./ListadoPeliculas";
import Home from "./Home";
import Contact from "./Contact";
import { PeliculaProvider } from "./PeliculaContext";

export default function App() {

    return(
    <PeliculaProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<ListadoPeliculas />} />
        <Route path="/contacto" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </PeliculaProvider>
    );
}
