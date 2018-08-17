//Update the name of the controller below and rename the file.
const card = require("../controllers/card.js")
module.exports = function(app){

  app.get('/', card.index);

  app.post('/card', card.createCard)

  app.get('/card/add/:id', card.addToDeck)

  app.get('/card/remove/:id', card.remove)

}
