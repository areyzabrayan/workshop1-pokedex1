import "./styles/style.scss";
import { URL_API } from "./scripts/services/dataPokemons";
import axios from 'axios';
import bolaPokemon2 from '../app/images/bolaPokemon2.png';
import fuegoRojo from '../app/images/fuegorojo.webp';

import pikachu from '../app/images/pokemon4.png';
import Eevee from '../app/images/Eevee.webp';
import axios from "axios";

// import pokemon3 from '../app/images/pokemon3.png';

  const firstImage = document.querySelector(".imagen-header");
  firstImage.src = bolaPokemon2;
  const seconImage = document.querySelector(".imagen-section-a");
  seconImage.src = fuegoRojo;
  
  // const threeImage = document.querySelector(".imagen-section-b");
  // threeImage.src = pokemon3;
  const fourImage = document.querySelector(".pokemon");
  fourImage.src = pikachu;
  const fiveImage = document.querySelector(".pokemonF");
  fiveImage.src = Eevee;

<<<<<<< HEAD
  document.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get(URL_API);
    pokemonList = response.data.results;
})
=======
const prueba = [];
//Contenedor footer
const contenedorFooter = document.getElementById('figura_imagenes')  

//clase de las imagenes 
const cargarImagenes = document.getElementsByClassName('cuadro-imagenes');

const cargarImagenesFooter = () =>{
  contenedorFooter.innerHTML = ``;
  for (let index = 0; index < cargarImagenes.length; index++) {
    if (i == 5) {
      cargarImagenes.forEach(element => {
        contenedorFooter.innerHTML= `
          <img class="pokemon" src=${element.sprites.front_default} alt="Pikachu">
          <img class="pokemon" src=${element.sprites.front_default} alt="Eevee">
          <img class="pokemon" src=${element.sprites.front_default} alt="Charizard">
          <img class="pokemon" src=${element.sprites.front_default} alt="Bulbasaur">
         `;
      }); 
      break;
    } 
    
  }

}

cargarImagenesFooter();
>>>>>>> 511f63ebcf0745d7a5ce2dba532d3d9ed3d4fd20
