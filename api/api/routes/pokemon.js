
module.exports = app => {
    const controller = require('../controllers/pokemonController')();
  
    app.route('/api/v1/pokemons')
      .get(controller.pokemonController);
  }