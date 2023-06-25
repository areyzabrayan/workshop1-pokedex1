import "./styles/style.scss";
<<<<<<< HEAD
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
=======
import  {URL_API}  from "./scripts/services/dataPokemons";
const  axios = require ("axios");
let input = undefined;
let searchForm = undefined;
let pokemonList = undefined;
let foundPokemons = []; 

//Captura elementos DOM
 const contenedorA = document.getElementsByClassName('section-a')
 const contenedorB = document.getElementsByClassName('section-b')
 const contenedorC = document.getElementsByClassName('div_tabla2')
 const contenedorD = document.getElementsByClassName('cuadro-imagenes')
 

 document.addEventListener("DOMContentLoaded", async () => {
  const response = await axios.get(URL_API);
  input = document.querySelector(".input__pokemon");
  searchForm = document.getElementById("form__search");
  pokemonList = response.data.results;
  searchForm.addEventListener("submit", (event) => {
    search(event);
  });
  // content = document.querySelector("#content");
  await filter("c");
});
 
const print = () => {
  let htmlCode1 = `
            <h1 class="titulo_principal">${foundPokemons[0].name}</h1>
            <img class="imagen-section-a" src=${foundPokemons[0].image} alt="fuegorojo">`
  contenedorA.innerHTML = htmlCode1;      
  
  let htmlCode2 = `
            <figure class="cuadro-imagen">
            <img class="imagen-section-b" src="image.setAttribute('../app/images/pokemon3.png', pokemon3.png)" alt="pokemonPrincipal">
            </figure>
             `
  contenedorB.innerHTML = htmlCode2;    
const filter = ()=>{
  let htmlCode3 = `
          <span class="texto-b">${foundPokemons[0].Id}</span>
          <span class="texto-b">${foundPokemons[0].level}</span>
          <span class="texto-b">${foundPokemons[0].type}</span>
          <span class="texto-b">${foundPokemons[0].ability}</span>
          <span class="texto-b">${foundPokemons[0].height}</span>
          <span class="texto-b">${foundPokemons[0].weight}</span>
           `
  contenedorC.innerHTML = htmlCode3;   
  
  let htmlCode4 = `
                <img class="pokemon" src=${foundPokemons[0].image} alt="Pikachu">
                <img class="pokemon" src=${foundPokemons[0].image} alt="Eevee">
                <img class="pokemon" src=${foundPokemons[0].image} alt="Charizard">
                <img class="pokemon" src=${foundPokemons[0].image} alt="Bulbasaur">
           `
  contenedorD.innerHTML = htmlCode4;    

}
  }



const search = async (event) => {
  event.preventDefault();
  await filter(input.value);
};



const filter = async (characters) => {
  foundPokemons = [];
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.startsWith(characters)
  );

  for (let i = 0; i < filteredPokemon.length; i++) {
    if (i == 5) {
      break;
    }
    const response = (await axios.get(filteredPokemon[i].URL_API)).data;

    foundPokemons.push({
      Id: response.id,
      name: filteredPokemon[i].name,
      image: response.sprites.front_default,
      level: response.base_experience,
      type: response.types[0].type.name,
      hability: response.abilities[0].ability.name,
      height: response.height,
      weight: response.weight,
    });
  }

  if (foundPokemons.length > 0) {
    if (foundPokemons.length < 5) {
      for (let i = foundPokemons.length; i < 5; i++) {
        foundPokemons.push({
          Id: 0,
          name: "incognito",
          image: incognito,
          level: 0,
          type: "Unknown",
          ability: "Unknown",
          height: 1,
          weight: 1,
        });
      }
    }
    print();
  }
};
>>>>>>> Brayan
