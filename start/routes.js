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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */


const Route = use('Route')

const AluguelController = use('App/Controllers/Http/AluguelController')
const ClienteController = use('App/Controllers/Http/ClienteController')
const GestorController = use('App/Controllers/Http/GestorController')
const TermoCompromissoController = use('App/Controllers/Http/TermoCompromissoController')
const VeiculoController = use('App/Controllers/Http/VeiculoController')



Route.get('/alugueis', 'AluguelController.index')
Route.get('/clientes', 'ClienteController.index')
Route.get('/gestores', 'GestorController.index')
Route.get('/termos-compromisso', 'TermoCompromissoController.index')
Route.get('/veiculos', 'VeiculoController.index')
Route.on('/').render('welcome')
