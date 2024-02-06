import {jsonData} from '../pokedex.json'

export const getPokemons = async(req, res) =>{
  try {
    res.sendStatus(200).json(jsonData);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }

}



