const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    if(!req.session.deck) {
      req.session.deck = []
    }
    knex('card').then((result) => {
      res.render('index', {cards: result, deck: req.session.deck});
    })
  },

  createCard: (req, res) => {
    knex('card').insert({
      mana: req.body.mana,
      atkPower: req.body.atkPower,
      health: req.body.health,
      desc: req.body.desc
    }).then(() => {
      res.redirect('/')
    })
  },

  addToDeck: (req, res) => {
    knex('card').where('id', req.params.id).then((result) => {
      req.session.deck.push(result[0])
    })
    req.session.save(() => {
      res.redirect('/')
    })
  },

  remove: (req, res) => {
    req.session.deck.splice(req.params.id, 1)
    req.session.save(() => {
      res.redirect('/')
    })
  }

}
