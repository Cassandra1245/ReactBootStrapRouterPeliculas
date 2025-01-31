import React, { createContext, useEffect, useState } from 'react';

const PeliculasContext = createContext("Peliculas");

export const PeliculaProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);

  const addPelicula = (item) => {
    setPeliculas([...peliculas, item]);
  };

  const removePelicula = (itemId) => {
    setPeliculas(peliculas.filter(item => item.id !== itemId));
  };

  useEffect(() => {
    const loadPelicula = async () => {
      const response = await fetch('./peliculas.json');
      const json = await response.json();
      setPeliculas(json);
    };
    loadPelicula();
  }, []);

  return (
    <PeliculasContext.Provider value={{ peliculas, addPelicula, removePelicula }}>
      {children}
    </PeliculasContext.Provider>
  );
};

export default PeliculasContext;
