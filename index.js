import express from 'express';
import pokemonRouter from './routes/pokemon.js';


const app = express();
const port = 8000;

app.use(express.json());
app.use('/', pokemonRouter);



app.listen(port, ()=>{
    console.log('Pikachu is listening to port', 8000);
})
