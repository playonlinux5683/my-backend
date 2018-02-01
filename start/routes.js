'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const User = use('App/Models/User')
const Route = use('Route')

Route.on('/').render('login')
// Route.post('login', 'UserController.login')
//   .middleware('auth')
Route.post('signin', 'UserController.login')
  .as('signinForm')

Route.get('/users', async ({ request, view }) => {
  const users = await User.all();

  if (request.format() === 'json') {
    return users
  } else {
    return view.render('users.list', { users })
  }
})
  .formats(['json'])

// wildcard route
Route.any('*', ({ view }) => view.render('main'))



