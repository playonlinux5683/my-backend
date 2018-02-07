'use strict'

class UserController {
  async * signin({ request, response, auth }) {
    // console.log(arguments);
    const { email, password } = request.all()
    console.log(request.all())
    try {
      await auth.remember(true).attempt(email, password)
      return response.redirect('/')
    } catch (error) {
      console.log(error)
      response.send('You are not logged in')
    }
  }

  async signout({ request, response, auth }) {
    // console.log(arguments);

    try {
      await auth.logout()
      return response.redirect('signin')
    } catch (error) {
      console.log(error)
      response.send('You are not logged in')
    }
  }

  show({ auth, params }) {
    console.log(params);
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }


  async store({ request, response, auth }) {
    // console.log(arguments);
    const { username, email, password } = request.all()
    console.log(request.all())
    try {
      user = new User();
      user.username = username
      user.email = email
      user.password = password

      user.save();
      await auth.remember(true).attempt(email, password)
      // response.redirect('/home')
    } catch (error) {
      console.log(error)
      response.send('You are not logged in')
    }
  }

}

module.exports = UserController
