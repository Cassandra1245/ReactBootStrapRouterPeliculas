import logo from './logo.svg';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useState, useContext} from 'react'
import { Container , Row, Col, Image} from 'react-bootstrap';
import Pelicula from './Pelicula';
import MenuPeliculas from './MenuPeliculas'
import PeliculasContext from './PeliculaContext';

function ListadoPeliculas() {
  const { peliculas, addPelicula, removePelicula } = useContext(PeliculasContext);
  const [selectedPelicula, setSelectedPelicula] = useState();
  const [categorias, setCategorias] = useState([]);
  const [directores, setDirectores] = useState([]);


  const init = (data) =>{
    let aux_categorias = [];
    let aux_directores = [];
    if(data && data instanceof Array)
    {
        for(let i=0;i<data.length;i++)
        {
            if(data[i].categoria && data[i].categoria instanceof Array)
            {
              for(let j=0;j<data[i].categoria.length;j++)
              {
                if (!aux_categorias.includes(data[i].categoria[j]))
                {
                  aux_categorias.push(data[i].categoria[j]);
                }
              }
            }
            else if (!aux_categorias.includes(data[i].categoria))
            {
                aux_categorias.push(data[i].categoria);
            }            
            if (data[i].director && ! aux_directores.includes(data[i].director))
            {
              aux_directores.push(data[i].director);
            }

        }
    }
    setCategorias(aux_categorias);
    setDirectores(aux_directores);
  }

  useEffect( ()=>
  {
    const loadPelicula = async()=> 
    {
      const response = await fetch('./peliculas.json');
      const json = await response.json();
      init(json);
      if(json.length>0)
      {
        setSelectedPelicula(json[0]);
      } 
    }
    loadPelicula();
  }, []);

  return (
    <>
    <MenuPeliculas categorias={categorias} directores={directores}></MenuPeliculas>
    <Container>
      
     <Row>
    {
      peliculas.map((pelicula)=><Pelicula data={pelicula} handler={setSelectedPelicula}></Pelicula>)
    }
    </Row> 
    </Container>
    </>
  );
}

export default ListadoPeliculas;
