import express from 'express';



const app = express();
const port = 8000;

app.use('/', pokemonRouter);


app.listen(port, ()=>{
    console.log('Pikachu is listening to port', 8000);
})
