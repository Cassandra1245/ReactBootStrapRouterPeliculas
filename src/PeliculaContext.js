import React, { createContext, useState } from 'react';


const removePelicula= (item) => {
    setPeliculas(peliculas.filter(item=>))
}



const CartContext = createContext();

export const PeliculasContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addPelicula = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removePelicula = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  useEffect(() => {
    const fetchPeliculas = async () => {
      const response = await fetch("./peliculas.json");
      const data = await response.json();
      setPeliculas(data);
    };
    fetchPeliculas();
  }, []);

  return (
    <PeliculasContext.Provider value={{ peliculas, addPelicula, removePelicula }}>
      {children}
    </PeliculasContext.Provider>
  );
};
