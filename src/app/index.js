import "./styles/style.scss";

//Funcion para crear array aleatorio
let idPokemones = [];

for (let i = 0; i < 5; i++) {
  idPokemones.push(Math.floor(Math.random() * 1000) + 1);
}

//Funcion para peticion axios 
const getPokemonUrl = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

//Funion para accerder a la api con ID 
const pokemones = [];

for (let i = 0; i < 5; i++) {
  pokemones.push(
    await getPokemonUrl(
      `https://pokeapi.co/api/v2/pokemon/${idPokemones[i]}`
    )
  );
}
console.log(pokemones);

//Capturas DOM
const contenedorA = document.getElementById('section-a')
const contenedorB = document.getElementById('section-b')
const contenedorC = document.getElementById('div_tabla2')
const contenedorD = document.getElementById('cuadro-imagenes');

//Funcion pintar tarjeta main de cada pokemon 
const print = (pokemon) => {

  contenedorA.innerHTML =``;
  let htmlName = `
            <h1 class="titulo_principal">${pokemon.name}</h1>
             `
  contenedorA.innerHTML = htmlName;      


  contenedorB.innerHTML =``;
  let htmlImage = `
            <figure class="cuadro-imagen">
            <img class="imagen-section-b" src=${pokemon.sprites.front_default} alt="pokemonPrincipal">
            </figure>
             `
  contenedorB.innerHTML = htmlImage;    

  contenedorC.innerHTML =``;
  let htmlCaracters = `
          <span class="texto-b">${pokemon.id}</span>
          <span class="texto-b">${pokemon.base_experience
          }</span>
          <span class="texto-b">${pokemon.types[0].type.name}</span>
          <span class="texto-b">${pokemon.abilities[0].ability.name}</span>
          <span class="texto-b">${pokemon.height}</span>
          <span class="texto-b">${pokemon.weight}</span>
           `
  contenedorC.innerHTML = htmlCaracters;   
  
}
print(pokemones[0]);


//Funcion printar tarjeras en el footer
const printFooter = (pokemones) =>{

  pokemones.forEach((element, index) => {
  
  let htmlFooter = `
                <img class="pokemon" id="clickImagen${index}" src=${element.sprites.front_default} alt="Pikachu">
                 `
  contenedorD.innerHTML += htmlFooter; 
  });

}
printFooter(pokemones);


//Funcion dar click en imagenes footer y abrir tarjeta del pokemon en el main 
const clickImagen = () => {

  pokemones.forEach((element, index) => {
    const idImagen = document.getElementById('clickImagen'+index)
    idImagen.addEventListener('click',()=> {
      print(element)
    })
    
  });

}
clickImagen(); 


//Funcion para buscar pokemon en input 
const BotonBusqueda = () => {
  const BotonBusqueda = document.getElementById('boton_busqueda'); 

  BotonBusqueda.addEventListener('click', () =>{

    const datoBusqueda = document.getElementById('busqueda_pokemon').value;

        getPokemonUrl(
          `https://pokeapi.co/api/v2/pokemon/${datoBusqueda}`
         
        ).then(data=> print(data)).catch(
          Swal.fire(
            'Muy bien!',
            'Pokemon encontrado!',           
          ))
        // then promesa cumplida y traer la data  
  })
}
BotonBusqueda();










 
