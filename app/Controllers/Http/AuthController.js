'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class AuthController {

  async index({ request, response, auth, view }) {
    console.log('AuthController.index')
    return view.render('login')
  }

  async login({ request, response, auth, view }) {
    const { email, password } = request.all()
    console.log(request.all())
    try {
      await auth.check()
    } catch (error) {
      console.log(error)
      await auth.remember(true).attempt(email, password)
    }
    return view.render('home')
  }

  async logout({ request, response, auth, view }) {
    console.log(auth);

    try {
      await auth.logout()
      return view.render('login')
    } catch (error) {
      console.log(error)
      response.send('You are not logged in')
    }
  }
}

module.exports = AuthController
