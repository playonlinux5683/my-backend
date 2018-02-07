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

// const User = use('App/Models/User')
const Route = use('Route')

Route.
  group(() => {
    // Route.get('/', 'AuthController.index')
    Route.on('/').render('home')
    Route.get('/login', 'AuthController.index').as('login')
    Route.post('/login', 'AuthController.login')//.as('login')
    Route.get('/logout', 'AuthController.logout').as('logout')
    Route.get('/register', 'RegisterController.index').as('register')
    Route.post('/register', 'RegisterController.doRegister')//.as('register')

  })
// .middleware('auth:session')



// Route
//   .group(() => {
//     Route
//       .resource('users', 'UserController')
//       .except(['create', 'edit'])

//     Route
//       .get('/signout', 'UserController.signout')
//       .as('signout')
//   })
//   .middleware(['auth:session'])

// Route
//   .post('/signin', 'UserController.signin')
//   .as('signin')

// Route.on('/signin').render('signin')
// Route.on('/signup').render('signup')
// GET / signin => sign in page
// POST / signin => sign in form submit

// GET / signup
// POST / signup User creation
// // POST /users => 

// GET / signout => si

// GET / users /: uid
// PUT / users /: uid
// DELETE / users /: uid
// // GET /users/:uid/settings

// GET / search => Search form page
// POST / search => GET / results
// PUT / users /: uid / settings


// Route.post('login', 'UserController.login')
//   .middleware('auth')
// Route.resource('signin', 'UsersController')
// Route.ressource('signin', ({ view }) => view.render('signin'))
//   .post('signin', 'UserController.login')
//   .as('signin');


// Route.get('/users', async ({ request, view }) => {
//   const users = await User.all();

//   if (request.format() === 'json') {
//     return users
//   } else {
//     return view.render('users.list', { users })
//   }
// })
//   .formats(['json'])

// wildcard route
Route.any('*', ({ view }) => view.render('main'))



