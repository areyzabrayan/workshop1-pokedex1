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

  document.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get(URL_API);
    pokemonList = response.data.results;
})
