const { Router} = require ('express');
const router = Router();
const pokemonController = require ('../controller/pokemon.controller')


router.get ('./pokemon', pokemonController.getPokemon);

module.exports = router;