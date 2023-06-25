import "./styles/style.scss";

import bolaPokemon2 from '../app/images/bolaPokemon2.png';
import fuegoRojo from '../app/images/fuegorojo.webp';

import pikachu from '../app/images/pokemon4.png';
import Eevee from '../app/images/Eevee.webp';
import { URL_API } from "./scripts/services/dataPokemons";


//Peticion
const search = async (event) => {
  event.preventDefault();
  await filter(input.value);
}

const filter = async (characters) => {

  foundPokemons = [];
  let filteredPokemon = pokemonList.filter(pokemon => pokemon.name.startsWith(characters));
 
  for (let i = 0; i < filteredPokemon.length; i++) {
    if (i == 5) {
      break;
    }
    const response = (await axios.get(filteredPokemon[i].url)).data;

    foundPokemons.push(
      {
        Id: response.id,
        name: filteredPokemon[i].name,
        image: response.sprites.front_default,
        level: response.base_experience,
        type: response.types[0].type.name,
        ability: response.abilities[0].ability.name,
        height: response.height,
        weight: response.weight,
      }
    );
  }

  search();




// const infoPokemons = async(index) =>{
//   datosPokemons = [];

//   try{
//     // const response = await axios.get(`${URL_API}${index}`);
//     // const data = response.data;
//     // return data;
//     const response = (await axios.get(`${URL_API}${index}`)).data;

//     datosPokemons.push(
//       {
//         Id: response.id,
//         name: filteredPokemon[i].name,
//         image: response.sprites.front_default,
//         level: response.base_experience,
//         type: response.types[0].type.name,
//         ability: response.abilities[0].ability.name,
//         height: response.height,
//         weight: response.weight,
//       }
//     );
//     console.log(datosPokemons)
//   }
//   catch(error){
//     return error;
//   }
// }


// const contenedorFooter = document.getElementById('figura_imagenes');
// const imagenesPokemon = async ()=>{
//   contenedorFooter.innerHTML = ``;
//   for (let index = 0; index < 5; index++) {
//     const dataPokemon = await infoPokemons(index)



//   }

// }


// import pokemon3 from '../app/images/pokemon3.png';

//   const firstImage = document.querySelector(".imagen-header");
//   firstImage.src = bolaPokemon2;
//   const seconImage = document.querySelector(".imagen-section-a");
//   seconImage.src = fuegoRojo;

//   // const threeImage = document.querySelector(".imagen-section-b");
//   // threeImage.src = pokemon3;
//   const fourImage = document.querySelector(".pokemon");
//   fourImage.src = pikachu;
//   const fiveImage = document.querySelector(".pokemonF");
//   fiveImage.src = Eevee;

// const prueba = [];
//Contenedor footer


//clase de las imagenes
// const cargarImagenes = document.getElementsByClassName('cuadro-imagenes');

// const cargarImagenesFooter = () =>{
//   contenedorFooter.innerHTML = ``;
//   for (let index = 0; index < cargarImagenes.length; index++) {
//     if (i == 5) {
//       cargarImagenes.forEach(element => {
//         contenedorFooter.innerHTML= `
//           <img class="pokemon" src=${element.sprites.front_default} alt="Pikachu">
//           <img class="pokemon" src=${element.sprites.front_default} alt="Eevee">
//           <img class="pokemon" src=${element.sprites.front_default} alt="Charizard">
//           <img class="pokemon" src=${element.sprites.front_default} alt="Bulbasaur">
//          `;
//       });
//       break;
//     }

//   }

// }

// cargarImagenesFooter();

