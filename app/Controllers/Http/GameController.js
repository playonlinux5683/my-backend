'use strict'

class GameController {
  render({ request, view }) {
    /** get number from the url query string */
    const guessedNumber = Number(request.input('number'))
    const randomNumber = Math.floor(Math.random() * 20) + 1


    return view.render('game', { guessedNumber, randomNumber })

  }
}

module.exports = GameController
