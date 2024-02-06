import express from 'express';
import {getPokemons} from '../controllers/pokemonControllers'

const pokemonRouter = express.Router();

pokemonRouter.get('/pokemon', getPokemons);

export default pokemonRouter;