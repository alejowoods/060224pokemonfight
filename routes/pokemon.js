import express from 'express';
import {getAllPokemons, getPokemon} from '../controllers/pokemonControllers.js'


const pokemonRouter = express.Router();

pokemonRouter.get('/pokemons', getAllPokemons);
pokemonRouter.get('/pokemons/:id', getPokemon);

export default pokemonRouter;