const getPokemons = async (url) => {
      const URL_API = await axios.get(url);
      console.log(URL_API.data);

    };