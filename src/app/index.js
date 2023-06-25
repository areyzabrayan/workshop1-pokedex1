import "./styles/style.scss";
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
