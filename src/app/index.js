import "./styles/style.scss";

import bolaPokemon2 from '../app/images/bolaPokemon2.png';
import fuegoRojo from '../app/images/fuegorojo.webp';
// import pokemon3 from '../app/images/pokemon3.png';

  const firstImage = document.querySelector(".imagen-header");
  firstImage.src = bolaPokemon2;
  const seconImage = document.querySelector(".imagen-section-a");
  seconImage.src = fuegoRojo;
  // const threeImage = document.querySelector(".imagen-section-b");
  // threeImage.src = pokemon3;


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