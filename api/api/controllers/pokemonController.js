
module.exports = () => {
    const pokemonDB = require('../data/pokemonData.json');
    const controller = {};
  
    controller.pokemonController = (req, res) => res.status(200).json(pokemonDB);
    
    return controller;
  }