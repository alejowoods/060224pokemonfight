import { pokemons } from "../pokemons.js";

export const getAllPokemons = async(req, res) =>{
  try {
    res.json(pokemons);
    } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
}

export const getPokemon = async(req, res) =>{
  try {
    const {id} = req.params;
    console.log('Requested ID:', id);
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
    console.log('Found Pokemon:', pokemon);
    if(!pokemon){
      res.status(404).json({message: `Pokemon with id ${id} not found`});
    }
    res.json(pokemon);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
}



