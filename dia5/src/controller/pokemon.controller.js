const axios = require ('axios');
const pokemon = require ('../models/pokemon');

async function getPokemon(request, response) {

    const id = request.query.id
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
   
    try{
        const data = await axios.get (url)
        // *** este console.log lo hace en el terminal o consola***
        console.log (data)

        const res = {
            id: data.data.id,
            name: data.data.name,
            image: data.data.sprites.front_default,
            ability: data.data.ability
        }
        response.send ({error: false, code: 200, res})
    } 
    catch(error){
        console.log(error)
        response.send({error: true, code: 400})
    }
}
// getPokemon();


module.exports = { getPokemon}
