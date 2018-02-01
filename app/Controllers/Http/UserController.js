'use strict'

class UserController {
  async login({ request, auth, view }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }
}

module.exports = UserController
